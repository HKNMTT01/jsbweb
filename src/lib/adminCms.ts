import { isSupabaseConfigured, supabase } from "./supabase";

export type CmsBlock = {
  id: string;
  page: string;
  label: string;
  type: "text" | "textarea" | "richtext";
  value: string;
  style?: Record<string, string>;
  updated_at?: string;
};

export type SiteSettings = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  darkColor: string;
  fontFamily: string;
  navRadius: string;
  cardRadius: string;
  buttonRadius: string;
  heroHeight: string;
  logoScale: string;
  motionIntensity: "none" | "soft" | "normal";
  backgroundMode: "clean" | "soft-gradient" | "premium-dark";
};

export type NewsRecord = {
  id?: number;
  title: string;
  description: string;
  date: string;
  day: string;
  month: string;
  year: number;
  type: "gallery" | "videos" | "press-releases" | "event" | "announcement";
  image_url: string;
  source_url?: string;
  is_featured?: boolean;
  is_published?: boolean;
  created_at?: string;
};

export type GalleryRecord = {
  id?: number;
  title: string;
  description?: string;
  image_url: string;
  year: number;
  type: "Photo" | "Video" | "Event";
  is_published?: boolean;
  created_at?: string;
};

export type CareerRecord = {
  id?: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  application_email: string;
  is_active: boolean;
  created_at?: string;
};

export const defaultSiteSettings: SiteSettings = {
  primaryColor: "#005AAA",
  secondaryColor: "#35B24A",
  accentColor: "#F5A623",
  darkColor: "#052B4F",
  fontFamily: "Poppins, sans-serif",
  navRadius: "18px",
  cardRadius: "28px",
  buttonRadius: "999px",
  heroHeight: "560px",
  logoScale: "1",
  motionIntensity: "soft",
  backgroundMode: "soft-gradient",
};

export const defaultCmsBlocks: CmsBlock[] = [
  { id: "home.hero.title", page: "Home", label: "Hero Title", type: "text", value: "Redefining Water & Energy", style: { fontSize: "64px", fontWeight: "900", color: "#ffffff" } },
  { id: "home.hero.subtitle", page: "Home", label: "Hero Subtitle", type: "textarea", value: "Delivering reliable water services and renewable energy initiatives for Sabah.", style: { fontSize: "18px", lineHeight: "1.8" } },
  { id: "about.company.summary", page: "About", label: "Company Summary", type: "textarea", value: "JETAMA SDN BHD is a Sabah government-linked company supporting water infrastructure, treatment and sustainable development.", style: { fontSize: "16px", lineHeight: "1.8" } },
  { id: "services.overview.intro", page: "Services", label: "Services Intro", type: "textarea", value: "Our scope covers rehabilitation, construction, operation and maintenance of water supply facilities.", style: { fontSize: "16px", lineHeight: "1.8" } },
  { id: "projects.intro", page: "Projects", label: "Projects Intro", type: "textarea", value: "Explore JETAMA project experience across water infrastructure and renewable energy development.", style: { fontSize: "16px", lineHeight: "1.8" } },
  { id: "news.intro", page: "News", label: "News Intro", type: "textarea", value: "Stay updated with JETAMA news, events, gallery updates and announcements.", style: { fontSize: "16px", lineHeight: "1.8" } },
  { id: "careers.intro", page: "Careers", label: "Careers Intro", type: "textarea", value: "Join a growing organisation committed to water, energy, innovation and sustainable development in Sabah.", style: { fontSize: "16px", lineHeight: "1.8" } },
  { id: "contact.intro", page: "Contact", label: "Contact Intro", type: "textarea", value: "Connect with JETAMA for enquiries, partnerships and corporate information.", style: { fontSize: "16px", lineHeight: "1.8" } },
];

const LS = {
  blocks: "jetama.cms.blocks",
  draftBlocks: "jetama.cms.blocks.draft",
  settings: "jetama.cms.settings",
  draftSettings: "jetama.cms.settings.draft",
  news: "jetama.cms.news",
  gallery: "jetama.cms.gallery",
  careers: "jetama.cms.careers",
};

function readLocal<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("jetama-cms-updated", { detail: { key } }));
}

