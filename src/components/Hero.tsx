"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-16 overflow-hidden">
      {/* Decorative blobs */}
      <div className="animate-float absolute top-1/4 -left-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="animate-float-slow absolute bottom-1/4 -right-20 w-64 h-64 sm:w-[450px] sm:h-[450px] bg-purple-500/20 rounded-full blur-3xl" />
      <div className="animate-float-delay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-up inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-sm">
          🐐 .NET 全栈开发 · 专业可靠
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          让你的想法<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            精准落地
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          专注 .NET 生态，从后端架构到全栈交付，提供高质量定制开发服务。
          7 年经验，交付即上线。
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-glow bg-indigo-500 hover:bg-indigo-600 hover:scale-105 text-white px-8 py-3.5 rounded-lg text-lg font-semibold transition shadow-lg shadow-indigo-500/25"
          >
            免费咨询
          </a>
          <a
            href="#cases"
            className="border border-slate-600 hover:border-indigo-400 hover:scale-105 hover:text-white text-slate-300 px-8 py-3.5 rounded-lg text-lg font-semibold transition"
          >
            查看案例
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up-delay-4 mt-16 flex flex-wrap justify-center gap-8 text-center">
          {[
            { num: "7+", label: "年开发经验" },
            { num: "200+", label: "交付项目" },
            { num: "99%", label: "客户好评" },
          ].map((s) => (
            <div key={s.label} className="text-white">
              <div className="text-3xl font-bold text-indigo-400">{s.num}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
        <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
