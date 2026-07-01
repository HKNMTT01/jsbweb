import { useEffect, useMemo, useState } from "react";
import { deleteRow, GalleryRecord, listRows, uploadCmsFile, upsertRow } from "../../../lib/adminCms";

const emptyGallery: GalleryRecord = {
  title: "",
  caption: "",
  image_url: "",
  category: "corporate",
  date: "",
  is_published: true,
  sort_order: 10,
};

export default function GalleryAdmin() {
  const [items, setItems] = useState<GalleryRecord[]>([]);
  const [form, setForm] = useState<GalleryRecord>(emptyGallery);
  const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => { loadGallery(); }, []);

  async function loadGallery() {
    setItems(await listRows<GalleryRecord>("gallery", []));
  }

  async function handleUpload(file?: File) {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadCmsFile(file, "gallery");
      setForm((current) => ({ ...current, image_url: url }));
      setStatus("Gallery image uploaded.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      setTimeout(() => setStatus(""), 2200);
    }
  }

  async function saveGallery(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await upsertRow("gallery", form);
      setForm(emptyGallery);
      setStatus("Gallery item saved and connected to the website data.");
      setTimeout(() => setStatus(""), 2600);
      loadGallery();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save gallery item");
    }
  }

  async function removeGallery(id?: number) {
    if (!id || !window.confirm("Delete this gallery item?")) return;
    await deleteRow("gallery", id);
    loadGallery();
  }

  const visibleItems = useMemo(() => items.filter((item) => filter === "all" || item.category === filter), [items, filter]);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Website media library</p>
          <h1 className="mt-2 text-4xl font-black">Gallery Manager</h1>
          <p className="mt-2 text-slate-500">Upload and manage gallery records used by public gallery/news sections.</p>
        </div>
        <a href="/news?cmsPreview=1#events" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Preview Gallery</a>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}
      {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600">{error}</div>}

      <form onSubmit={saveGallery} className="mt-8 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-black text-[#073e63]">{form.id ? "Edit Gallery Item" : "Add Gallery Item"}</h2>
          {form.id && <button type="button" onClick={() => setForm(emptyGallery)} className="rounded-xl bg-slate-100 px-4 py-2 font-black text-[#073e63]">Cancel Edit</button>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border px-4 py-3" placeholder="Gallery title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          <select className="rounded-xl border px-4 py-3" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as GalleryRecord["category"] })}>
            <option value="corporate">Corporate</option>
            <option value="event">Event</option>
            <option value="project">Project</option>
            <option value="media">Media</option>
            <option value="community">Community</option>
          </select>
          <input type="date" className="rounded-xl border px-4 py-3" value={form.date || ""} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <input type="number" className="rounded-xl border px-4 py-3" placeholder="Sort order" value={form.sort_order || 10} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} />
        </div>

        <textarea className="mt-4 w-full rounded-xl border px-4 py-3" placeholder="Caption" rows={3} value={form.caption || ""} onChange={(e) => setForm({ ...form, caption: e.target.value })} />

        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_220px]">
          <div>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Image URL / uploaded image path" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} required />
            <label className="mt-3 block rounded-xl border border-dashed border-[#005AAA]/25 bg-[#f8fbff] p-4 text-sm font-bold text-slate-600">
              {uploading ? "Uploading..." : "Upload gallery image"}
              <input type="file" accept="image/*" className="mt-2 block w-full text-sm" onChange={(e) => handleUpload(e.target.files?.[0])} disabled={uploading} />
            </label>
          </div>
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img src={form.image_url || "https://placehold.co/600x400?text=JETAMA"} alt="Preview" className="h-full min-h-[150px] w-full object-cover" />
          </div>
        </div>

        <label className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3 text-sm font-bold">
          <input type="checkbox" checked={form.is_published !== false} onChange={(e) => setForm({ ...form, is_published: e.target.checked })} /> Published
        </label>

        <button className="mt-5 block rounded-xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">
          {form.id ? "Update Gallery" : "Add Gallery"}
        </button>
      </form>

      <div className="mt-7 flex flex-wrap gap-2">
        {["all", "corporate", "event", "project", "media", "community"].map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-sm font-black ${filter === item ? "bg-[#073e63] text-white" : "bg-white text-[#073e63] shadow-sm"}`}>{item}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.id || item.title} className="overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/90 shadow-lg">
            <img src={item.image_url || "https://placehold.co/600x400?text=JETAMA"} alt={item.title} className="h-56 w-full object-cover" />
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#eef8f1] px-3 py-1 text-xs font-black uppercase text-[#12813b]">{item.category}</span>
                {item.is_published === false && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase text-slate-500">Draft</span>}
              </div>
              <h2 className="mt-3 text-lg font-black text-[#073e63]">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.caption}</p>
              <div className="mt-5 flex gap-2">
                <button onClick={() => setForm(item)} className="rounded-xl bg-[#005AAA] px-4 py-2 font-bold text-white">Edit</button>
                <button onClick={() => removeGallery(item.id)} className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white">Delete</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
