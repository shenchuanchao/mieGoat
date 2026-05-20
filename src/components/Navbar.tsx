"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "https://www.codeobservatory.cn/", label: "博客", external: true },
  { href: "#services", label: "服务" },
  { href: "#cases", label: "案例" },
  { href: "#pricing", label: "价格" },
  { href: "#contact", label: "联系" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <img src="/logo.png" alt="MieGoat" className="w-8 h-8 rounded-lg" />
          Mie<span className="text-indigo-400">Goat</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((n) =>
            n.external ? (
              <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                {n.label}
              </a>
            ) : (
              <Link key={n.href} href={n.href} className="text-slate-300 hover:text-white transition">
                {n.label}
              </Link>
            )
          )}
          <Link
            href="#contact"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
          >
            立即咨询
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((n) =>
            n.external ? (
              <a key={n.href} href={n.href} target="_blank" rel="noopener noreferrer" className="block py-3 text-slate-300 hover:text-white text-base" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ) : (
              <Link key={n.href} href={n.href} className="block py-3 text-slate-300 hover:text-white text-base" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            )
          )}
          <Link
            href="#contact"
            className="block text-center mt-3 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium transition"
            onClick={() => setOpen(false)}
          >
            立即咨询
          </Link>
        </div>
      )}
    </nav>
  );
}