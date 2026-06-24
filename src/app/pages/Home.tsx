import { useEffect, useRef, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Leaf,
  Maximize2,
  Pause,
  Play,
  ShieldCheck,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";

import damHeroImage from "@/assets/jetama-dam-hero.jpg";
import aboutImageTwo from "@/assets/jetama-about-2.jpg";
import aboutImageThree from "@/assets/jetama-about-3.jpg";
import aboutImageFour from "@/assets/jetama-about-4.jpg";
import jetamaEnergyLogo from "@/assets/LOGO-JESB.png";
import jetamaWaterLogo from "@/assets/logo-jetamawater.png";
import jetamaAlpineLogo from "@/assets/jetamaAlpine.png";
import solarLogo from "@/assets/solarpvlogo.png";
import jetamaLogo from "@/assets/jetama-wide-logo-transparent.png";

const heroImage = damHeroImage;
const blueWaterImage = aboutImageTwo;
const heroVideo = "/JETAMA-INTRO30.mp4";

const aboutCarouselImages = [
  { src: aboutImageTwo, alt: "Aerial view of JETAMA reservoir" },
  { src: aboutImageThree, alt: "JETAMA dam and intake structure" },
  { src: aboutImageFour, alt: "JETAMA water treatment plant" },
];

const facilityCards = [
  "Moyog Water Treatment Plant",
  "Telibong Water Treatment Plant",
  "Kasigui Water Treatment Plant",
  "Papar Water Treatment Plant",
  "Tamparuli Water Treatment Plant",
  "Tuaran Water Treatment Plant",
];

const subsidiaries = [
  {
    title: "Jetama Water Sdn. Bhd.",
    category: "Subsidiary",
    color: "#005AAA",
    text: "Water treatment operations and potable water service support for Sabah.",
    logo: jetamaWaterLogo,
    link: "/subsidiary/water",
  },
  {
    title: "Jetama Energy Sdn. Bhd.",
    category: "Subsidiary",
    color: "#F5A623",
    text: "Renewable energy initiatives supporting Sabah’s low-carbon direction.",
    logo: jetamaEnergyLogo,
    link: "/subsidiary/energy",
  },
  {
    title: "Solar PV Power Sdn. Bhd.",
    category: "Subsidiary",
    color: "#F9A51A",
    text: "Large scale solar photovoltaic development under Jetama Energy.",
    logo: solarLogo,
    link: "/subsidiary/solar-pv",
  },
  {
    title: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.",
    category: "Joint Venture",
    color: "#D62828",
    text: "Pipe supply, production and steel section products for Sabah.",
    logo: jetamaAlpineLogo,
    link: "/jointventure/jetama-alpine-pipe",
  },
  {
    title: "Jetama Batu Sapi Solar Sdn. Bhd.",
    category: "Joint Venture",
    color: "#F5A623",
    text: "Large scale solar development at Batu Sapi, Sandakan.",
    logo: jetamaLogo,
    link: "/jointventure/jetama-batu-sapi-solar",
  },
  {
    title: "Jetama Babagon Floating Solar Sdn. Bhd.",
    category: "Joint Venture",
    color: "#35B24A",
    text: "Floating solar PV development at Babagon Dam, Penampang.",
    logo: jetamaLogo,
    link: "/jointventure/jetama-babagon-floating-solar",
  },
];

const latestNews = [
  {
    title:
      "Jetama Terajui Solar Terapung Bernilai RM63 Juta di Sabah, Empangan Babagon Jadi Perintis",
    date: "02 Nov 2026",
    day: "02",
    month: "Nov",
    image:
      "https://sabahnews.com.my/wp-content/uploads/2026/02/489e215d-e1f6-4558-b215-fb22a56e1702-640x480.jpeg",
    excerpt:
      "Jetama Sdn Bhd mencatat sejarah apabila menerajui pelaksanaan projek solar terapung pertama di Sabah bernilai RM63 juta di Empangan Babagon.",
    link: "https://sabahnews.com.my/jetama-terajui-solar-terapung-bernilai-rm63-juta-di-sabah-empangan-babagon-jadi-perintis/",
  },
  {
    title: "JETAMA Sdn Bhd Anjur Program Penanaman Rumput Laut Dengan Kerjasama UKM",
    date: "01 Oct 2024",
    day: "01",
    month: "Oct",
    image:
      "https://www.utusanborneo.com.my/sites/default/files/images/article/20241001/img6745.jpeg",
    excerpt:
      "JETAMA organised a seaweed planting programme with UKM at Pulau Sepanggar as part of its ESG and marine sustainability efforts.",
    link: "https://www.utusanborneo.com.my/2024/10/01/jetama-sdn-bhd-anjur-program-penanaman-rumput-laut-dengan-kerjasama-ukm",
  },
  {
    title: "JETAMA Becomes Sabah FC’s Official Main Sponsor",
    date: "20 Apr 2024",
    day: "20",
    month: "Apr",
    image: "https://www.dailyexpress.com.my/uploads/news2/2024/04/Jetama.jpg",
    excerpt:
      "JETAMA replaced Sawit Kinabalu as Sabah FC’s official main sponsor for the 2024–25 season.",
    link: "https://www.dailyexpress.com.my/news/232707/jetama-becomes-sabah-fc-s-official-main-sponsor/",
  },
  {
    title: "Seawater Desalination System to Address Water Supply Issues in Sabah",
    date: "23 Oct 2024",
    day: "23",
    month: "Oct",
    image:
      "https://www.theborneopost.com/newsimages/2024/10/email172968263682820241023_114609.jpg",
    excerpt:
      "A seawater desalination system initiative was introduced to help address water supply issues in Sabah.",
    link: "https://www.theborneopost.com/2024/10/23/seawater-desalination-system-to-address-water-supply-issues-in-sabah/",
  },
];

const sortedLatestNews = [...latestNews].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const newsFallbackImage = aboutImageFour;

const handleNewsImageError = (
  event: SyntheticEvent<HTMLImageElement, Event>,
) => {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === "true") return;

  image.dataset.fallbackApplied = "true";
  image.src = newsFallbackImage;
};

