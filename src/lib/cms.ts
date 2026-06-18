import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { isSupabaseConfigured, supabase } from "./supabase";

export type CmsStyle = {
  fontSize?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  fontWeight?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  letterSpacing?: string;
  lineHeight?: string;
  maxWidth?: string;
  fontStyle?: string;
  textTransform?: string;
};

export type CmsBlock = {
  id: string;
  page: string;
  label: string;
  type: "text" | "textarea" | "richtext" | "image" | "link";
  value: string;
  style?: CmsStyle;
  updated_at?: string;
};

export type SiteSettings = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  navRadius: string;
  pageHeroHeight: string;
  buttonRadius: string;
  contentMaxWidth: string;
  logoScale: string;
  motionIntensity: "none" | "soft" | "normal";
  backgroundMode?: "clean" | "soft-gradient" | "premium-dark";
};

export const defaultSiteSettings: SiteSettings = {
  primaryColor: "#005AAA",
  secondaryColor: "#35B24A",
  accentColor: "#FDB913",
  fontFamily: "Inter, Poppins, Arial, sans-serif",
  navRadius: "2.4rem",
  pageHeroHeight: "520px",
  buttonRadius: "999px",
  contentMaxWidth: "80rem",
  logoScale: "1",
  motionIntensity: "normal",
  backgroundMode: "soft-gradient",
};

export const defaultCmsBlocks: CmsBlock[] = [
  { id: "home.hero.badge", page: "Home", label: "Hero badge", type: "text", value: "Redefining Water & Energy" },
  { id: "home.hero.title", page: "Home", label: "Hero title", type: "textarea", value: "Reliable Water Services For Sabah", style: { fontSize: "72px", fontWeight: "900", textAlign: "left", lineHeight: "1.02" } },
  { id: "home.hero.subtitle", page: "Home", label: "Hero subtitle", type: "textarea", value: "JETAMA SDN BHD is committed to supporting reliable treated water supply, sustainable infrastructure and operational excellence for the communities we serve.", style: { fontSize: "20px", lineHeight: "1.8", maxWidth: "760px" } },
  { id: "home.hero.button1", page: "Home", label: "Primary button", type: "text", value: "Explore Services" },
  { id: "home.hero.button2", page: "Home", label: "Secondary button", type: "text", value: "Contact Us" },
  { id: "about.hero.title", page: "About", label: "Hero title", type: "textarea", value: "About JETAMA SDN BHD", style: { fontSize: "64px", fontWeight: "900", lineHeight: "1.05" } },
  { id: "about.hero.subtitle", page: "About", label: "Hero subtitle", type: "textarea", value: "JETAMA is a Sabah-based water utility organisation focused on treated water supply, infrastructure excellence and sustainable service reliability for the community we serve." },
  { id: "about.section.title", page: "About", label: "Main section title", type: "textarea", value: "A trusted water organisation serving communities through expertise and innovation." },
  { id: "services.hero.title", page: "Services", label: "Hero title", type: "textarea", value: "Services & Facilities" },
  { id: "services.hero.subtitle", page: "Services", label: "Hero subtitle", type: "textarea", value: "Delivering water treatment expertise, facilities support and operational capability for communities, businesses and development areas." },
  { id: "subsidiary.hero.title", page: "Subsidiaries", label: "Hero title", type: "textarea", value: "Subsidiaries" },
  { id: "subsidiary.hero.subtitle", page: "Subsidiaries", label: "Hero subtitle", type: "textarea", value: "Explore JETAMA Water and JETAMA Energy through an editable, corporate subsidiary section." },
  { id: "jointventure.hero.title", page: "Joint Ventures", label: "Hero title", type: "textarea", value: "Joint Ventures" },
  { id: "projects.hero.title", page: "Projects", label: "Hero title", type: "textarea", value: "Projects" },
  { id: "news.hero.title", page: "News", label: "Hero title", type: "textarea", value: "News & Events" },
  { id: "careers.hero.title", page: "Careers", label: "Hero title", type: "textarea", value: "Careers" },
  { id: "contact.hero.title", page: "Contact", label: "Hero title", type: "textarea", value: "Contact Us" },
  { id: "footer.slogan", page: "Footer", label: "Footer slogan", type: "textarea", value: "Reliable Water Services For Sabah" },
  { id: "footer.description", page: "Footer", label: "Footer description", type: "textarea", value: "JETAMA SDN BHD supports reliable water services, infrastructure excellence and sustainable operations for communities in Sabah." },
];

const STORAGE_BLOCKS = "jetama_cms_blocks_v2";
const STORAGE_SETTINGS = "jetama_site_settings_v2";
const DRAFT_BLOCKS = "jetama_cms_blocks_draft";
const DRAFT_SETTINGS = "jetama_site_settings_draft";
const CHANNEL = "jetama-cms-sync";

function isPreviewMode() {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("cmsPreview") === "1";
}

function mergeBlocks(saved: CmsBlock[]) {
  const map = new Map(defaultCmsBlocks.map((b) => [b.id, b]));
  saved.forEach((b) => map.set(b.id, { ...(map.get(b.id) || b), ...b }));
  return Array.from(map.values());
}

function broadcast() {
  try { localStorage.setItem(CHANNEL, String(Date.now())); } catch {}
}

