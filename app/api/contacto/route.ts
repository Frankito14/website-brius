import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  telefono: z.string().min(6, "Por favor ingresá un número de teléfono válido."),
  email: z.string().email("Ingresá un correo electrónico válido.").optional().or(z.literal("")),
  motivo: z.string().min(1, "Seleccioná el motivo de tu consulta."),
  mensaje: z.string().max(1000, "El mensaje no puede superar los 1000 caracteres.").optional(),
  consentimiento: z.boolean().refine((val) => val === true, {
    message: "Debés aceptar la política de privacidad para enviar la consulta.",
  }),
  website_check_hp: z.string().max(0, "Spam detectado.").optional().or(z.literal("")),
});

// Simple in-memory rate limiting (max 5 requests per 10 minutes per IP)
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const rateData = ipRequests.get(ip);

    if (rateData && rateData.expiresAt > now) {
      if (rateData.count >= 5) {
        return NextResponse.json(
          { error: "Demasiadas consultas enviadas recientemente. Por favor intentá más tarde o comunicate por WhatsApp." },
          { status: 429 }
        );
      }
      rateData.count++;
    } else {
      ipRequests.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return NextResponse.json({ error: "Datos inválidos", fieldErrors }, { status: 400 });
    }

    const { nombre, telefono, email, motivo, mensaje, website_check_hp } = parsed.data;

    // Honeypot check
    if (website_check_hp && website_check_hp.length > 0) {
      // Discard silently
      return NextResponse.json({ success: true });
    }

    // Server-side logging in development or staging
    console.log("[NUEVA CONSULTA RECIBIDA]", {
      fecha: new Date().toISOString(),
      nombre,
      telefono,
      email: email || "(no provisto)",
      motivo,
      mensaje: mensaje || "(sin mensaje)",
    });

    return NextResponse.json({
      success: true,
      message: "Consulta recibida exitosamente.",
    });
  } catch (error) {
    console.error("[ERROR EN CONTACTO API]", error);
    return NextResponse.json(
      { error: "Ocurrió un error en el servidor. Por favor intentá nuevamente." },
      { status: 500 }
    );
  }
}