export async function loadCmsBlocks(options?: { draft?: boolean }): Promise<CmsBlock[]> {
  if (options?.draft) return readLocal(LS.draftBlocks, readLocal(LS.blocks, defaultCmsBlocks));
  if (!isSupabaseConfigured) return readLocal(LS.blocks, defaultCmsBlocks);
  const { data, error } = await supabase.from("cms_blocks").select("*").order("page");
  if (error || !data?.length) return readLocal(LS.blocks, defaultCmsBlocks);
  const blocks = data.map((item: any) => ({ ...item, style: item.style || {} })) as CmsBlock[];
  writeLocal(LS.blocks, blocks);
  return blocks;
}

export function saveDraftCmsBlocks(blocks: CmsBlock[]) { writeLocal(LS.draftBlocks, blocks); }
export function clearDraftCmsBlocks() { localStorage.removeItem(LS.draftBlocks); }

export async function saveCmsBlock(block: CmsBlock) {
  const current = readLocal<CmsBlock[]>(LS.blocks, defaultCmsBlocks);
  const next = current.some((item) => item.id === block.id) ? current.map((item) => item.id === block.id ? block : item) : [block, ...current];
  writeLocal(LS.blocks, next);
  if (!isSupabaseConfigured) return { error: null };
  return supabase.from("cms_blocks").upsert({ ...block, updated_at: new Date().toISOString() }, { onConflict: "id" });
}

export async function loadSiteSettings(options?: { draft?: boolean }): Promise<SiteSettings> {
  if (options?.draft) return readLocal(LS.draftSettings, readLocal(LS.settings, defaultSiteSettings));
  if (!isSupabaseConfigured) return readLocal(LS.settings, defaultSiteSettings);
  const { data, error } = await supabase.from("site_settings").select("settings").eq("id", "main").maybeSingle();
  if (error || !data?.settings) return readLocal(LS.settings, defaultSiteSettings);
  const settings = { ...defaultSiteSettings, ...(data.settings as SiteSettings) };
  writeLocal(LS.settings, settings);
  return settings;
}

export function saveDraftSiteSettings(settings: SiteSettings) { writeLocal(LS.draftSettings, settings); }
export function clearDraftSiteSettings() { localStorage.removeItem(LS.draftSettings); }

export async function saveSiteSettings(settings: SiteSettings) {
  writeLocal(LS.settings, settings);
  if (!isSupabaseConfigured) return { error: null };
  return supabase.from("site_settings").upsert({ id: "main", settings, updated_at: new Date().toISOString() }, { onConflict: "id" });
}

export async function listRows<T>(table: "news" | "gallery" | "careers", fallback: T[] = []): Promise<T[]> {
  if (!isSupabaseConfigured) return readLocal(`jetama.cms.${table}`, fallback);
  const orderColumn = table === "news" ? "year" : "id";
  const { data, error } = await supabase.from(table).select("*").order(orderColumn, { ascending: false });
  if (error) return readLocal(`jetama.cms.${table}`, fallback);
  writeLocal(`jetama.cms.${table}`, data || []);
  return (data || []) as T[];
}

export async function upsertRow<T extends { id?: number }>(table: "news" | "gallery" | "careers", row: T) {
  const key = `jetama.cms.${table}`;
  const items = readLocal<any[]>(key, []);
  const nextRow = row.id ? row : { ...row, id: Date.now() };
  const next = items.some((item) => item.id === nextRow.id) ? items.map((item) => item.id === nextRow.id ? nextRow : item) : [nextRow, ...items];
  writeLocal(key, next);
  if (!isSupabaseConfigured) return { error: null };
  return supabase.from(table).upsert(nextRow as any);
}

export async function deleteRow(table: "news" | "gallery" | "careers", id: number) {
  const key = `jetama.cms.${table}`;
  writeLocal(key, readLocal<any[]>(key, []).filter((item) => item.id !== id));
  if (!isSupabaseConfigured) return { error: null };
  return supabase.from(table).delete().eq("id", id);
}

export function splitLines(value: string): string[] {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

export function joinLines(value?: string[]) {
  return (value || []).join("\n");
}
