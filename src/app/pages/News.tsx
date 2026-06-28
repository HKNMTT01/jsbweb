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
  hidden: { opacity: 0, y: 26 },
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

function NewsModernTheme() {
  return (
    <style>{`
      @keyframes newsFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(20px,-18px,0) rotate(3deg); }
      }

      @keyframes newsShine {
        0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
        18% { opacity: .8; }
        100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
      }

      @keyframes newsDividerGlow {
        0%, 100% { transform: translateX(-10%); opacity: .55; }
        50% { transform: translateX(14%); opacity: .95; }
      }

      @keyframes newsPulse {
        0%, 100% { opacity: .55; transform: scale(1); }
        50% { opacity: .95; transform: scale(1.08); }
      }

      .news-float {
        animation: newsFloat 9s ease-in-out infinite;
      }

      .news-shine::after {
        content: "";
        position: absolute;
        inset: 0;
        width: 42%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
        animation: newsShine 5.8s ease-in-out infinite;
        pointer-events: none;
      }

      .news-divider-shine::before {
        content: "";
        position: absolute;
        inset: -40px -10%;
        background:
          radial-gradient(circle at 15% 50%, rgba(246,166,35,.28), transparent 28%),
          radial-gradient(circle at 52% 50%, rgba(53,178,74,.20), transparent 26%),
          radial-gradient(circle at 84% 50%, rgba(0,90,170,.26), transparent 30%);
        filter: blur(18px);
        animation: newsDividerGlow 8s ease-in-out infinite;
      }

      .news-divider-shine::after {
        content: "";
        position: absolute;
        left: -20%;
        top: 50%;
        height: 2px;
        width: 140%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.85), rgba(246,166,35,.75), transparent);
        animation: newsShine 4.8s ease-in-out infinite;
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
  const eventItems = visibleItems.filter((item) => item.type === "gallery").slice(0, 4);
  const newsList = visibleItems.filter((item) => item.type !== "gallery").slice(0, 4);
  const archiveItems = visibleItems.slice(0, 6);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <NewsModernTheme />

      <section className="relative isolate pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eaf6ff_42%,#f7fff2_76%,#fff9ea_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_18%_20%,rgba(246,166,35,.20),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(53,178,74,.18),transparent_30%),radial-gradient(circle_at_48%_8%,rgba(0,90,170,.16),transparent_32%)]" />

        <div className="news-float absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[76px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
        <div className="news-float absolute right-[-170px] top-36 -z-10 h-[420px] w-[420px] rotate-12 rounded-[76px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />
        <div className="absolute left-[11%] top-[38%] -z-10 h-56 w-56 rounded-full bg-[#F6A623]/12 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="grid gap-12 lg:grid-cols-[.94fr_1.06fr] lg:items-center"
          >
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
                <Link to="/" className="transition hover:text-[#005AAA]">
                  Home
                </Link>
                <ChevronRight size={15} className="text-slate-400" />
                <span className="font-bold text-[#005AAA]">News & Events</span>
              </div>

              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#005AAA] md:text-7xl">
                Discover
                <span className="block text-[#35B24A]">News</span>
                <span className="block text-[#F6A623]">& Events</span>
              </h1>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#events"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_18px_45px_rgba(0,90,170,.28)] transition hover:-translate-y-1 hover:bg-[#004b8f]"
                >
                  Explore Events <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#news-archive"
                  className="inline-flex items-center rounded-full border border-[#005AAA]/20 bg-white/80 px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-[#005AAA] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white"
                >
                  View News
                </a>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="news-float absolute -right-7 top-1 h-32 w-32 rotate-12 rounded-[34px] bg-[#F6A623]/18 blur-sm" />
              <div className="news-float absolute -left-5 bottom-6 h-40 w-40 -rotate-12 rounded-[42px] bg-[#35B24A]/14 [animation-delay:1.1s]" />

              <motion.div
                key={currentSlide.title}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="news-shine absolute left-0 top-5 w-[76%] overflow-hidden rounded-[42px] rounded-br-[120px] border border-white/90 bg-white/80 p-4 shadow-[0_30px_90px_rgba(0,90,170,.20)] backdrop-blur-xl"
              >
                <div className="relative h-[420px] overflow-hidden rounded-[34px] rounded-br-[105px]">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="h-full w-full object-cover transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003c75]/88 via-[#005AAA]/12 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-2xl bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur">
                    <p className="text-3xl font-black leading-none text-[#005AAA]">{currentSlide.day}</p>
                    <p className="text-[11px] font-black uppercase tracking-wide text-[#F6A623]">{currentSlide.month}</p>
                  </div>
                  <div className="absolute bottom-7 left-7 right-7">
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                      {getTypeIcon(currentSlide.type)} {getTypeLabel(currentSlide.type)}
                    </p>
                    <h2 className="line-clamp-2 text-2xl font-black leading-tight text-white md:text-3xl">
                      {currentSlide.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/78">
                      {currentSlide.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-0 right-0 w-[46%] overflow-hidden rounded-[34px] rounded-tl-[96px] border border-white/90 bg-white/80 p-3 shadow-[0_24px_70px_rgba(15,60,110,.16)] backdrop-blur-xl">
                <div className="relative h-[255px] overflow-hidden rounded-[26px] rounded-tl-[82px]">
                  <img
                    src={featuredNews[(activeSlide + 1) % featuredNews.length]?.image || galleryImage}
                    alt="Featured news"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005AAA]/75 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F6A623]">Next Highlight</p>
                    <p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-white">
                      {featuredNews[(activeSlide + 1) % featuredNews.length]?.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="news-divider-shine relative h-24 overflow-hidden bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623] opacity-95" />
      </section>

      <section id="events" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#edf8ff_46%,#f9fff5_100%)]" />
        <div className="absolute left-[-120px] top-16 -z-10 h-72 w-72 rotate-45 rounded-[58px] bg-[#005AAA]/5" />
        <div className="absolute right-[-120px] bottom-10 -z-10 h-80 w-80 rounded-[68px] bg-[#35B24A]/6" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Corporate Moments</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Events Gallery</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Browse recent gallery moments, celebrations and community activities from JETAMA.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {(eventItems.length ? eventItems : allNewsItems.slice(0, 4)).map((item, index) => (
              <motion.article
                key={`${item.title}-${item.date}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className={`group relative overflow-hidden border border-white/90 bg-white/85 p-3 shadow-[0_18px_55px_rgba(15,60,110,.10)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,90,170,.18)] ${
                  index === 0
                    ? "rounded-[42px] rounded-br-[110px] lg:col-span-2 lg:row-span-2"
                    : index === 1
                      ? "rounded-[34px] rounded-tl-[90px]"
                      : index === 2
                        ? "rounded-[34px] rounded-br-[90px]"
                        : "rounded-[34px] rounded-tr-[90px]"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "h-[430px] rounded-[34px] rounded-br-[96px]" : "h-[245px] rounded-[26px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003c75]/84 via-[#005AAA]/12 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-2xl bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur">
                    <p className="text-2xl font-black leading-none text-[#005AAA]">{item.day}</p>
                    <p className="text-[10px] font-black uppercase text-[#F6A623]">{item.month}</p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                      {getTypeIcon(item.type)} {getTypeLabel(item.type)}
                    </p>
                    <h3 className={`${index === 0 ? "text-3xl" : "text-xl"} line-clamp-2 font-black leading-tight text-white`}>
                      {item.title}
                    </h3>
                    {index === 0 && <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/78">{item.description}</p>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="news-archive" className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[#005AAA]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(246,166,35,.20),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(53,178,74,.18),transparent_28%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.65 }}
            >
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Archive</p>
              <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-5xl">Latest News</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/82">
                Search and filter updates by event, video or news category.
              </p>

              <div className="mt-8 rounded-[30px] border border-white/15 bg-white/10 p-5 shadow-[0_18px_50px_rgba(0,0,0,.12)] backdrop-blur">
                <label className="relative block">
                  <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F6A623]" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search news, event or year..."
                    className="h-12 w-full rounded-2xl border border-white/20 bg-white/15 pl-11 pr-4 text-sm font-semibold text-white outline-none placeholder:text-white/55 focus:border-[#F6A623]"
                  />
                </label>

                <div className="mt-4 flex flex-wrap gap-3">
                  {typeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedType(option.value)}
                      className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] transition ${
                        selectedType === option.value
                          ? "bg-[#F6A623] text-white shadow-[0_12px_28px_rgba(246,166,35,.24)]"
                          : "border border-white/15 bg-white/10 text-white/75 hover:bg-white hover:text-[#005AAA]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {(newsList.length ? newsList : archiveItems.slice(0, 4)).map((item, index) => (
                <motion.article
                  key={`${item.title}-${item.date}`}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,.12)] transition hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,.18)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />
                  <div className="flex gap-4">
                    <div className="h-24 w-28 shrink-0 overflow-hidden rounded-2xl border border-slate-100">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#35B24A]">
                        {getTypeIcon(item.type)}
                        {getTypeLabel(item.type)} · {item.day} {item.month} {item.year}
                      </div>
                      <h3 className="line-clamp-2 text-lg font-black leading-snug text-slate-900">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{item.description}</p>
                    </div>
                  </div>

                  {item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] transition hover:text-[#35B24A]"
                    >
                      Read More <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] transition hover:text-[#35B24A]">
                      View Update <ArrowRight size={14} />
                    </button>
                  )}
                </motion.article>
              ))}
            </div>
          </div>

          {visibleItems.length === 0 && (
            <div className="mt-10 rounded-[28px] border border-white/20 bg-white/10 p-10 text-center backdrop-blur">
              <p className="text-xl font-black text-white">No update found.</p>
              <p className="mt-2 text-white/70">Try another keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      <div className="news-divider-shine relative h-24 overflow-hidden bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />

      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_52%,#fff9ed_100%)]" />
        <div className="absolute left-[-130px] top-20 -z-10 h-80 w-80 rotate-45 rounded-[64px] bg-[#005AAA]/5" />
        <div className="absolute right-[-130px] bottom-20 -z-10 h-80 w-80 rotate-12 rounded-[64px] bg-[#F6A623]/8" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="text-center"
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Visual Highlights</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Gallery</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archiveItems.map((item, index) => (
              <motion.article
                key={`${item.title}-gallery-${item.date}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className={`group news-shine relative overflow-hidden border border-white/90 bg-white/80 p-3 shadow-[0_18px_55px_rgba(15,60,110,.10)] backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,90,170,.18)] ${
                  index % 3 === 0
                    ? "rounded-[40px] rounded-br-[105px]"
                    : index % 3 === 1
                      ? "rounded-[40px] rounded-tl-[105px]"
                      : "rounded-[40px] rounded-tr-[105px]"
                }`}
              >
                <div
                  className={`relative h-72 overflow-hidden ${
                    index % 3 === 0
                      ? "rounded-[32px] rounded-br-[92px]"
                      : index % 3 === 1
                        ? "rounded-[32px] rounded-tl-[92px]"
                        : "rounded-[32px] rounded-tr-[92px]"
                  }`}
                >
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003c75]/85 via-[#005AAA]/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-2xl bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur">
                    <p className="text-2xl font-black leading-none text-[#005AAA]">{item.day}</p>
                    <p className="text-[10px] font-black uppercase text-[#F6A623]">{item.month}</p>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/18 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                      {getTypeIcon(item.type)} {getTypeLabel(item.type)}
                    </p>
                    <h3 className="line-clamp-2 text-xl font-black leading-tight text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}