import { useEffect, useMemo, useState } from "react";
import { clearDraftCmsBlocks, CmsBlock, defaultCmsBlocks, loadCmsBlocks, saveCmsBlock, saveDraftCmsBlocks } from "../../../lib/adminCms";

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
  const [error, setError] = useState("");

  useEffect(() => { loadCmsBlocks({ draft: true }).then(setBlocks); }, []);
  useEffect(() => { saveDraftCmsBlocks(blocks); }, [blocks]);

  const pages = useMemo(() => Array.from(new Set(blocks.map((b) => b.page))), [blocks]);
  const filtered = blocks.filter((b) => b.page === page);
  const previewPath = pagePath[page] || "/";

  function updateBlock(id: string, patch: Partial<CmsBlock>) {
    setBlocks((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
  }

  async function publish(block?: CmsBlock) {
    setError("");
    try {
      const list = block ? [block] : blocks;
      for (const item of list) await saveCmsBlock(item);
      clearDraftCmsBlocks();
      setStatus(block ? `Published: ${block.label}` : "All content published to website.");
      setTimeout(() => setStatus(""), 2600);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not publish content");
    }
  }

  function addBlock() {
    const label = window.prompt("New section label?");
    if (!label) return;
    const id = `${page.toLowerCase().replace(/\s+/g, ".")}.${Date.now()}`;
    setBlocks([{ id, page, label, type: "textarea", value: "New content section", style: { fontSize: "16px", lineHeight: "1.8" }, is_published: true }, ...blocks]);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Reusable content blocks</p>
          <h1 className="mt-2 text-4xl font-black">Website Content Editor</h1>
          <p className="mt-2 text-slate-500">Edit text blocks that can be consumed by public pages through <b>loadCmsBlocks()</b>.</p>
        </div>
        <div className="flex gap-3">
          <a href={`${previewPath}?cmsPreview=1`} target="_blank" rel="noreferrer" className="rounded-2xl bg-white px-5 py-3 font-black text-[#073e63] shadow-lg">Preview Page</a>
          <button onClick={() => publish()} className="rounded-2xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">Publish All</button>
        </div>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}
      {error && <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600">{error}</div>}

      <div className="mt-7 flex flex-wrap gap-2">
        {pages.map((item) => (
          <button key={item} onClick={() => setPage(item)} className={`rounded-full px-4 py-2 text-sm font-black ${page === item ? "bg-[#073e63] text-white" : "bg-white text-[#073e63] shadow-sm"}`}>{item}</button>
        ))}
        <button onClick={addBlock} className="rounded-full bg-[#F5A623] px-4 py-2 text-sm font-black text-white shadow-sm">+ Add Block</button>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_.95fr]">
        <section className="space-y-5">
          {filtered.map((block) => (
            <article key={block.id} className="rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00a884]">{block.id}</p>
                  <h2 className="mt-1 text-xl font-black text-[#073e63]">{block.label}</h2>
                </div>
                <button onClick={() => publish(block)} className="rounded-xl bg-[#005AAA] px-4 py-2 font-bold text-white">Publish Block</button>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border px-4 py-3" value={block.label} onChange={(e) => updateBlock(block.id, { label: e.target.value })} />
                <select className="rounded-xl border px-4 py-3" value={block.type} onChange={(e) => updateBlock(block.id, { type: e.target.value as CmsBlock["type"] })}>
                  <option value="text">Text</option>
                  <option value="textarea">Textarea</option>
                  <option value="image">Image URL</option>
                  <option value="html">HTML</option>
                </select>
              </div>

              {block.type === "textarea" || block.type === "html" ? (
                <textarea className="mt-4 w-full rounded-xl border px-4 py-3" rows={7} value={block.value} onChange={(e) => updateBlock(block.id, { value: e.target.value })} />
              ) : (
                <input className="mt-4 w-full rounded-xl border px-4 py-3" value={block.value} onChange={(e) => updateBlock(block.id, { value: e.target.value })} />
              )}

              <details className="mt-4 rounded-xl bg-[#f8fbff] p-4">
                <summary className="cursor-pointer font-black text-[#073e63]">Style JSON</summary>
                <textarea className="mt-3 w-full rounded-xl border px-4 py-3 font-mono text-xs" rows={5} value={JSON.stringify(block.style || {}, null, 2)} onChange={(e) => {
                  try { updateBlock(block.id, { style: JSON.parse(e.target.value) }); } catch { /* keep editing */ }
                }} />
              </details>
            </article>
          ))}
        </section>

        <section className="sticky top-8 h-fit rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-black text-[#073e63]">Live Preview</h2>
            <a href={`${previewPath}?cmsPreview=1`} target="_blank" rel="noreferrer" className="text-sm font-black text-[#005AAA]">Open</a>
          </div>
          <iframe src={`${previewPath}?cmsPreview=1&content=${Date.now()}`} title="Content preview" className="h-[740px] w-full rounded-2xl border bg-white" />
        </section>
      </div>
    </div>
  );
}
