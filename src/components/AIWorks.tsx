"use client";

const aiWorks = [
  {
    title: "WriteNow · AI 文案生成平台",
    desc: "一站式 AI 文案工具平台，支持短视频脚本、小红书笔记、电商标题、朋友圈文案等多种场景，AI 秒级生成高质量内容。",
    tags: ["Next.js", "OpenAI API", "Vercel", "全栈"],
    url: "https://write.coderlog.net/",
  },
  {
    title: "Summarify Pro · AI 文档摘要",
    desc: "免费 AI 文档摘要工具，支持 PDF/Word/URL 上传，智能提取关键要点、生成摘要，支持中英日德西五语种翻译。",
    tags: ["Next.js", "DeepSeek", "GLM", "全栈"],
    url: "https://www.summarifypro.com/",
  },
];

export default function AIWorks() {
  return (
    <section id="ai-works" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🤖 AI 作品
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            探索 AI 驱动的产品 — 从想法到上线，独立完成设计与开发
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aiWorks.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-800 border border-slate-700/50 rounded-xl p-6 sm:p-8 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* External link indicator */}
              <div className="flex items-start justify-between mb-3">
                <span className="inline-block text-3xl">🚀</span>
                <svg
                  className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {work.title}
              </h3>

              <p className="text-slate-400 text-sm sm:text-base mb-5 leading-relaxed">
                {work.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {work.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
