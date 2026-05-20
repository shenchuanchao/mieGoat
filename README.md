# MieGoat Landing — .NET 开发接单页

> Next.js 15 + TypeScript + Tailwind CSS v4 + Supabase

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 配置环境变量
cp .env.local.example .env.local
# 编辑 .env.local 填入 Supabase 信息

# 3. 本地开发
npm run dev
```

## Supabase 配置

1. 登录 [Supabase](https://supabase.com)，创建项目
2. 进入 SQL Editor，执行 `supabase-schema.sql` 建表
3. 在 Settings → API 获取 URL 和 anon key
4. 填入 `.env.local`

## Vercel 部署

### 方式一：Vercel CLI

```bash
npm i -g vercel
vercel
```

### 方式二：GitHub 连接

1. 推送代码到 GitHub
2. 登录 [Vercel](https://vercel.com)，点击 "New Project"
3. 导入 GitHub 仓库
4. 配置环境变量：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. 点击 Deploy

### 自定义域名 miegoat.club

1. 在 Vercel 项目 → Settings → Domains
2. 添加 `miegoat.club` 和 `www.miegoat.club`
3. 按提示到域名注册商添加 DNS 记录：
   - A 记录：`76.76.21.21`（Vercel IP）
   - CNAME：`www` → `cname.vercel-dns.com`

## 项目结构

```
src/
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局 + SEO
│   └── page.tsx         # 首页（客户端组件）
├── components/
│   ├── Navbar.tsx       # 响应式导航
│   ├── Hero.tsx         # 首屏大屏
│   ├── Services.tsx     # 服务模块（6 卡片）
│   ├── Cases.tsx        # 案例模块（3 个）
│   ├── Pricing.tsx      # 价格套餐（3 档）
│   ├── ContactForm.tsx  # 表单 → Supabase
│   └── Footer.tsx       # 页脚
└── lib/
    └── supabase.ts      # Supabase 客户端
```
