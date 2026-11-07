"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Phone,
  Menu,
  X,
  MapPin,
  Clock,
  ArrowRight,
  Stethoscope,
  Sparkles,
} from "lucide-react";
import { site } from "@/lib/site";
import { nav } from "@/lib/nav";
import { waLink } from "@/lib/whatsapp";
import { PlusMark } from "../icons/PlusMark";
import { WhatsAppIcon } from "../icons/SocialIcons";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when pathname changes (render-phase adjustment)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }

  // Scroll detection to add shadow and collapse topbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar (Desktop Only) */}
      <div
        className={cn(
          "hidden lg:block bg-emerald-950 text-white text-xs py-2 px-8 border-b border-white/10 transition-all duration-300",
          isScrolled && "h-0 py-0 opacity-0 overflow-hidden border-none"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="size-3.5 text-white" />
              <span>{site.contact.phoneDisplay}</span>
            </a>
            {site.hours.length > 0 && (
              <div className="flex items-center gap-2">
                <Clock className="size-3.5 text-white" />
                <span>{site.hours[0].days}: {site.hours[0].time}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="size-3.5 text-white" />
              <span>{site.address.locality}, {site.address.region}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-soft border-b border-ink-200"
            : "bg-white/80 backdrop-blur-sm border-b border-ink-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group select-none py-2"
            aria-label="Centro Médico Brius - Volver al Inicio"
          >
            <Image
              src="/brand/logo.png"
              alt="Centro Médico Brius"
              width={64}
              height={64}
              className="object-cover object-center scale-75 sm:scale-100"
            />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg tracking-tight text-ink-950 leading-none">
                Centro Médico Brius
              </span>
              <span className="font-sans text-[8px] pl-0.5 font-bold tracking-[0.24em] text-emerald-800 uppercase leading-none mt-1">
                Medicina y Estética
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      aria-expanded={isServicesOpen}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={cn(
                        "flex items-center gap-1.5 text-base font-semibold py-2 transition-colors cursor-pointer select-none",
                        isServicesOpen || pathname.startsWith("/medicina") || pathname.startsWith("/estetica")
                          ? "text-emerald-800"
                          : "text-ink-700 hover:text-emerald-800"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Mega Dropdown Panel */}
                    {isServicesOpen && (
                      <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-2xl p-4 shadow-lift border border-ink-200 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="grid grid-cols-2 gap-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsServicesOpen(false)}
                              className={cn(
                                "flex flex-col gap-2 p-4 rounded-xl border transition-all duration-200 group text-left",
                                child.theme === "medicina"
                                  ? "bg-med-50/50 hover:bg-med-50 border-med-200/80 hover:border-med-400"
                                  : "bg-est-50/50 hover:bg-est-50 border-est-200/80 hover:border-est-400"
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <div
                                  className={cn(
                                    "size-8 rounded-lg flex items-center justify-center",
                                    child.theme === "medicina"
                                      ? "bg-med-600 text-white"
                                      : "bg-est-600 text-white"
                                  )}
                                >
                                  {child.theme === "medicina" ? (
                                    <Stethoscope className="size-4" />
                                  ) : (
                                    <Sparkles className="size-4" />
                                  )}
                                </div>
                                <ArrowRight className="size-4 text-ink-400 group-hover:translate-x-1 transition-transform" />
                              </div>
                              <h4 className="font-display font-semibold text-lg text-ink-950 mt-1">
                                {child.label}
                              </h4>
                              <p className="text-xs text-ink-600 leading-snug">
                                {child.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-base font-semibold py-2 transition-colors relative",
                    isActive
                      ? "text-emerald-600"
                      : "text-ink-700 hover:text-emerald-600"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-emerald-600 transition-colors py-2 px-3 rounded-full hover:bg-ink-100"
              aria-label={`Llamar a recepción al ${site.contact.phoneDisplay}`}
            >
              <Phone className="size-4 text-emerald-600" />
              <span>{site.contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Right Quick CTAs */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="size-11 rounded-full bg-ink-100 text-ink-800 flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
              aria-label="Llamar a Centro Médico Brius"
            >
              <Phone className="size-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="size-11 rounded-full bg-white border border-ink-200 text-ink-950 flex items-center justify-center transition-transform duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={isMobileOpen}
            >
              <span className="transition-transform duration-200 inline-flex items-center justify-center">
                {isMobileOpen ? <X className="size-6 rotate-0 transition-transform duration-200" /> : <Menu className="size-6 transition-transform duration-200" />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Drawer */}
        {isMobileOpen && (
          <div
            className="fixed min-h-svh inset-x-0 top-16 bottom-0 z-50 bg-white flex flex-col justify-between p-6 lg:hidden animate-mobile-drawer will-change-transform shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
          >
            <div className="space-y-6">
              <nav aria-label="Navegación móvil" className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-xl font-bold text-ink-950 py-2 border-b border-ink-100"
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-xl font-bold text-ink-950 py-2 border-b border-ink-100"
                >
                  Nosotros
                </Link>

                {/* Mobile Services Accordion */}
                <div className="border-b border-ink-100 py-2">
                  <button
                    type="button"
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="flex w-full items-center justify-between font-display text-xl font-bold text-ink-950"
                  >
                    <span>Servicios</span>
                    <ChevronDown
                      className={cn(
                        "size-6 transition-transform",
                        mobileServicesExpanded && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileServicesExpanded && (
                    <div className="pt-3 pb-1 pl-4 flex flex-col gap-3">
                      <Link
                        href="/medicina"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-med-50 text-med-950 font-semibold text-lg"
                      >
                        Medicina
                      </Link>
                      <Link
                        href="/estetica"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-est-50 text-est-950 font-semibold text-lg"
                      >
                        Estética
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/coberturas"
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-xl font-bold text-ink-950 py-2 border-b border-ink-100"
                >
                  Coberturas
                </Link>
                <Link
                  href="/contacto"
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-xl font-bold text-ink-950 py-2 border-b border-ink-100"
                >
                  Contacto
                </Link>
              </nav>

              {/* Quick Info Box in Mobile Drawer */}
              <div className="bg-ink-50 p-4 rounded-2xl border border-ink-200 text-xs text-ink-600 space-y-2">
                <p className="font-bold text-ink-900 text-sm">Centro Médico Brius</p>
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-emerald-600 shrink-0" />
                  {site.address.street}, {site.address.locality}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-emerald-600 shrink-0" />
                  {site.contact.phoneDisplay}
                </p>
                {site.hours.length > 0 && (
                  <p className="flex items-center gap-2">
                    <Clock className="size-4 text-emerald-600 shrink-0" />
                    {site.hours[0].days} ({site.hours[0].time})
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
