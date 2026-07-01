import { useEffect, useState } from "react";
import { CareerRecord, deleteRow, joinLines, listRows, splitLines, upsertRow } from "../../../lib/adminCms";

const emptyCareer: CareerRecord = {
  title: "",
  department: "",
  location: "Kota Kinabalu, Sabah",
  type: "Full Time",
  description: "",
  responsibilities: [],
  requirements: [],
  application_email: "hr@jetama.com.my",
  closing_date: "",
  is_active: true,
  sort_order: 10,
};

export default function CareersAdmin() {
  const [items, setItems] = useState<CareerRecord[]>([]);
  const [form, setForm] = useState<CareerRecord>(emptyCareer);
  const [responsibilitiesText, setResponsibilitiesText] = useState("");
  const [requirementsText, setRequirementsText] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => { loadCareers(); }, []);

  async function loadCareers() {
    setItems(await listRows<CareerRecord>("careers", []));
  }

  function editCareer(item: CareerRecord) {
    setForm(item);
    setResponsibilitiesText(joinLines(item.responsibilities));
    setRequirementsText(joinLines(item.requirements));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function saveCareer(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await upsertRow("careers", {
        ...form,
        responsibilities: splitLines(responsibilitiesText),
        requirements: splitLines(requirementsText),
      });
      setForm(emptyCareer);
      setResponsibilitiesText("");
      setRequirementsText("");
      setStatus("Career post saved. Public Careers page will read this data automatically.");
      setTimeout(() => setStatus(""), 2800);
      loadCareers();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save career post");
    }
  }

  async function removeCareer(id?: number) {
    if (!id || !window.confirm("Delete this career post?")) return;
    await deleteRow("careers", id);
    loadCareers();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Hiring and internship control</p>
          <h1 className="mt-2 text-4xl font-black">Careers Manager</h1>
          <p className="mt-2 text-slate-500">Create clickable career boxes with full details and direct email application links.</p>
        </div>
        <a href="/careers?cmsPreview=1" target="_blank" rel="noreferrer" className="rounded-2xl bg-[#073e63] px-5 py-3 font-black text-white shadow-lg">Preview Careers Page</a>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}
      {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600">{error}</div>}

      <form onSubmit={saveCareer} className="mt-8 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-black text-[#073e63]">{form.id ? "Edit Career Post" : "Add Career Post"}</h2>
          {form.id && <button type="button" onClick={() => { setForm(emptyCareer); setResponsibilitiesText(""); setRequirementsText(""); }} className="rounded-xl bg-slate-100 px-4 py-2 font-black text-[#073e63]">Cancel Edit</button>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border px-4 py-3" placeholder="Job title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          <input className="rounded-xl border px-4 py-3" placeholder="Department" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
          <input className="rounded-xl border px-4 py-3" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          <select className="rounded-xl border px-4 py-3" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option>Full Time</option><option>Contract</option><option>Internship</option><option>Part Time</option>
          </select>
          <input type="email" className="rounded-xl border px-4 py-3" placeholder="Application email" value={form.application_email} onChange={(e) => setForm({ ...form, application_email: e.target.value })} required />
          <input type="date" className="rounded-xl border px-4 py-3" value={form.closing_date || ""} onChange={(e) => setForm({ ...form, closing_date: e.target.value })} />
          <input type="number" className="rounded-xl border px-4 py-3" placeholder="Sort order" value={form.sort_order || 10} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} />
        </div>

        <textarea className="mt-4 w-full rounded-xl border px-4 py-3" placeholder="Job description" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <textarea className="w-full rounded-xl border px-4 py-3" placeholder="Responsibilities — one per line" rows={6} value={responsibilitiesText} onChange={(e) => setResponsibilitiesText(e.target.value)} />
          <textarea className="w-full rounded-xl border px-4 py-3" placeholder="Requirements — one per line" rows={6} value={requirementsText} onChange={(e) => setRequirementsText(e.target.value)} />
        </div>

        <label className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#f8fbff] px-4 py-3 text-sm font-bold">
          <input type="checkbox" checked={form.is_active !== false} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} /> Active / display on website
        </label>

        <button className="mt-5 block rounded-xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">
          {form.id ? "Update Career" : "Add Career"}
        </button>
      </form>

      <div className="mt-8 grid gap-5">
        {items.map((item) => (
          <article key={item.id || item.title} className="rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-lg">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#eef8f1] px-3 py-1 text-xs font-black uppercase text-[#12813b]">{item.type}</span>
                  {item.is_active === false && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase text-slate-500">Hidden</span>}
                  {item.closing_date && <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase text-[#005AAA]">Closing {item.closing_date}</span>}
                </div>
                <h2 className="mt-3 text-xl font-black text-[#073e63]">{item.title}</h2>
                <p className="mt-1 text-sm font-bold text-[#00a884]">{item.department} / {item.location}</p>
                <p className="mt-3 max-w-4xl text-slate-500">{item.description}</p>
                <a href={`mailto:${item.application_email}?subject=Application for ${encodeURIComponent(item.title)}`} className="mt-4 inline-flex rounded-xl bg-[#f8fbff] px-4 py-2 text-sm font-black text-[#005AAA]">
                  Test Email Link → {item.application_email}
                </a>
              </div>
              <div className="flex gap-2">
                <button onClick={() => editCareer(item)} className="rounded-xl bg-[#005AAA] px-4 py-2 font-bold text-white">Edit</button>
                <button onClick={() => removeCareer(item.id)} className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white">Delete</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
