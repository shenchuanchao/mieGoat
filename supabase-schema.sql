-- Supabase 建表 SQL

CREATE TABLE miegoat_orders (
  id        BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  service     TEXT NOT NULL,
  budget      TEXT,
  description TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 允许匿名插入（配合 RLS）
ALTER TABLE miegoat_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" ON miegoat_orders
  FOR INSERT TO anon
  WITH CHECK (true);

-- 禁止匿名读取
CREATE POLICY "Deny anonymous select" ON miegoat_orders
  FOR SELECT TO anon
  USING (false);