export async function loadCmsBlocks({ draft = false }: { draft?: boolean } = {}): Promise<CmsBlock[]> {
  if (draft || isPreviewMode()) {
    const rawDraft = localStorage.getItem(DRAFT_BLOCKS);
    if (rawDraft) return mergeBlocks(JSON.parse(rawDraft));
  }
  if (isSupabaseConfigured) {
    const { data, error } = await supabase.from("site_content").select("*").order("page").order("id");
    if (!error && data?.length) return mergeBlocks(data as CmsBlock[]);
  }
  const raw = localStorage.getItem(STORAGE_BLOCKS);
  return raw ? mergeBlocks(JSON.parse(raw)) : defaultCmsBlocks;
}

export async function saveCmsBlock(block: CmsBlock) {
  const payload = { ...block, updated_at: new Date().toISOString() };
  if (isSupabaseConfigured) {
    const { error } = await supabase.from("site_content").upsert(payload, { onConflict: "id" });
    if (!error) { broadcast(); return; }
  }
  const blocks = await loadCmsBlocks();
  const next = blocks.map((item) => (item.id === payload.id ? payload : item));
  if (!next.some((item) => item.id === payload.id)) next.push(payload);
  localStorage.setItem(STORAGE_BLOCKS, JSON.stringify(next));
  broadcast();
}

export function saveDraftCmsBlocks(blocks: CmsBlock[]) {
  localStorage.setItem(DRAFT_BLOCKS, JSON.stringify(blocks));
  broadcast();
}

export function clearDraftCmsBlocks() {
  localStorage.removeItem(DRAFT_BLOCKS);
  broadcast();
}

export async function loadSiteSettings({ draft = false }: { draft?: boolean } = {}): Promise<SiteSettings> {
  if (draft || isPreviewMode()) {
    const rawDraft = localStorage.getItem(DRAFT_SETTINGS);
    if (rawDraft) return { ...defaultSiteSettings, ...JSON.parse(rawDraft) };
  }
  if (isSupabaseConfigured) {
    const { data, error } = await supabase.from("site_settings").select("value").eq("id", "main").maybeSingle();
    if (!error && data?.value) return { ...defaultSiteSettings, ...(data.value as Partial<SiteSettings>) };
  }
  const raw = localStorage.getItem(STORAGE_SETTINGS);
  return raw ? { ...defaultSiteSettings, ...JSON.parse(raw) } : defaultSiteSettings;
}

export async function saveSiteSettings(value: SiteSettings) {
  const payload = { ...value };
  if (isSupabaseConfigured) {
    const { error } = await supabase.from("site_settings").upsert({ id: "main", value: payload, updated_at: new Date().toISOString() }, { onConflict: "id" });
    if (!error) { broadcast(); return; }
  }
  localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(payload));
  broadcast();
}

export function saveDraftSiteSettings(value: SiteSettings) {
  localStorage.setItem(DRAFT_SETTINGS, JSON.stringify(value));
  broadcast();
}

export function clearDraftSiteSettings() {
  localStorage.removeItem(DRAFT_SETTINGS);
  broadcast();
}

export function useCmsContent(page?: string) {
  const [blocks, setBlocks] = useState<CmsBlock[]>(defaultCmsBlocks);
  useEffect(() => {
    let mounted = true;
    const refresh = () => loadCmsBlocks().then((data) => mounted && setBlocks(data)).catch(() => mounted && setBlocks(defaultCmsBlocks));
    refresh();
    const onStorage = (e: StorageEvent) => { if ([STORAGE_BLOCKS, DRAFT_BLOCKS, CHANNEL].includes(e.key || "")) refresh(); };
    window.addEventListener("storage", onStorage);
    let channel: ReturnType<typeof supabase.channel> | undefined;
    if (isSupabaseConfigured) {
      channel = supabase.channel("site-content-realtime")
        .on("postgres_changes", { event: "*", schema: "public", table: "site_content" }, refresh)
        .subscribe();
    }
    return () => { mounted = false; window.removeEventListener("storage", onStorage); if (channel) supabase.removeChannel(channel); };
  }, []);
  const map = useMemo(() => new Map(blocks.filter((b) => !page || b.page === page || b.page === "Footer").map((b) => [b.id, b])), [blocks, page]);
  return { text: (id: string, fallback: string) => map.get(id)?.value || fallback, block: (id: string) => map.get(id), blocks };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState(defaultSiteSettings);
  useEffect(() => {
    let mounted = true;
    const refresh = () => loadSiteSettings().then((data) => mounted && setSettings(data)).catch(() => mounted && setSettings(defaultSiteSettings));
    refresh();
    const onStorage = (e: StorageEvent) => { if ([STORAGE_SETTINGS, DRAFT_SETTINGS, CHANNEL].includes(e.key || "")) refresh(); };
    window.addEventListener("storage", onStorage);
    let channel: ReturnType<typeof supabase.channel> | undefined;
    if (isSupabaseConfigured) {
      channel = supabase.channel("site-settings-realtime")
        .on("postgres_changes", { event: "*", schema: "public", table: "site_settings" }, refresh)
        .subscribe();
    }
    return () => { mounted = false; window.removeEventListener("storage", onStorage); if (channel) supabase.removeChannel(channel); };
  }, []);
  return settings;
}

export function cmsStyleToReact(style?: CmsStyle): React.CSSProperties | undefined {
  if (!style) return undefined;
  return {
    fontSize: style.fontSize,
    textAlign: style.textAlign,
    fontWeight: style.fontWeight,
    color: style.color,
    marginTop: style.marginTop,
    marginBottom: style.marginBottom,
    letterSpacing: style.letterSpacing,
    lineHeight: style.lineHeight,
    maxWidth: style.maxWidth,
    fontStyle: style.fontStyle,
    textTransform: style.textTransform as React.CSSProperties["textTransform"],
  };
}
