"use client";

const cases = [
  {
    title: "电商平台后端重构",
    tags: ["ASP.NET Core", "SQL Server", "Redis"],
    desc: "将遗留 WebForms 系统重构为 Core 微服务架构，QPS 提升 8 倍，日均处理 50 万订单。",
  },
  {
    title: "IoT 设备监控平台",
    tags: ["SignalR", "PostgreSQL", "Docker"],
    desc: "实时采集 2000+ 设备数据，WebSocket 推送告警，大屏可视化展示，7×24 稳定运行。",
  },
  {
    title: "企业 OA 系统",
    tags: ["Blazor Server", "Azure", "CI/CD"],
    desc: "全栈交付企业级 OA，含审批流、报表、权限系统，Azure 部署 + 自动化流水线。",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">成功案例</h2>
          <p className="text-slate-400 text-lg">每个项目都是信任的证明</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-slate-400 mb-4 flex-1">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
