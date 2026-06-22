import { useEffect, useState } from "react";
import { deleteRow, GalleryRecord, listRows, upsertRow } from "../../../lib/adminCms";

const emptyGallery: GalleryRecord = {
  title: "",
  description: "",
  image_url: "",
  year: new Date().getFullYear(),
  type: "Photo",
  is_published: true,
};

export default function GalleryAdmin() {
  const [items, setItems] = useState<GalleryRecord[]>([]);
  const [form, setForm] = useState<GalleryRecord>(emptyGallery);
  const [status, setStatus] = useState("");

  useEffect(() => { loadGallery(); }, []);

  async function loadGallery() {
    setItems(await listRows<GalleryRecord>("gallery", []));
  }

  async function saveGallery(e: React.FormEvent) {
    e.preventDefault();
    await upsertRow("gallery", form);
    setForm(emptyGallery);
    setStatus("Gallery item saved and ready for public display.");
    setTimeout(() => setStatus(""), 2500);
    loadGallery();
  }

  async function removeGallery(id?: number) {
    if (!id || !window.confirm("Delete this gallery item?")) return;
    await deleteRow("gallery", id);
    loadGallery();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Event images and videos</p>
          <h1 className="mt-2 text-4xl font-black">Gallery Manager</h1>
          <p className="mt-2 text-slate-500">Add event photos, corporate gallery images or video thumbnails.</p>
        </div>
        <a href="/news?cmsPreview=1" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Preview News/Gallery</a>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}

      <form onSubmit={saveGallery} className="mt-8 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-black text-[#073e63]">{form.id ? "Edit Gallery Item" : "Add Gallery Item"}</h2>
          {form.id && <button type="button" onClick={() => setForm(emptyGallery)} className="rounded-xl bg-slate-100 px-4 py-2 font-black text-[#073e63]">Cancel Edit</button>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border px-4 py-3" placeholder="Gallery title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          <input className="rounded-xl border px-4 py-3" placeholder="Image / Video URL" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} required />
          <input type="number" className="rounded-xl border px-4 py-3" value={form.year} onChange={(e) => setForm({ ...form, year: Number(e.target.value) })} />
          <select className="rounded-xl border px-4 py-3" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as GalleryRecord["type"] })}>
            <option>Photo</option><option>Video</option><option>Event</option>
          </select>
        </div>

        <textarea className="mt-4 w-full rounded-xl border px-4 py-3" placeholder="Short description" rows={4} value={form.description || ""} onChange={(e) => setForm({ ...form, description: e.target.value })} />

        <label className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3 text-sm font-bold">
          <input type="checkbox" checked={form.is_published !== false} onChange={(e) => setForm({ ...form, is_published: e.target.checked })} /> Published
        </label>

        <button className="mt-5 block rounded-xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">
          {form.id ? "Update Gallery" : "Add Gallery"}
        </button>
      </form>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id || item.title} className="overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/90 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <img src={item.image_url} alt={item.title} className="h-56 w-full object-cover" />
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#eef8f1] px-3 py-1 text-xs font-black uppercase text-[#12813b]">{item.type}</span>
                {item.is_published === false && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase text-slate-500">Draft</span>}
              </div>
              <h2 className="mt-4 font-black text-[#073e63]">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-500">{item.year}</p>
              {item.description && <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>}
              <div className="mt-4 flex gap-2">
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
