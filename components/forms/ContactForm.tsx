"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../icons/SocialIcons";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    motivo: "Turno de Medicina",
    mensaje: "",
    consentimiento: false,
    website_check_hp: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nombre.trim() || formData.nombre.trim().length < 2) {
      errs.nombre = "Por favor ingresá tu nombre completo.";
    }
    if (!formData.telefono.trim() || formData.telefono.trim().length < 6) {
      errs.telefono = "Por favor ingresá un número de teléfono válido.";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Ingresá un correo electrónico válido.";
    }
    if (!formData.consentimiento) {
      errs.consentimiento = "Debés aceptar la política de privacidad para enviar la consulta.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          motivo: "Turno de Medicina",
          mensaje: "",
          consentimiento: false,
          website_check_hp: "",
        });
      } else {
        setStatus("error");
        setServerMessage(data.error || "Ocurrió un error al procesar tu solicitud.");
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage("No pudimos conectar con el servidor. Podés comunicarte directamente por WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className={cn("p-8 rounded-2xl bg-success-bg border border-success/30 text-center flex flex-col items-center gap-4", className)}>
        <div className="size-14 rounded-full bg-success text-white flex items-center justify-center">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink-950">¡Consulta enviada con éxito!</h3>
        <p className="text-base text-ink-700 max-w-md leading-relaxed">
          Recibimos tu mensaje. Nuestro equipo de recepción se pondrá en contacto con vos a la brevedad para coordinar tu consulta.
        </p>
        <Button
          variant="secondary"
          onClick={() => setStatus("idle")}
          className="mt-2"
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("space-y-4 text-left", className)}>
      {status === "error" && (
        <div className="p-4 rounded-xl bg-danger-bg border border-danger/30 text-danger text-sm flex flex-col gap-2">
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="size-5 shrink-0" />
            <span>{serverMessage}</span>
          </div>
          <div className="pt-2">
            <Button
              href={waLink("Hola, intenté enviar una consulta desde la web.")}
              variant="whatsapp"
              size="md"
              className="w-full text-sm"
            >
              <WhatsAppIcon className="size-4" />
              Escribirnos por WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from view) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_check_hp">No completar este campo</label>
        <input
          id="website_check_hp"
          type="text"
          value={formData.website_check_hp}
          onChange={(e) => setFormData({ ...formData, website_check_hp: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact_nombre" className="block text-sm font-semibold text-ink-900 mb-1.5">
            Nombre y Apellido <span className="text-danger">*</span>
          </label>
          <input
            id="contact_nombre"
            type="text"
            required
            autoComplete="name"
            value={formData.nombre}
            onChange={(e) => {
              setFormData({ ...formData, nombre: e.target.value });
              if (errors.nombre) setErrors({ ...errors, nombre: "" });
            }}
            placeholder="Ej.: María González"
            className={cn(
              "w-full h-12 px-4 rounded-xl border bg-white text-ink-950 placeholder:text-ink-400 text-base transition-all duration-200 focus:outline-none focus:border-accent-600 focus:ring-4 focus:ring-accent-100",
              errors.nombre ? "border-danger focus:border-danger focus:ring-danger/20" : "border-ink-200"
            )}
          />
          {errors.nombre && <p className="text-danger text-xs mt-1 font-medium">{errors.nombre}</p>}
        </div>

        <div>
          <label htmlFor="contact_telefono" className="block text-sm font-semibold text-ink-900 mb-1.5">
            Teléfono de contacto <span className="text-danger">*</span>
          </label>
          <input
            id="contact_telefono"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={formData.telefono}
            onChange={(e) => {
              setFormData({ ...formData, telefono: e.target.value });
              if (errors.telefono) setErrors({ ...errors, telefono: "" });
            }}
            placeholder="Ej.: 11 4455-6677"
            className={cn(
              "w-full h-12 px-4 rounded-xl border bg-white text-ink-950 placeholder:text-ink-400 text-base transition-all duration-200 focus:outline-none focus:border-accent-600 focus:ring-4 focus:ring-accent-100",
              errors.telefono ? "border-danger focus:border-danger focus:ring-danger/20" : "border-ink-200"
            )}
          />
          {errors.telefono && <p className="text-danger text-xs mt-1 font-medium">{errors.telefono}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact_email" className="block text-sm font-semibold text-ink-900 mb-1.5">
            Correo electrónico <span className="text-xs text-ink-400 font-normal">(opcional)</span>
          </label>
          <input
            id="contact_email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            placeholder="ejemplo@correo.com"
            className={cn(
              "w-full h-12 px-4 rounded-xl border bg-white text-ink-950 placeholder:text-ink-400 text-base transition-all duration-200 focus:outline-none focus:border-accent-600 focus:ring-4 focus:ring-accent-100",
              errors.email ? "border-danger focus:border-danger focus:ring-danger/20" : "border-ink-200"
            )}
          />
          {errors.email && <p className="text-danger text-xs mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact_motivo" className="block text-sm font-semibold text-ink-900 mb-1.5">
            Motivo de consulta <span className="text-danger">*</span>
          </label>
          <select
            id="contact_motivo"
            value={formData.motivo}
            onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
            className="w-full h-12 px-4 rounded-xl border border-ink-200 bg-white text-ink-950 text-base transition-all duration-200 focus:outline-none focus:border-accent-600 focus:ring-4 focus:ring-accent-100 cursor-pointer"
          >
            <option value="Turno de Medicina">Turno de Medicina / Especialidades</option>
            <option value="Consulta de Estética">Consulta de Estética / Corporales</option>
            <option value="Diagnóstico por Imagen">Diagnóstico por Imagen / Espinograma</option>
            <option value="Obras sociales / Asociarme">Obras sociales / Quiero asociarme</option>
            <option value="Otro">Otra consulta general</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact_mensaje" className="block text-sm font-semibold text-ink-900 mb-1.5">
          Mensaje o consulta <span className="text-xs text-ink-400 font-normal">(opcional, máx. 1000 caracteres)</span>
        </label>
        <textarea
          id="contact_mensaje"
          rows={3}
          maxLength={1000}
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          placeholder="¿En qué podemos ayudarte? (Por favor no incluyas información clínica sensible)."
          className="w-full p-4 rounded-xl border border-ink-200 bg-white text-ink-950 placeholder:text-ink-400 text-base transition-all duration-200 focus:outline-none focus:border-accent-600 focus:ring-4 focus:ring-accent-100 resize-none"
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.consentimiento}
            onChange={(e) => {
              setFormData({ ...formData, consentimiento: e.target.checked });
              if (errors.consentimiento) setErrors({ ...errors, consentimiento: "" });
            }}
            className="mt-1 size-4 rounded border-ink-300 text-accent-600 focus:ring-accent-500 cursor-pointer"
          />
          <span className="text-xs text-ink-600 leading-relaxed">
            Acepto que mis datos de contacto sean utilizados para responder a esta consulta conforme a la{" "}
            <Link href="/politica-de-privacidad" className="underline hover:text-accent-700">
              política de privacidad
            </Link>
            .
          </span>
        </label>
        {errors.consentimiento && (
          <p className="text-danger text-xs mt-1 font-medium">{errors.consentimiento}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "loading"}
          className="w-full font-bold"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Enviando consulta...
            </>
          ) : (
            "Enviar Consulta"
          )}
        </Button>
      </div>

      <p className="text-[11px] text-ink-400 text-center">
        Aviso: No envíes datos clínicos ni recetas confidenciales por este medio.
      </p>
    </form>
  );
}
