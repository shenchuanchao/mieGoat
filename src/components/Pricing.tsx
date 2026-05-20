"use client";

const plans = [
  {
    name: "基础版",
    price: "¥3,000",
    unit: "/起",
    desc: "小型工具、脚本、接口对接",
    features: ["单个功能模块", "3 个工作日交付", "基础文档", "7 天售后支持"],
    highlight: false,
  },
  {
    name: "专业版",
    price: "¥10,000",
    unit: "/起",
    desc: "中型项目、完整后端服务",
    features: ["完整后端架构", "10 个工作日交付", "API 文档 + 部署文档", "30 天售后支持", "数据库设计", "Docker 部署"],
    highlight: true,
  },
  {
    name: "企业版",
    price: "¥30,000",
    unit: "/起",
    desc: "大型系统、全栈交付",
    features: ["全栈开发", "按需排期", "全套文档 + 培训", "90 天售后支持", "微服务架构", "CI/CD 流水线", "性能调优"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">价格套餐</h2>
          <p className="text-slate-400 text-lg">透明定价，按需选择</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-8 flex flex-col border transition ${
                p.highlight
                  ? "bg-indigo-600/10 border-indigo-500 shadow-lg shadow-indigo-500/10 md:scale-105"
                  : "bg-slate-800 border-slate-700/50"
              }`}
            >
              {p.highlight && (
                <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500 text-white mb-4">
                  推荐
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-1">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-slate-400">{p.unit}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-3 rounded-lg font-semibold transition ${
                  p.highlight
                    ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                    : "border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white"
                }`}
              >
                立即咨询
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
