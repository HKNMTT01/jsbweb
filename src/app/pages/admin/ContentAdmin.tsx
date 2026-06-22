import { useEffect, useMemo, useState } from "react";
import {
  clearDraftCmsBlocks,
  CmsBlock,
  defaultCmsBlocks,
  loadCmsBlocks,
  saveCmsBlock,
  saveDraftCmsBlocks,
} from "../../../lib/adminCms";

const emptyStyle = {
  fontSize: "",
  textAlign: "left" as const,
  fontWeight: "",
  color: "",
  marginTop: "",
  marginBottom: "",
  letterSpacing: "",
  lineHeight: "",
  maxWidth: "",
  fontStyle: "",
  textTransform: "",
};

const pagePath: Record<string, string> = {
  Home: "/",
  About: "/about",
  Services: "/services",
  Subsidiaries: "/subsidiary",
  "Joint Ventures": "/jointventure",
  Projects: "/projects",
  News: "/news",
  Careers: "/careers",
  Contact: "/contact",
  Footer: "/",
};

export default function ContentAdmin() {
  const [blocks, setBlocks] = useState<CmsBlock[]>(defaultCmsBlocks);
  const [page, setPage] = useState("Home");
  const [status, setStatus] = useState("");

  useEffect(() => { loadCmsBlocks({ draft: true }).then(setBlocks); }, []);
  useEffect(() => { saveDraftCmsBlocks(blocks); }, [blocks]);

  const pages = useMemo(() => Array.from(new Set(blocks.map((b) => b.page))), [blocks]);
  const filtered = blocks.filter((b) => b.page === page);
  const previewPath = pagePath[page] || "/";

  function updateBlock(id: string, patch: Partial<CmsBlock>) {
    setBlocks((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
  }

  async function publish(block?: CmsBlock) {
    const list = block ? [block] : blocks;
    for (const item of list) await saveCmsBlock(item);
    clearDraftCmsBlocks();
    setStatus(block ? `Published: ${block.label}` : "All content published to website.");
    setTimeout(() => setStatus(""), 2600);
  }

  function addBlock() {
    const label = window.prompt("New section label?");
    if (!label) return;
    const id = `${page.toLowerCase().replace(/\s+/g, ".")}.${Date.now()}`;
    setBlocks([{ id, page, label, type: "textarea", value: "New content section", style: { fontSize: "16px", lineHeight: "1.8" } }, ...blocks]);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Realtime content editor</p>
          <h1 className="mt-2 text-4xl font-black">Website Content Editor</h1>
          <p className="mt-2 max-w-3xl text-slate-500">Edit actual page wording, alignment, size, colour and spacing. Preview first, then publish.</p>
        </div>
        <div className="flex gap-3">
          <a href={`${previewPath}?cmsPreview=1`} target="_blank" rel="noreferrer" className="rounded-2xl bg-white px-6 py-3 font-black text-[#073e63] shadow-lg">Preview Page</a>
          <button onClick={addBlock} className="rounded-2xl bg-[#F5A623] px-6 py-3 font-black text-[#073e63] shadow-lg">Add Section</button>
          <button onClick={() => publish()} className="rounded-2xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">Publish All</button>
        </div>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}

      <div className="mt-7 flex flex-wrap gap-3">
        {pages.map((item) => (
          <button key={item} onClick={() => setPage(item)} className={`rounded-full px-5 py-3 text-sm font-black transition ${page === item ? "bg-[#073e63] text-white" : "bg-white text-[#073e63] shadow-sm hover:bg-[#eaf8ee]"}`}>
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-6">
          {filtered.map((block) => {
            const style = { ...emptyStyle, ...(block.style || {}) };
            return (
              <section key={block.id} className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#35B24A]">{block.page}</p>
                    <h2 className="text-xl font-black text-[#073e63]">{block.label}</h2>
                    <p className="mt-1 text-xs text-slate-400">CMS ID: {block.id}</p>
                  </div>
                  <button onClick={() => publish(block)} className="rounded-xl bg-[#005AAA] px-5 py-2.5 font-black text-white">Publish Section</button>
                </div>

                <div className="mt-5 rounded-2xl border bg-slate-50 p-2">
                  <div className="mb-2 flex flex-wrap gap-2 border-b pb-2">
                    <button onClick={() => updateBlock(block.id, { style: { ...style, fontWeight: "900" } })} className="rounded-lg bg-white px-3 py-1 text-sm font-black shadow">Bold</button>
                    <button onClick={() => updateBlock(block.id, { style: { ...style, fontStyle: "italic" } })} className="rounded-lg bg-white px-3 py-1 text-sm font-black italic shadow">Italic</button>
                    {(["left", "center", "right", "justify"] as const).map((align) => (
                      <button key={align} onClick={() => updateBlock(block.id, { style: { ...style, textAlign: align } })} className="rounded-lg bg-white px-3 py-1 text-sm font-black capitalize shadow">{align}</button>
                    ))}
                  </div>
                  {block.type === "textarea" || block.type === "richtext" ? (
                    <textarea className="min-h-36 w-full rounded-xl bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#35B24A]" value={block.value} onChange={(e) => updateBlock(block.id, { value: e.target.value })} />
                  ) : (
                    <input className="w-full rounded-xl bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#35B24A]" value={block.value} onChange={(e) => updateBlock(block.id, { value: e.target.value })} />
                  )}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-4">
                  {[
                    ["fontSize", "Font size", "48px"], ["fontWeight", "Weight", "400/700/900"], ["color", "Colour", "#073e63"], ["marginTop", "Top spacing", "20px"],
                    ["marginBottom", "Bottom spacing", "20px"], ["lineHeight", "Line height", "1.4"], ["maxWidth", "Max width", "760px"], ["letterSpacing", "Letter spacing", "0.02em"],
                  ].map(([key, label, ph]) => (
                    <label key={key} className="text-sm font-bold text-slate-600">{label}
                      <input placeholder={ph} className="mt-2 w-full rounded-xl border px-3 py-2" value={(style as any)[key]} onChange={(e) => updateBlock(block.id, { style: { ...style, [key]: e.target.value } })} />
                    </label>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <section className="sticky top-8 h-fit rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-xl backdrop-blur">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-black">Draft Preview</h2>
            <a href={`${previewPath}?cmsPreview=1`} target="_blank" rel="noreferrer" className="rounded-xl bg-[#073e63] px-4 py-2 text-sm font-black text-white">Open</a>
          </div>
          <iframe key={previewPath + blocks.length} src={`${previewPath}?cmsPreview=1`} title="Content preview" className="h-[760px] w-full rounded-2xl border bg-white" />
        </section>
      </div>
    </div>
  );
}
