import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MieGoat · .NET 专业开发接单",
  description: "专注 .NET 全栈开发 — ASP.NET Core、数据库设计、实时系统、云部署。7 年经验，交付即上线。",
  keywords: [".NET开发", "ASP.NET Core", "接单", "外包", "全栈开发", "C#"],
  openGraph: {
    title: "MieGoat · .NET 专业开发接单",
    description: "专注 .NET 全栈开发，从架构设计到上线运维",
    url: "https://miegoat.club",
    siteName: "MieGoat",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-900 text-white antialiased">{children}</body>
    </html>
  );
}
