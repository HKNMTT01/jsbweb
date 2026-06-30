import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Image as ImageIcon,
  Newspaper,
  Play,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { listRows, type NewsRecord } from "../../lib/adminCms";

import galleryImage from "@/assets/jetama-about-3.jpg";
import videoImage from "@/assets/DJI_0298.jpg";
import newspaperImage from "@/assets/jetama-about-4.jpg";
import babagonImage from "@/assets/MOYOG.jpg";
import paparImage from "@/assets/PAPAR.jpg";
import perbarisanImage from "@/assets/prbarisanjetama.jpg";
import bebasRasuahImage from "@/assets/prgmbbasrasuah.jpg";
import annualDinnerImage from "@/assets/annualdinner jetama.jpg";
import ulangTahunImage from "@/assets/ulang thun jetama.jpg";

type NewsType = "gallery" | "videos" | "press-releases" | "announcement";
type FilterType = "all" | NewsType;

type NewsItem = {
  title: string;
  date: string;
  day: string;
  month: string;
  year: number;
  type: NewsType;
  description: string;
  image: string;
  sourceUrl?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const newsItems: NewsItem[] = [
  {
    title: "Selamat Hari Raya Aidilfitri",
    date: "Dummy Poster 2025",
    day: "01",
    month: "MAY",
    year: 2025,
    type: "gallery",
    description: "Warm festive wishes from JETAMA to all staff, partners and communities.",
    image: ulangTahunImage,
  },
  {
    title: "Selamat Hari Kaamatan",
    date: "Dummy Poster 2025",
    day: "30",
    month: "MAY",
    year: 2025,
    type: "gallery",
    description: "Celebrating harmony, culture and togetherness with the community.",
    image: perbarisanImage,
  },
  {
    title: "JETAMA Mobile Water Desalination Modular - 23092024",
    date: "Monday, 23 September 2024",
    day: "23",
    month: "SEP",
    year: 2024,
    type: "videos",
    description: "Video update showcasing JETAMA's mobile water desalination modular initiative.",
    image: videoImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/videos",
  },
  {
    title: "Seawater desalination system to address water supply issues in Sabah",
    date: "23 October 2024, Wednesday",
    day: "23",
    month: "OCT",
    year: 2024,
    type: "press-releases",
    description: "Media coverage on JETAMA's seawater desalination system to support water supply solutions in Sabah.",
    image: newspaperImage,
  },
  {
    title: "Jetama plans to build Sabah's first floating solar power plant at Babagon Dam",
    date: "29 April 2024, Monday",
    day: "29",
    month: "APR",
    year: 2024,
    type: "press-releases",
    description: "Media coverage on JETAMA's plan to develop floating solar power at Babagon Dam.",
    image: babagonImage,
  },
  {
    title: "Perbarisan Sempena Sambutan Hari Kebangsaan Peringkat Negeri Sabah 2023",
    date: "Thursday, 31 August 2023",
    day: "31",
    month: "AUG",
    year: 2023,
    type: "gallery",
    description: "JETAMA participation in the Sabah state-level National Day parade celebration.",
    image: perbarisanImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Ulang Tahun Ke-30 Jetama Sdn Bhd & Sambutan Hari Raya Aidilfitri",
    date: "Friday, 19 May 2023",
    day: "19",
    month: "MAY",
    year: 2023,
    type: "gallery",
    description: "Celebration of JETAMA's 30th anniversary together with Hari Raya Aidilfitri gathering.",
    image: ulangTahunImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Jetama Group Annual Dinner & Appreciation Night 2022",
    date: "Friday, 13 January 2023",
    day: "13",
    month: "JAN",
    year: 2023,
    type: "gallery",
    description: "Annual appreciation night recognising teamwork, service and contribution across JETAMA Group.",
    image: annualDinnerImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Program Bebas Rasuah 2022",
    date: "Thursday, 07 July 2022",
    day: "07",
    month: "JUL",
    year: 2022,
    type: "gallery",
    description: "Integrity and anti-corruption programme held as part of corporate governance commitment.",
    image: bebasRasuahImage,
    sourceUrl: "https://www.jetama.com.my/demo/index.php/news-events/gallery",
  },
  {
    title: "Jamuan Raya Aidilfitri Jetama 2022",
    date: "Sunday, 22 May 2022",
    day: "22",
    month: "MAY",
    year: 2022,
    type: "gallery",
    description: "Hari Raya Aidilfitri gathering for staff, partners and guests.",
    image: galleryImage,
  },
  {
    title: "Electrochlorination System at Papar Water Treatment Plant",
    date: "Thursday, 11 March 2021",
    day: "11",
    month: "MAR",
    year: 2021,
    type: "gallery",
    description: "Gallery update for the electrochlorination system at Papar Water Treatment Plant.",
    image: paparImage,
  },
];

const typeOptions: Array<{ value: FilterType; label: string }> = [
  { value: "all", label: "All" },
  { value: "gallery", label: "Events" },
  { value: "videos", label: "Videos" },
  { value: "press-releases", label: "News" },
];

function getTypeLabel(type: NewsType) {
  if (type === "videos") return "Video";
  if (type === "press-releases") return "News";
  if (type === "announcement") return "Announcement";
  return "Event";
}

function getTypeIcon(type: NewsType) {
  if (type === "videos") return <Play size={13} fill="currentColor" />;
  if (type === "press-releases") return <Newspaper size={13} />;
  return <ImageIcon size={13} />;
}

function mapBackendNews(item: NewsRecord): NewsItem {
  return {
    title: item.title,
    date: item.date || String(item.year || new Date().getFullYear()),
    day: item.day || "--",
    month: item.month || "JETAMA",
    year: Number(item.year || new Date().getFullYear()),
    type: item.type === "announcement" ? "press-releases" : item.type,
    description: item.description,
    image: item.image_url || galleryImage,
    sourceUrl: item.source_url || undefined,
  };
}

function NewsTheme() {
  return (
    <style>{`
      @keyframes softFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(18px,-14px,0) rotate(2deg); }
      }

      @keyframes cleanShine {
        0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
        28% { opacity: .55; }
        100% { transform: translateX(210%) skewX(-18deg); opacity: 0; }
      }

      .news-soft-float { animation: softFloat 13s ease-in-out infinite; }

      .corporate-card-shine {
        position: relative;
        overflow: hidden;
      }

      .corporate-card-shine::before {
        content: "";
        position: absolute;
        top: -55%;
        bottom: -55%;
        left: -42%;
        width: 30%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
        transform: translateX(-150%) skewX(-18deg);
        pointer-events: none;
      }

      .corporate-card-shine:hover::before { animation: cleanShine 1.8s ease; }

      .news-page-bg {
        background:
          radial-gradient(circle at 12% 10%, rgba(0,90,170,.10), transparent 27%),
          radial-gradient(circle at 90% 10%, rgba(53,178,74,.11), transparent 26%),
          radial-gradient(circle at 50% 0%, rgba(246,166,35,.10), transparent 28%),
          linear-gradient(135deg,#f8fbff 0%,#ffffff 45%,#f4fbf0 100%);
      }

      .news-pattern::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(0,90,170,.08) 1px, transparent 1px);
        background-size: 28px 28px;
        opacity: .38;
        pointer-events: none;
      }

      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
  );
}

function AccentRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
      <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
      <span className="h-[3px] w-6 rounded-full bg-[#F6A623]" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-[#005AAA] md:text-5xl">{title}</h2>
      <AccentRule className="mt-5" />
      <p className="mt-5 text-base leading-8 text-slate-600">{text}</p>
    </motion.div>
  );
}

function NewsBadge({ item }: { item: NewsItem }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[#005AAA] shadow-sm backdrop-blur">
      {getTypeIcon(item.type)}
      {getTypeLabel(item.type)}
    </span>
  );
}

function DateBox({ item }: { item: NewsItem }) {
  return (
    <div className="rounded-2xl bg-white/95 px-4 py-3 text-center shadow-[0_12px_30px_rgba(0,44,85,.12)] backdrop-blur">
      <p className="text-2xl font-black leading-none text-[#005AAA]">{item.day}</p>
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#F6A623]">{item.month}</p>
    </div>
  );
}

function FeatureCard({ item }: { item: NewsItem }) {
  return (
    <motion.article
      key={item.title}
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="corporate-card-shine relative overflow-hidden rounded-[34px] border border-white/80 bg-white/80 p-4 shadow-[0_28px_90px_rgba(0,60,115,.16)] backdrop-blur-xl"
    >
      <div className="relative h-[430px] overflow-hidden rounded-[26px]">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/92 via-[#005AAA]/24 to-transparent" />
        <div className="absolute left-5 top-5">
          <DateBox item={item} />
        </div>
        <div className="absolute bottom-7 left-7 right-7">
          <NewsBadge item={item} />
          <h2 className="mt-4 line-clamp-2 text-2xl font-black leading-tight text-white md:text-3xl">
            {item.title}
          </h2>
          <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-white/78">{item.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

function EventCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className={`corporate-card-shine group rounded-[30px] border border-[#005AAA]/10 bg-white p-3 shadow-[0_18px_60px_rgba(15,60,110,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(0,90,170,.14)] ${
        index === 0 ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden rounded-[24px] ${index === 0 ? "h-[360px]" : "h-[260px]"}`}>
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/88 via-[#005AAA]/12 to-transparent" />
        <div className="absolute left-5 top-5"><DateBox item={item} /></div>
        <div className="absolute bottom-6 left-6 right-6">
          <NewsBadge item={item} />
          <h3 className="mt-3 line-clamp-2 text-xl font-black leading-tight text-white md:text-2xl">{item.title}</h3>
          {index === 0 && <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">{item.description}</p>}
        </div>
      </div>
    </motion.article>
  );
}

function ArchiveCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      className="corporate-card-shine group relative overflow-hidden rounded-[26px] border border-[#005AAA]/10 bg-white/90 p-4 shadow-[0_16px_55px_rgba(15,60,110,.08)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_25px_75px_rgba(0,90,170,.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#005AAA] via-[#41B650] to-[#F6A623]" />
      <div className="flex gap-4">
        <div className="h-28 w-32 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#41B650]">
            {getTypeIcon(item.type)}
            <span>{getTypeLabel(item.type)}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{item.day} {item.month} {item.year}</span>
          </div>
          <h3 className="line-clamp-2 text-lg font-black leading-snug text-[#052b4f] transition group-hover:text-[#005AAA]">{item.title}</h3>
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{item.description}</p>
        </div>
      </div>

      {item.sourceUrl ? (
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] transition hover:text-[#41B650]"
        >
          Read More <ExternalLink size={14} />
        </a>
      ) : (
        <button className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] transition hover:text-[#41B650]">
          View Update <ArrowRight size={14} />
        </button>
      )}
    </motion.article>
  );
}

export default function News() {
  const [backendItems, setBackendItems] = useState<NewsItem[]>([]);
  const [selectedType, setSelectedType] = useState<FilterType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    listRows<NewsRecord>("news", []).then((rows) => {
      setBackendItems(rows.filter((item) => item.is_published !== false).map(mapBackendNews));
    });
  }, []);

  const allNewsItems = backendItems.length ? backendItems : newsItems;
  const featuredNews = allNewsItems.slice(0, 5);

  useEffect(() => {
    if (featuredNews.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current === featuredNews.length - 1 ? 0 : current + 1));
    }, 5200);

    return () => window.clearInterval(timer);
  }, [featuredNews.length]);

  const visibleItems = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return allNewsItems
      .filter((item) => {
        const matchType = selectedType === "all" || item.type === selectedType;
        const matchSearch =
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.date.toLowerCase().includes(query) ||
          String(item.year).includes(query);

        return matchType && matchSearch;
      })
      .sort((a, b) => b.year - a.year);
  }, [selectedType, searchTerm, allNewsItems]);

  const currentSlide = featuredNews[activeSlide] || allNewsItems[0];
  const nextSlide = featuredNews[(activeSlide + 1) % featuredNews.length] || allNewsItems[0];
  const eventItems = visibleItems.filter((item) => item.type === "gallery").slice(0, 5);
  const archiveItems = visibleItems.slice(0, 8);
  const newsTotal = allNewsItems.filter((item) => item.type === "press-releases").length;
  const eventTotal = allNewsItems.filter((item) => item.type === "gallery").length;
  const videoTotal = allNewsItems.filter((item) => item.type === "videos").length;

  return (
    <main className="news-page-bg min-h-screen overflow-hidden text-slate-900">
      <NewsTheme />

      <section className="news-pattern relative isolate overflow-hidden pt-32">
        <div className="news-soft-float absolute left-[-190px] top-12 -z-10 h-[420px] w-[520px] bg-[#005AAA]/[.06]" style={{ clipPath: "polygon(0 25%, 84% 0, 100% 70%, 12% 100%)" }} />
        <div className="news-soft-float absolute right-[-200px] top-28 -z-10 h-[430px] w-[560px] bg-[#41B650]/[.07] [animation-delay:1.2s]" style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }} />
        <div className="absolute left-[30%] top-16 -z-10 h-52 w-52 rounded-full bg-[#F6A623]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center"
          >
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
                <Link to="/" className="transition hover:text-[#005AAA]">Home</Link>
                <ChevronRight size={15} className="text-slate-400" />
                <span className="font-bold text-[#005AAA]">News & Events</span>
              </div>
              <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[.98] tracking-tight text-[#005AAA] md:text-7xl">
                News
                <span className="block text-[#052b4f]">& Events</span>
              </h1>
              <AccentRule className="mt-7" />
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
                Stay updated with JETAMA corporate announcements, community events, media coverage and visual highlights.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-[#005AAA]/10 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-black text-[#005AAA]">{newsTotal}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">News</p>
                </div>
                <div className="rounded-2xl border border-[#41B650]/10 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-black text-[#41B650]">{eventTotal}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Events</p>
                </div>
                <div className="rounded-2xl border border-[#F6A623]/10 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-black text-[#F6A623]">{videoTotal}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">Videos</p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#news-archive" className="group inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(0,90,170,.24)] transition hover:-translate-y-1 hover:bg-[#004b8f]">
                  Browse Updates <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#events" className="inline-flex items-center rounded-full border border-[#005AAA]/15 bg-white/80 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#005AAA] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white">
                  View Events
                </a>
              </div>
            </div>

            <div className="relative">
              <FeatureCard item={currentSlide} />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="absolute -bottom-8 right-6 hidden w-[46%] rounded-[26px] border border-white/90 bg-white/90 p-3 shadow-[0_22px_70px_rgba(15,60,110,.14)] backdrop-blur-xl md:block"
              >
                <div className="relative h-[190px] overflow-hidden rounded-[20px]">
                  <img src={nextSlide.image} alt="Next highlight" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/88 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#F6A623]">Next Highlight</p>
                    <p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-white">{nextSlide.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="news-archive" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.38fr_.62fr] lg:items-start">
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="sticky top-28 rounded-[32px] border border-[#005AAA]/10 bg-white/78 p-6 shadow-[0_22px_70px_rgba(15,60,110,.09)] backdrop-blur-xl"
            >
              <h2 className="mt-3 text-3xl font-black uppercase text-[#005AAA]">Latest Updates</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Search and filter updates by category, event title, description or year.</p>

              <label className="relative mt-6 block">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#005AAA]" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search news, event or year..."
                  className="h-12 w-full rounded-2xl border border-[#005AAA]/10 bg-white pl-11 pr-4 text-sm font-semibold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#005AAA] focus:ring-4 focus:ring-[#005AAA]/10"
                />
              </label>

              <div className="mt-5 flex flex-wrap gap-3">
                {typeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedType(option.value)}
                    className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] transition ${
                      selectedType === option.value
                        ? "bg-[#005AAA] text-white shadow-[0_12px_28px_rgba(0,90,170,.22)]"
                        : "border border-[#005AAA]/10 bg-white text-slate-600 hover:border-[#005AAA]/20 hover:text-[#005AAA]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.aside>

            <div className="grid gap-5 md:grid-cols-2">
              {archiveItems.map((item, index) => (
                <ArchiveCard key={`${item.title}-${item.date}`} item={item} index={index} />
              ))}
            </div>
          </div>

          {visibleItems.length === 0 && (
            <div className="mt-10 rounded-[28px] border border-[#005AAA]/10 bg-white/75 p-10 text-center shadow-sm backdrop-blur">
              <p className="text-xl font-black text-[#005AAA]">No update found.</p>
              <p className="mt-2 text-slate-600">Try another keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      <section id="events" className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#edf8ff_48%,#f8fff3_100%)]" />
        <div className="absolute left-[-140px] top-12 -z-10 h-80 w-80 rotate-45 rounded-[70px] bg-[#005AAA]/5" />
        <div className="absolute right-[-140px] bottom-16 -z-10 h-80 w-80 rotate-12 rounded-[70px] bg-[#41B650]/6" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Corporate Moments"
              title="Events Gallery"
              text="A neat visual collection of celebrations, community activities and internal corporate moments."
            />
            <a href="#news-archive" className="inline-flex w-fit items-center gap-2 rounded-full border border-[#005AAA]/15 bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] shadow-sm transition hover:-translate-y-1 hover:bg-[#005AAA] hover:text-white">
              View All Updates <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {(eventItems.length ? eventItems : allNewsItems.slice(0, 5)).map((item, index) => (
              <EventCard key={`${item.title}-${item.date}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
