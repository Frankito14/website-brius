"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Phone, Menu, X, Activity } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#e7edf3]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-primary">
            {/* Placeholder Logo */}
            <Activity className="size-8" />
          </div>
          <h2 className="text-lg font-bold tracking-tight">Centro Médico Brius</h2>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Inicio</Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/nosotros">Nosotros</Link>
          <div className="relative group cursor-pointer py-4">
            <span className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors">
              Servicios <ChevronDown className="size-4" />
            </span>
            <div className="hidden group-hover:block absolute top-full left-0 w-48 bg-white shadow-xl border border-slate-100 rounded-lg p-2">
              <Link className="block px-4 py-2 text-sm hover:bg-slate-50 rounded" href="/medicina">Medicina</Link>
              <Link className="block px-4 py-2 text-sm hover:bg-slate-50 rounded" href="/estetica">Estética</Link>
            </div>
          </div>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contacto">Contacto</Link>
        </nav>
        
        {/* Contact Button Desktop */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold items-center gap-2 hover:bg-primary/90 transition-all">
            <Phone className="size-4" />
            Consultas: 011 1234-5678
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#e7edf3] bg-white p-4 flex flex-col gap-4">
          <Link className="text-sm font-medium hover:text-primary" href="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
          <Link className="text-sm font-medium hover:text-primary" href="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-500">Servicios</span>
            <Link className="text-sm font-medium hover:text-primary pl-4" href="/medicina" onClick={() => setIsMobileMenuOpen(false)}>Medicina</Link>
            <Link className="text-sm font-medium hover:text-primary pl-4" href="/estetica" onClick={() => setIsMobileMenuOpen(false)}>Estética</Link>
          </div>
          <Link className="text-sm font-medium hover:text-primary" href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
          <button className="flex w-full justify-center bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold items-center gap-2 hover:bg-primary/90 transition-all mt-2">
            <Phone className="size-4" />
            011 1234-5678
          </button>
        </div>
      )}
    </header>
  );
}
