
1. admin/*.tsx
   - AdminLayout
   - Login
   - Dashboard
   - AdminPreview
   - NewsAdmin
   - CareersAdmin
   - GalleryAdmin
   - ContentAdmin
   - DesignAdmin

2. lib/adminCms.ts
   - Shared CMS connection helper.
   - Uses Supabase when VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY are configured.
   - Uses localStorage fallback when Supabase is not configured.
   - Includes uploadCmsFile() for Supabase Storage bucket website-assets.

3. lib/supabase.ts
   - Supabase client setup.

4. sql/cms_tables.sql
   - Supabase tables, storage bucket and RLS policies.

5. ADMIN_ROUTES_SNIPPET.tsx
   - Route snippet for /admin pages.

6. PUBLIC_PAGES_CONNECTION_EXAMPLE.tsx
   - Example hook pattern for public pages to read admin data.

Setup:
1. Copy myadmin files into your admin pages folder.
2. Copy lib/adminCms.ts and lib/supabase.ts into src/lib or your project lib folder.
3. Run sql/cms_tables.sql in Supabase SQL Editor.
4. Add .env.local:
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
5. Create admin user in Supabase Authentication.
6. Add the admin routes from ADMIN_ROUTES_SNIPPET.tsx.
7. Make sure public News and Careers pages import listRows from lib/adminCms.

Important:
- Public pages must filter is_published !== false for news/gallery.
- Public careers page must filter is_active !== false.
- Uploads use public Supabase Storage bucket website-assets.
