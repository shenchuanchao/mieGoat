"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("orders").insert([form]);
    if (error) {
      setStatus("err");
    } else {
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", service: "", budget: "", description: "" });
    }
  };

  const inputCls =
    "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition";

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">开始合作</h2>
          <p className="text-slate-400 text-lg">填写表单，我会在 24 小时内回复</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              required
              placeholder="姓名 *"
              className={inputCls}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="邮箱 *"
              className={inputCls}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              placeholder="电话"
              className={inputCls}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              required
              className={`${inputCls} ${!form.service ? "text-slate-500" : "text-white"}`}
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="" disabled>选择服务类型 *</option>
              <option>ASP.NET Core API</option>
              <option>数据库设计</option>
              <option>实时系统</option>
              <option>遗留系统重构</option>
              <option>云部署 & DevOps</option>
              <option>数据看板</option>
              <option>其他</option>
            </select>
          </div>
          <select
            className={`${inputCls} ${!form.budget ? "text-slate-500" : "text-white"}`}
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="">预算范围（选填）</option>
            <option>¥3,000 - ¥10,000</option>
            <option>¥10,000 - ¥30,000</option>
            <option>¥30,000 - ¥100,000</option>
            <option>¥100,000+</option>
          </select>
          <textarea
            required
            rows={5}
            placeholder="项目描述 *"
            className={inputCls}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white py-3.5 rounded-lg font-semibold text-lg transition"
          >
            {status === "loading" ? "提交中..." : "提交咨询"}
          </button>
          {status === "ok" && (
            <p className="text-center text-green-400">✅ 提交成功！我会尽快联系您。</p>
          )}
          {status === "err" && (
            <p className="text-center text-red-400">❌ 提交失败，请稍后重试。</p>
          )}
        </form>
      </div>
    </section>
  );
}