const closingCards = [
  {
    icon: Droplets,
    title: "Water Services",
    text: "Supporting reliable treated water operations and essential facilities.",
    link: "/services",
  },
  {
    icon: Zap,
    title: "Renewable Energy",
    text: "Advancing sustainable energy initiatives for Sabah’s future.",
    link: "/subsidiary/energy",
  },
  {
    icon: Leaf,
    title: "Corporate Growth",
    text: "Strengthening infrastructure, partnerships and responsible development.",
    link: "/projects",
  },
];

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-6 h-57 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent via-white/80 to-white" />
      <div className="absolute left-[-5%] top-10 h-15 w-[110%] rounded-[50%] bg-white blur-2xl" />
      <div className="absolute left-[-10%] top-20 h-17 w-[120%] rounded-[50%] bg-white/95 blur-xl" />

      <svg
        className="absolute bottom-0 left-0 h-52 w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z"
          fill="rgba(255,255,255,1)"
        />
        <path
          d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z"
          fill="rgba(248,255,250,.98)"
        />
        <path
          d="M0,100 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z"
          fill="rgba(103,214,111,.55)"
        />
        <path
          d="M0,125 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z"
          fill="rgba(65,182,80,.75)"
        />
        <path
          d="M0,155 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z"
          fill="rgba(0,84,166,.78)"
        />
        <path
          d="M0,182 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z"
          fill="rgba(0,70,145,.88)"
        />
        <path
          d="M0,210 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z"
          fill="rgba(0,59,122,.96)"
        />
      </svg>

      <div className="absolute bottom-20 left-[20%] h-2 w-2 animate-ping rounded-full bg-white" />
      <div className="absolute bottom-32 left-[35%] h-3 w-3 animate-bounce rounded-full bg-[#67D66F]" />
      <div className="absolute bottom-24 left-[65%] h-2 w-2 animate-ping rounded-full bg-white" />
      <div className="absolute bottom-36 left-[80%] h-4 w-4 animate-bounce rounded-full bg-[#41B650]" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
    </div>
  );
}

