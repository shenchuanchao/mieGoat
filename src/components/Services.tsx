"use client";

const services = [
  { icon: "🖥️", title: "ASP.NET Core API", desc: "高性能 RESTful / GraphQL API 设计与开发，支持微服务架构" },
  { icon: "🗄️", title: "数据库设计", desc: "SQL Server / PostgreSQL / MySQL 方案设计、优化与迁移" },
  { icon: "⚡", title: "实时系统", desc: "SignalR / WebSocket 实时推送、聊天、监控系统" },
  { icon: "🔧", title: "遗留系统重构", desc: "老系统升级迁移、Framework → Core / 现代化改造" },
  { icon: "☁️", title: "云部署 & DevOps", desc: "Azure / AWS 部署、CI/CD 流水线、Docker 容器化" },
  { icon: "📊", title: "数据看板", desc: "Blazor / 前端可视化大屏、报表系统、BI 集成" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">服务范围</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            覆盖 .NET 开发全链路，从架构设计到上线运维
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 hover:bg-slate-800 transition group"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition">
                {s.title}
              </h3>
              <p className="text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
