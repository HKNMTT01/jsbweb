import { useEffect, useMemo, useState } from "react";
import { deleteRow, getMonthName, listRows, NewsRecord, uploadCmsFile, upsertRow } from "../../../lib/adminCms";

const emptyNews: NewsRecord = {
  title: "",
  description: "",
  date: "",
  day: "",
  month: "",
  year: new Date().getFullYear(),
  type: "press-releases",
  image_url: "",
  source_url: "",
  is_featured: false,
  is_published: true,
  sort_order: 10,
};

export default function NewsAdmin() {
  const [items, setItems] = useState<NewsRecord[]>([]);
  const [form, setForm] = useState<NewsRecord>(emptyNews);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [uploading, setUploading] = useState(false);

  useEffect(() => { loadNews(); }, []);

  async function loadNews() {
    setItems(await listRows<NewsRecord>("news", []));
  }

  function setFromDate(value: string) {
    const date = value ? new Date(value) : null;
    if (!date || Number.isNaN(date.getTime())) return;
    setForm({
      ...form,
      date: date.toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }),
      day: String(date.getDate()).padStart(2, "0"),
      month: getMonthName(date),
      year: date.getFullYear(),
    });
  }

  async function handleUpload(file?: File) {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadCmsFile(file, "news");
      setForm((current) => ({ ...current, image_url: url }));
      setStatus("Image uploaded and attached to this post.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      setTimeout(() => setStatus(""), 2400);
    }
  }

  async function saveNews(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await upsertRow("news", form);
      setForm(emptyNews);
      setStatus("News/event saved. Public News page will read this data automatically.");
      setTimeout(() => setStatus(""), 2800);
      loadNews();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save news item");
    }
  }

  async function removeNews(id?: number) {
    if (!id || !window.confirm("Delete this news item?")) return;
    await deleteRow("news", id);
    loadNews();
  }

  function editNews(item: NewsRecord) {
    setForm(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const visibleItems = useMemo(() => items.filter((item) => filter === "all" || item.type === filter), [items, filter]);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Real website data</p>
          <h1 className="mt-2 text-4xl font-black">News & Events Manager</h1>
          <p className="mt-2 text-slate-500">Create posts for the public News page. Published records appear automatically on /news.</p>
        </div>
        <a href="/news?cmsPreview=1" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Preview News Page</a>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}
      {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600">{error}</div>}

      <form onSubmit={saveNews} className="mt-8 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-black text-[#073e63]">{form.id ? "Edit Post" : "Add New Post"}</h2>
          {form.id && <button type="button" onClick={() => setForm(emptyNews)} className="rounded-xl bg-slate-100 px-4 py-2 font-black text-[#073e63]">Cancel Edit</button>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border px-4 py-3" placeholder="Post title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          <select className="rounded-xl border px-4 py-3" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as NewsRecord["type"] })}>
            <option value="press-releases">News</option>
            <option value="gallery">Gallery / Event</option>
            <option value="videos">Video</option>
            <option value="announcement">Announcement</option>
          </select>
          <input type="date" className="rounded-xl border px-4 py-3" onChange={(e) => setFromDate(e.target.value)} />
          <input className="rounded-xl border px-4 py-3" placeholder="Display date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <input className="rounded-xl border px-4 py-3" placeholder="Day e.g. 23" value={form.day} onChange={(e) => setForm({ ...form, day: e.target.value })} />
          <input className="rounded-xl border px-4 py-3" placeholder="Month e.g. SEP" value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value.toUpperCase() })} />
          <input type="number" className="rounded-xl border px-4 py-3" placeholder="Year" value={form.year} onChange={(e) => setForm({ ...form, year: Number(e.target.value) })} />
          <input type="number" className="rounded-xl border px-4 py-3" placeholder="Sort order" value={form.sort_order || 10} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} />
          <input className="rounded-xl border px-4 py-3 md:col-span-2" placeholder="Source URL / Read more link" value={form.source_url || ""} onChange={(e) => setForm({ ...form, source_url: e.target.value })} />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_220px]">
          <div>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Image URL / uploaded image path" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
            <label className="mt-3 block rounded-xl border border-dashed border-[#005AAA]/25 bg-[#f8fbff] p-4 text-sm font-bold text-slate-600">
              {uploading ? "Uploading..." : "Upload image from computer"}
              <input type="file" accept="image/*" className="mt-2 block w-full text-sm" onChange={(e) => handleUpload(e.target.files?.[0])} disabled={uploading} />
            </label>
          </div>
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img src={form.image_url || "https://placehold.co/600x400?text=JETAMA"} alt="Preview" className="h-full min-h-[150px] w-full object-cover" />
          </div>
        </div>

        <textarea className="mt-4 w-full rounded-xl border px-4 py-3" placeholder="Short description" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />

        <div className="mt-4 flex flex-wrap gap-4">
          <label className="inline-flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3 text-sm font-bold">
            <input type="checkbox" checked={!!form.is_featured} onChange={(e) => setForm({ ...form, is_featured: e.target.checked })} /> Featured
          </label>
          <label className="inline-flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3 text-sm font-bold">
            <input type="checkbox" checked={form.is_published !== false} onChange={(e) => setForm({ ...form, is_published: e.target.checked })} /> Published
          </label>
        </div>

        <button className="mt-5 rounded-xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">
          {form.id ? "Update Post" : "Add Post"}
        </button>
      </form>

      <div className="mt-7 flex flex-wrap gap-2">
        {["all", "press-releases", "gallery", "videos", "announcement"].map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font-black ${filter === item ? "bg-[#073e63] text-white" : "bg-white text-[#073e63] shadow-sm"}`}>{item}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-5">
        {visibleItems.map((item) => (
          <article key={item.id || item.title} className="grid gap-5 rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-lg md:grid-cols-[220px_1fr_auto] md:items-center">
            <img src={item.image_url || "https://placehold.co/600x400?text=JETAMA"} alt={item.title} className="h-40 w-full rounded-2xl object-cover" />
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#eef8f1] px-3 py-1 text-xs font-black uppercase text-[#12813b]">{item.type}</span>
                {item.is_featured && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase text-amber-700">Featured</span>}
                {item.is_published === false && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase text-slate-500">Draft</span>}
              </div>
              <h2 className="mt-3 text-xl font-black text-[#073e63]">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
              <p className="mt-2 text-sm font-bold text-[#00a884]">{item.date || item.year}</p>
            </div>
            <div className="flex gap-2 md:flex-col">
              <button onClick={() => editNews(item)} className="rounded-xl bg-[#005AAA] px-4 py-2 font-bold text-white">Edit</button>
              <button onClick={() => removeNews(item.id)} className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white">Delete</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
