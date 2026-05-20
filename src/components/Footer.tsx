"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} MieGoat — miegoat.club · 专注 .NET 开发
        </p>
      </div>
    </footer>
  );
}
