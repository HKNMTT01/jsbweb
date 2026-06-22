# JETAMA React Pages + Admin CMS Backend

## Files included
- `pages/` — your public pages and admin pages.
- `lib/supabase.ts` — Supabase client connection.
- `lib/adminCms.ts` — reusable CRUD helpers for admin and public pages.
- `supabase_schema.sql` — database tables + RLS policies.

## Install required package
```bash
npm install @supabase/supabase-js
```

## Add `.env`
```env
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

## Supabase setup
1. Open Supabase → SQL Editor.
2. Paste and run `supabase_schema.sql`.
3. Authentication → Users → Add admin user email/password.
4. Login through `/admin/login`.

## Routes needed in your App/router
```tsx
<Route path="/admin/login" element={<Login />} />
<Route path="/admin" element={<AdminLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="content" element={<ContentAdmin />} />
  <Route path="design" element={<DesignAdmin />} />
  <Route path="news" element={<NewsAdmin />} />
  <Route path="careers" element={<CareersAdmin />} />
  <Route path="gallery" element={<GalleryAdmin />} />
  <Route path="preview" element={<AdminPreview />} />
</Route>
```

## Public pages connected now
- `News.tsx` reads from Supabase `news`; if no data exists, it falls back to your existing static news.
- `Careers.tsx` reads from Supabase `careers`; if no data exists, it falls back to your existing static jobs.
- Admin CMS pages can create/update/delete News, Careers, Gallery, Content Blocks and Site Design settings.

For images, paste a public URL or use a path from your public folder, for example `/uploads/event.jpg`.