export default function Home() {
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState(true);
  const [heroVideoVolume, setHeroVideoVolume] = useState(0.7);
  const [showControls, setShowControls] = useState(false);

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroVideoFrameRef = useRef<HTMLDivElement | null>(null);

  const activeNews = sortedLatestNews[activeNewsIndex];
  const sideNews = sortedLatestNews
    .filter((_, index) => index !== activeNewsIndex)
    .slice(0, 3);

  const nextNews = () => {
    setActiveNewsIndex((current) =>
      current === sortedLatestNews.length - 1 ? 0 : current + 1,
    );
  };

  const prevNews = () => {
    setActiveNewsIndex((current) =>
      current === 0 ? sortedLatestNews.length - 1 : current - 1,
    );
  };

  const toggleHeroVideo = async () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsHeroVideoPlaying(true);
      } catch {
        setIsHeroVideoPlaying(false);
      }
    } else {
      video.pause();
      setIsHeroVideoPlaying(false);
    }
  };

  const toggleHeroMute = () => {
    const video = heroVideoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsHeroVideoMuted(nextMuted);

    if (!nextMuted && video.volume === 0) {
      video.volume = 0.7;
      setHeroVideoVolume(0.7);
    }
  };

  const handleHeroVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const video = heroVideoRef.current;
    const nextVolume = Number(event.currentTarget.value);

    setHeroVideoVolume(nextVolume);

    if (!video) return;

    video.volume = nextVolume;
    video.muted = nextVolume === 0;
    setIsHeroVideoMuted(nextVolume === 0);
  };

  const openHeroFullscreen = () => {
    const target = heroVideoFrameRef.current ?? heroVideoRef.current;
    if (!target) return;

    const fullscreenTarget = target as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
      msRequestFullscreen?: () => Promise<void> | void;
    };

    if (fullscreenTarget.requestFullscreen) {
      fullscreenTarget.requestFullscreen();
      return;
    }

    if (fullscreenTarget.webkitRequestFullscreen) {
      fullscreenTarget.webkitRequestFullscreen();
      return;
    }

    fullscreenTarget.msRequestFullscreen?.();
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAboutImageIndex((current) =>
        current === aboutCarouselImages.length - 1 ? 0 : current + 1,
      );
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.volume = heroVideoVolume;
    video.muted = isHeroVideoMuted;
  }, [heroVideoVolume, isHeroVideoMuted]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const handlePlay = () => setIsHeroVideoPlaying(true);
    const handlePause = () => setIsHeroVideoPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -70px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-[#eef8fb] text-[#102f42] selection:bg-[#fbf234] selection:text-[#062a43]">
      <section className="relative overflow-hidden bg-[#052b45] px-4 pb-10 pt-32 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="JETAMA water infrastructure"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,31,51,.98),rgba(0,91,150,.88),rgba(0,168,132,.70))]" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[700px] max-w-[1500px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="scroll-reveal-left max-w-2xl pt-8 lg:pl-2">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#9effbd]">
              JETAMA SDN BHD
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              <span className="block text-[#32fc53] drop-shadow-lg">
                Redefining
              </span>
              <span className="mt-2 block text-[#2338f5] drop-shadow-lg">
                Water &
              </span>
              <span className="mt-2 block text-[#ffda0a] drop-shadow-lg">
                Energy
              </span>
            </h1>

            <div className="mt-7 h-1.5 w-32 rounded-full bg-gradient-to-r from-[#35B24A] via-[#54baff] to-[#F5A623]" />

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/86">
              Supporting reliable treated water supply, operational readiness
              and sustainable infrastructure development for communities across
              Sabah.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Reliable", "Sustainable", "Sabah"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/90 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal-right relative w-full">
            <div className="pointer-events-none absolute -inset-8 rounded-[3.8rem] bg-[#00c7a7]/20 blur-[80px]" />
            <div className="pointer-events-none absolute -right-20 top-0 h-[520px] w-[520px] rounded-full bg-[#4ade80]/20 blur-[120px]" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-[450px] w-[450px] rounded-full bg-[#008cff]/20 blur-[110px]" />

            <div
              ref={heroVideoFrameRef}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              className="relative overflow-hidden rounded-[2.8rem] border border-white/15 bg-white/10 p-4 shadow-[0_50px_140px_rgba(0,0,0,.45)] backdrop-blur"
            >
              <video
                ref={heroVideoRef}
                autoPlay
                muted={isHeroVideoMuted}
                loop
                playsInline
                preload="auto"
                controls={showControls}
                poster={aboutImageFour}
                controlsList="nodownload"
                className="block w-full min-h-[460px] rounded-[2.2rem] bg-[#052b45] object-cover lg:min-h-[560px]"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>

              <div
                className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/42 to-transparent px-4 pb-4 pt-14 transition-all duration-300 ${
                  showControls
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-6 opacity-0"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-[#041f35]/82 px-4 py-3 text-white shadow-[0_14px_40px_rgba(0,0,0,.35)] backdrop-blur-md">
                  <button
                    type="button"
                    onClick={toggleHeroVideo}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#073e63] shadow-md transition hover:scale-105 hover:bg-[#fbf234]"
                    aria-label={isHeroVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isHeroVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleHeroMute}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#073e63]"
                    aria-label={isHeroVideoMuted ? "Unmute video" : "Mute video"}
                  >
                    {isHeroVideoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <div className="flex min-w-[150px] flex-1 items-center gap-3 sm:max-w-[240px]">
                    <span className="text-[11px] font-black uppercase tracking-[0.14em] text-white/75">
                      Volume
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isHeroVideoMuted ? 0 : heroVideoVolume}
                      onChange={handleHeroVolumeChange}
                      className="h-1.5 w-full cursor-pointer accent-[#fbf234]"
                      aria-label="Video volume"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={openHeroFullscreen}
                    className="ml-auto inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#fbf234] hover:text-[#073e63]"
                    aria-label="Open video fullscreen"
                  >
                    <Maximize2 size={16} />
                    Full Screen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="grid bg-white lg:grid-cols-2">
        <div className="scroll-reveal-left relative min-h-[520px] overflow-hidden">
          {aboutCarouselImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                index === aboutImageIndex
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#062a44]/90 via-[#062a44]/25 to-transparent" />
        </div>

        <div className="flex flex-col justify-center px-4 py-20 sm:px-10 lg:px-16">
          <p className="scroll-reveal-right text-sm font-black uppercase tracking-[0.28em] text-[#00a884]">
            Our Facility
          </p>

          <h2 className="scroll-reveal-right mt-3 text-4xl font-black leading-tight tracking-[-0.04em] text-[#073e63] md:text-5xl">
            Facilities that support reliable water service delivery
          </h2>

          <p className="scroll-reveal-right mt-6 text-lg leading-9 text-slate-600">
            JETAMA’s role is built around treatment plant operations, technical
            capability, asset readiness and service responsibility. The company
            supports essential water infrastructure for communities and
            development areas.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facilityCards.map((item, index) => (
              <div
                key={item}
                className="scroll-scale flex items-center gap-3 rounded-2xl border border-[#d8f1f4] bg-gradient-to-r from-[#f4fbfd] to-white p-4 font-bold text-[#073e63] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <ShieldCheck className="text-[#00a884]" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef8fb] px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#00a884]">
              Explore JETAMA Group of Companies
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#073e63] md:text-5xl">
              Inside the JETAMA Group
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Discover JETAMA’s subsidiaries and joint venture companies
              supporting water, energy, pipe manufacturing and solar development.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="scroll-scale group relative overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white p-7 shadow-[0_22px_70px_rgba(0,44,85,0.08)] transition hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,44,85,0.15)]"
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-2"
                  style={{ backgroundColor: item.color }}
                />

                <div className="mb-7 flex h-32 items-center justify-center rounded-[1.6rem] bg-[#f8fbff] p-5 ring-1 ring-[#d8eef5]">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-24 max-w-full object-contain drop-shadow-[0_12px_28px_rgba(0,44,85,0.18)] transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div
                  className="mb-4 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>

                <h3 className="text-2xl font-black leading-tight text-[#073e63]">
                  {item.title}
                </h3>

                <p className="mt-4 min-h-[86px] text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#052b45] px-4 py-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(53,178,74,.22),transparent_32%),radial-gradient(circle_at_92%_80%,rgba(0,90,170,.22),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,31,51,.98),rgba(0,61,105,.94),rgba(0,119,104,.88))]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#35B24A]/20 blur-[90px]" />
        <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[#F5A623]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_28px_95px_rgba(0,20,45,0.35)] backdrop-blur-md lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#35B24A] via-[#005AAA] to-[#F5A623]" />

          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9effbd]">
                Latest Updates
              </p>

              <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                News & Events
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
                Stay informed with the latest developments, initiatives and
                corporate activities across the JETAMA Group.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/news"
                className="hidden items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#fbf234] hover:bg-[#fbf234] hover:text-[#073e63] md:inline-flex"
              >
                View All News
                <ArrowRight size={16} />
              </Link>

              <button
                type="button"
                aria-label="Previous news"
                onClick={prevNews}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-[#fbf234] hover:text-[#073e63]"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                aria-label="Next news"
                onClick={nextNews}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-[#fbf234] hover:text-[#073e63]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <a
              href={activeNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-h-[370px] overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#073e63] shadow-[0_24px_75px_rgba(0,12,28,0.30)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(0,12,28,0.42)]"
            >
              <img
                key={`${activeNews.title}-${activeNews.image}`}
                src={activeNews.image}
                alt={activeNews.title}
                onError={handleNewsImageError}
                className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041f35] via-[#041f35]/62 to-[#041f35]/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(53,178,74,.22),transparent_35%)]" />

              <div className="absolute left-6 top-6 rounded-xl bg-[#fbf234] px-4 py-3 text-center shadow-xl">
                <p className="text-3xl font-black leading-none text-[#073e63]">
                  {activeNews.day}
                </p>
                <p className="mt-1 text-xs font-black uppercase text-[#073e63]">
                  {activeNews.month}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                <div className="mb-4 inline-flex rounded-full bg-[#35B24A] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
                  Featured
                </div>

                <h3 className="max-w-3xl text-2xl font-black leading-tight text-white md:text-3xl">
                  {activeNews.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/82">
                  {activeNews.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#fbf234]">
                  Read Full Story
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </a>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
              {sideNews.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/10 shadow-[0_18px_55px_rgba(0,20,45,0.22)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#fbf234]/45 hover:bg-white/15 hover:shadow-[0_26px_75px_rgba(0,20,45,0.32)]"
                >
                  <div className="relative h-44 overflow-hidden bg-[#073e63]">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={handleNewsImageError}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#041f35]/70 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 rounded-xl bg-[#fbf234] px-3 py-2 text-center shadow-lg">
                      <p className="text-xl font-black leading-none text-[#073e63]">
                        {item.day}
                      </p>
                      <p className="mt-1 text-[10px] font-black uppercase text-[#073e63]">
                        {item.month}
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.1em] text-[#9effbd]">
                      <CalendarDays size={13} />
                      {item.date}
                    </div>

                    <h3 className="line-clamp-3 text-lg font-black leading-snug text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
                      {item.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#fbf234]">
                      Read More
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {sortedLatestNews.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show news ${index + 1}`}
                onClick={() => setActiveNewsIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeNewsIndex === index
                    ? "w-9 bg-[#fbf234]"
                    : "w-2.5 bg-white/35 hover:bg-[#9effbd]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>


      <section
        className="relative overflow-hidden bg-cover bg-center px-4 py-16 text-white sm:px-6 lg:px-8"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(2,31,51,.94), rgba(0,74,128,.88), rgba(0,128,112,.72)), url(${blueWaterImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(65,182,80,.22),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(245,166,35,.20),transparent_36%)]" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-6xl">
          <div className="scroll-reveal rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-[0_25px_80px_rgba(0,0,0,.22)] backdrop-blur-md md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9effbd]">
                  Moving Forward
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] md:text-4xl lg:text-[2.8rem]">
                  Strengthening Water Services &
                  <span className="block text-[#fbf234]">
                    Sustainable Energy Growth
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
                  JETAMA continues to support Sabah’s infrastructure needs
                  through reliable water operations, renewable energy initiatives
                  and strategic corporate development.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-3 rounded-full bg-[#fbf234] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#073e63] shadow-lg transition hover:-translate-y-1 hover:bg-white"
                  >
                    Explore Projects
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#073e63]"
                  >
                    Contact Us
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {closingCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <Link
                      key={card.title}
                      to={card.link}
                      className="scroll-scale group flex gap-4 rounded-2xl border border-white/15 bg-white/12 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#073e63]"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#005AAA] shadow-md transition group-hover:bg-[#fbf234]">
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black">{card.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/75 transition group-hover:text-slate-600">
                          {card.text}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}