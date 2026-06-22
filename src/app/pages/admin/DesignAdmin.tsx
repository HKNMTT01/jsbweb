import { useEffect, useMemo, useState } from "react";
import {
  clearDraftSiteSettings,
  defaultSiteSettings,
  loadSiteSettings,
  saveDraftSiteSettings,
  saveSiteSettings,
  SiteSettings,
} from "../../../lib/adminCms";

const presets: Array<SiteSettings & { name: string }> = [
  { name: "JETAMA Corporate", ...defaultSiteSettings },
  { name: "Water Premium", ...defaultSiteSettings, primaryColor: "#005AAA", secondaryColor: "#00AEEF", accentColor: "#35B24A", darkColor: "#052B4F" },
  { name: "Energy Accent", ...defaultSiteSettings, primaryColor: "#052B4F", secondaryColor: "#35B24A", accentColor: "#F5A623", darkColor: "#041B31" },
];

const fields: Array<[keyof SiteSettings, string, string, string]> = [
  ["primaryColor", "Primary colour", "#005AAA", "color"],
  ["secondaryColor", "Secondary colour", "#35B24A", "color"],
  ["accentColor", "Accent colour", "#F5A623", "color"],
  ["darkColor", "Dark colour", "#052B4F", "color"],
  ["fontFamily", "Font family", "Poppins, sans-serif", "text"],
  ["navRadius", "Navigation radius", "18px", "text"],
  ["cardRadius", "Card radius", "28px", "text"],
  ["buttonRadius", "Button radius", "999px", "text"],
  ["heroHeight", "Hero height", "560px", "text"],
  ["logoScale", "Logo scale", "1", "text"],
];

export default function DesignAdmin() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [status, setStatus] = useState("");
  const [path, setPath] = useState("/");

  useEffect(() => { loadSiteSettings({ draft: true }).then(setSettings); }, []);
  useEffect(() => { saveDraftSiteSettings(settings); }, [settings]);

  const previewSrc = useMemo(() => `${path}?cmsPreview=1&design=${Date.now()}`, [path, settings]);

  async function publish() {
    await saveSiteSettings(settings);
    clearDraftSiteSettings();
    setStatus("Design settings published to website.");
    setTimeout(() => setStatus(""), 2500);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#00a884]">Corporate visual control</p>
          <h1 className="mt-2 text-4xl font-black">Design Editor</h1>
          <p className="mt-2 max-w-3xl text-slate-500">Adjust global style tokens used by public pages: colours, radius, typography, motion and background mode.</p>
        </div>
        <button onClick={publish} className="rounded-2xl bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-3 font-black text-white shadow-lg">Publish Design</button>
      </div>

      {status && <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700">{status}</div>}

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
          <h2 className="text-xl font-black text-[#073e63]">Theme Presets</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {presets.map((preset) => (
              <button key={preset.name} onClick={() => setSettings(preset)} className="rounded-2xl border bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 flex gap-2">
                  <span className="h-7 w-7 rounded-full" style={{ background: preset.primaryColor }} />
                  <span className="h-7 w-7 rounded-full" style={{ background: preset.secondaryColor }} />
                  <span className="h-7 w-7 rounded-full" style={{ background: preset.accentColor }} />
                </div>
                <p className="font-black text-[#073e63]">{preset.name}</p>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {fields.map(([key, label, placeholder, type]) => (
              <label key={key} className="text-sm font-bold text-slate-600">
                {label}
                <input type={type} className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-[#35B24A]" placeholder={placeholder} value={String(settings[key] || "")} onChange={(e) => setSettings({ ...settings, [key]: e.target.value })} />
              </label>
            ))}
            <label className="text-sm font-bold text-slate-600">
              Motion intensity
              <select className="mt-2 w-full rounded-xl border px-4 py-3" value={settings.motionIntensity} onChange={(e) => setSettings({ ...settings, motionIntensity: e.target.value as SiteSettings["motionIntensity"] })}>
                <option value="none">None</option><option value="soft">Soft</option><option value="normal">Normal</option>
              </select>
            </label>
            <label className="text-sm font-bold text-slate-600">
              Background mode
              <select className="mt-2 w-full rounded-xl border px-4 py-3" value={settings.backgroundMode} onChange={(e) => setSettings({ ...settings, backgroundMode: e.target.value as SiteSettings["backgroundMode"] })}>
                <option value="clean">Clean</option><option value="soft-gradient">Soft Gradient</option><option value="premium-dark">Premium Dark</option>
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-[2rem] p-8 text-white" style={{ background: `linear-gradient(135deg, ${settings.primaryColor}, ${settings.secondaryColor})`, borderRadius: settings.cardRadius, fontFamily: settings.fontFamily }}>
            <h2 className="text-4xl font-black">JETAMA Preview</h2>
            <p className="mt-3 leading-7">This design sample follows your selected settings.</p>
            <button className="mt-6 px-6 py-3 font-black text-slate-900" style={{ background: settings.accentColor, borderRadius: settings.buttonRadius }}>Sample Button</button>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-black">Full webpage preview</h2>
            <div className="flex flex-wrap gap-2">
              {[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/projects", "Projects"], ["/news", "News"]].map(([p, l]) => (
                <button key={p} onClick={() => setPath(p)} className={`rounded-xl px-3 py-2 text-sm font-black ${path === p ? "bg-[#073e63] text-white" : "bg-slate-100"}`}>{l}</button>
              ))}
            </div>
          </div>
          <iframe key={previewSrc} src={previewSrc} title="Design preview" className="h-[760px] w-full rounded-2xl border bg-white" />
        </section>
      </div>
    </div>
  );
}
