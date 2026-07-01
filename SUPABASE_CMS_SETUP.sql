create table if not exists public.site_content (
  id text primary key,
  page text not null,
  label text not null,
  type text not null default 'text',
  value text not null default '',
  style jsonb default '{}'::jsonb,
  updated_at timestamptz default now()
);

create table if not exists public.site_settings (
  id text primary key default 'main',
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table public.site_content enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "Public read site content" on public.site_content;
create policy "Public read site content" on public.site_content for select using (true);

drop policy if exists "Authenticated admins manage site content" on public.site_content;
create policy "Authenticated admins manage site content" on public.site_content for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "Public read site settings" on public.site_settings;
create policy "Public read site settings" on public.site_settings for select using (true);

drop policy if exists "Authenticated admins manage site settings" on public.site_settings;
create policy "Authenticated admins manage site settings" on public.site_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- Realtime: after creating tables, enable Realtime in Supabase Dashboard > Database > Replication
-- and turn on site_content and site_settings.
