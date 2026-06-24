import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Bell,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Factory,
  Leaf,
  Mail,
  Maximize2,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
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
const heroVideo = "/JETAMA-INTRO30.mp4";
const newsFallbackImage = aboutImageFour;

const aboutCarouselImages = [
  { src: aboutImageTwo, alt: "Aerial view of JETAMA reservoir" },
  { src: aboutImageThree, alt: "JETAMA dam and intake structure" },
  { src: aboutImageFour, alt: "JETAMA water treatment plant" },
];

const groupCards = [
  {
    title: "Jetama Water",
    label: "Water Operations",
    text: "Reliable water treatment and supply operations for communities across Sabah.",
    icon: Droplets,
    logo: jetamaWaterLogo,
    color: "#005AAA",
    bg: "from-[#eaf7ff] via-white to-[#f5fbff]",
    link: "/subsidiary/water",
  },
  {
    title: "Jetama Energy",
    label: "Energy Growth",
    text: "Driving renewable energy initiatives for a sustainable tomorrow.",
    icon: Zap,
    logo: jetamaEnergyLogo,
    color: "#F5A623",
    bg: "from-[#fff7e9] via-white to-[#fffaf0]",
    link: "/subsidiary/energy",
  },
  {
    title: "Solar PV Power",
    label: "Solar Future",
    text: "Developing large scale solar solutions for Sabah’s clean energy future.",
    icon: Leaf,
    logo: solarLogo,
    color: "#35B24A",
    bg: "from-[#edfff3] via-white to-[#f7fffb]",
    link: "/subsidiary/solar-pv",
  },
  {
    title: "Joint Ventures",
    label: "Partnerships",
    text: "Strategic partnerships creating stronger infrastructure and shared value.",
    icon: Building2,
    logo: jetamaAlpineLogo,
    color: "#0FAFA3",
    bg: "from-[#ecfffc] via-white to-[#f8ffff]",
    link: "/jointventure",
  },
];

const facilityCards = [
  "Moyog Water Treatment Plant",
  "Telibong Water Treatment Plant",
  "Kasigui Water Treatment Plant",
  "Papar Water Treatment Plant",
  "Tamparuli Water Treatment Plant",
  "Tuaran Water Treatment Plant",
];

const notices = [
  {
    title: "Jetama Babagon Floating Solar Project Update",
    date: "02 May 2025",
  },
  {
    title: "Corporate Sustainability Initiatives Update",
    date: "28 Apr 2025",
  },
  {
    title: "Career Opportunities at Jetama Group",
    date: "25 Apr 2025",
  },
  {
    title: "Water Supply Maintenance Advisory",
    date: "18 Apr 2025",
  },
];

const quickLinks = [
  { title: "About Jetama", icon: Building2, link: "/about" },
  { title: "Subsidiaries", icon: Factory, link: "/subsidiary" },
  { title: "Projects", icon: Sparkles, link: "/projects" },
  { title: "Careers", icon: Briefcase, link: "/careers" },
  { title: "Sustainability", icon: Leaf, link: "/sustainability" },
  { title: "Contact Us", icon: Mail, link: "/contact" },
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

const handleNewsImageError = (
  event: SyntheticEvent<HTMLImageElement, Event>,
) => {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = newsFallbackImage;
};

function CleanLayerDivider({ flipped = false }: { flipped?: boolean }) {
  return (
    <div
      className={`pointer-events-none relative z-20 h-32 overflow-hidden bg-transparent ${
        flipped ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-x-0 bottom-0 h-full w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <path
          className="animate-[jetamaLayerFloat_8s_ease-in-out_infinite]"
          d="M0,70 C220,125 390,10 650,72 C875,125 1060,55 1440,86 L1440,180 L0,180 Z"
          fill="rgba(255,255,255,0.96)"
        />
        <path
          className="animate-[jetamaLayerFloat_10s_ease-in-out_infinite_reverse]"
          d="M0,104 C260,42 470,145 720,92 C980,35 1170,132 1440,74 L1440,180 L0,180 Z"
          fill="rgba(239,251,255,0.92)"
        />
        <path
          className="animate-[jetamaLayerFloat_12s_ease-in-out_infinite]"
          d="M0,136 C250,82 450,155 710,124 C980,92 1210,152 1440,116 L1440,180 L0,180 Z"
          fill="rgba(236,255,242,0.95)"
        />
      </svg>

      <div className="absolute left-[8%] top-14 h-3 w-10 rounded-full bg-[#35B24A]/35 blur-[1px] animate-[leafDrift_9s_ease-in-out_infinite]" />
      <div className="absolute right-[12%] top-20 h-3 w-12 rounded-full bg-[#005AAA]/20 blur-[1px] animate-[leafDrift_11s_ease-in-out_infinite_reverse]" />
      <div className="absolute left-[48%] top-7 h-9 w-9 rounded-full border border-[#35B24A]/25 bg-white/75 shadow-[0_10px_35px_rgba(53,178,74,.18)] animate-bounce" />
    </div>
  );
}

function ScenicLayer() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 overflow-hidden" aria-hidden="true">
      <svg className="absolute bottom-0 h-full w-full" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path d="M0 150 C210 88 320 138 485 100 C625 68 805 125 960 85 C1140 40 1265 92 1440 52 L1440 260 L0 260 Z" fill="#dff3f5" />
        <path d="M0 174 C180 112 335 160 515 122 C690 82 825 155 1010 108 C1195 62 1280 128 1440 92 L1440 260 L0 260 Z" fill="#bce4df" />
        <path d="M0 198 C240 130 420 210 640 152 C860 98 1020 205 1225 138 C1325 105 1385 114 1440 112 L1440 260 L0 260 Z" fill="#65b987" />
        <path d="M0 224 C215 172 380 230 575 190 C770 150 930 226 1135 180 C1275 150 1360 170 1440 148 L1440 260 L0 260 Z" fill="#0b3a5f" />
      </svg>
      <div className="absolute bottom-20 left-[15%] h-1 w-5 rounded-full bg-[#0b3a5f]/45 animate-[birdFloat_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-28 left-[22%] h-1 w-4 rounded-full bg-[#0b3a5f]/35 animate-[birdFloat_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-36 right-[24%] h-1 w-5 rounded-full bg-[#0b3a5f]/45 animate-[birdFloat_7s_ease-in-out_infinite_reverse]" />
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
  const [scrollY, setScrollY] = useState(0);

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroVideoFrameRef = useRef<HTMLDivElement | null>(null);

  const activeNews = sortedLatestNews[activeNewsIndex];

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
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAboutImageIndex((current) =>
        current === aboutCarouselImages.length - 1 ? 0 : current + 1,
      );
    }, 3600);

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
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale, .scroll-card-3d",
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
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-sabah-clean overflow-hidden bg-white text-[#102f42] selection:bg-[#fbf234] selection:text-[#062a43]">
      <style>{`
        .home-sabah-clean .scroll-reveal,
        .home-sabah-clean .scroll-reveal-left,
        .home-sabah-clean .scroll-reveal-right,
        .home-sabah-clean .scroll-scale,
        .home-sabah-clean .scroll-card-3d {
          opacity: 0;
          transform: translate3d(0, 42px, 0);
          transition: opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1);
          will-change: opacity, transform;
        }
        .home-sabah-clean .scroll-reveal-left { transform: translate3d(-46px, 26px, 0); }
        .home-sabah-clean .scroll-reveal-right { transform: translate3d(46px, 26px, 0); }
        .home-sabah-clean .scroll-scale { transform: translate3d(0, 40px, 0) scale(.94); }
        .home-sabah-clean .scroll-card-3d { transform: perspective(1100px) rotateX(13deg) translate3d(0, 62px, 0) scale(.94); }
        .home-sabah-clean .scroll-visible {
          opacity: 1;
          transform: perspective(1100px) rotateX(0deg) translate3d(0, 0, 0) scale(1);
        }
        .home-sabah-clean .sabah-card {
          transform-style: preserve-3d;
          transform: perspective(1200px) rotateX(0deg) rotateY(0deg);
        }
        .home-sabah-clean .sabah-card:hover {
          transform: perspective(1200px) rotateX(4deg) rotateY(-5deg) translateY(-12px);
        }
        .home-sabah-clean .shine::before {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-135%) skewX(-18deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.65), transparent);
          transition: transform .85s ease;
        }
        .home-sabah-clean .shine:hover::before { transform: translateX(135%) skewX(-18deg); }
        @keyframes jetamaLayerFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-28px, 10px, 0); }
        }
        @keyframes leafDrift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: .8; }
          50% { transform: translate3d(32px, -12px, 0) rotate(12deg); opacity: 1; }
        }
        @keyframes birdFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(18px, -9px, 0); }
        }
        @keyframes softPulse {
          0%, 100% { transform: scale(1); opacity: .75; }
          50% { transform: scale(1.08); opacity: 1; }
        }
      `}</style>

      <section className="relative min-h-[96vh] overflow-hidden bg-[#061f35] px-4 pb-0 pt-28 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="JETAMA dam background"
            className="h-full w-full object-cover opacity-70"
            style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0) scale(1.08)` }}
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroImage}
            className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
            style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0) scale(1.05)` }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,23,39,.94)_0%,rgba(3,51,82,.72)_47%,rgba(4,74,65,.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,.28),transparent_24%),radial-gradient(circle_at_20%_74%,rgba(53,178,74,.20),transparent_28%)]" />
        </div>

        <div
          className="pointer-events-none absolute left-10 top-28 h-28 w-28 rounded-full bg-[#8fe36d]/25 blur-3xl"
          style={{ transform: `translate3d(0, ${scrollY * -0.18}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute right-16 top-40 h-52 w-52 rounded-full bg-[#6ed5ff]/20 blur-[70px]"
          style={{ transform: `translate3d(0, ${scrollY * -0.12}px, 0)` }}
        />
        <div className="pointer-events-none absolute right-[9%] top-[22%] h-3 w-3 rounded-full bg-[#8cec4f] shadow-[0_0_28px_rgba(140,236,79,.9)] animate-[softPulse_2.4s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute right-[7.2%] top-[27%] h-1.5 w-1.5 rounded-full bg-white/70" />
        <div className="pointer-events-none absolute right-[7.5%] top-[31%] h-44 w-px bg-white/45" />

        <div className="relative z-10 mx-auto grid min-h-[720px] max-w-[1500px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="scroll-reveal-left max-w-3xl pt-10">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.38em] text-[#c6ff96]">
              JETAMA SDN BHD
            </p>
            <div className="mb-7 h-1 w-20 rounded-full bg-[#8cec4f]" />

            <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.07em] sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-white drop-shadow-xl">Redefining</span>
              <span className="mt-2 block">
                <span className="text-[#4db2ff]">Water</span>
                <span className="text-white"> & </span>
                <span className="text-[#8ce76b]">Energy</span>
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/88 md:text-xl">
              Delivering reliable water services, sustainable energy initiatives
              and long-term value for Sabah.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="shine relative inline-flex overflow-hidden rounded-full bg-[#0078ff] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_16px_40px_rgba(0,120,255,.35)] transition hover:-translate-y-1 hover:bg-[#005AAA]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Jetama <ArrowRight size={18} />
                </span>
              </Link>

              <button
                type="button"
                onClick={toggleHeroVideo}
                className="inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#073e63]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10">
                  {isHeroVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
                </span>
                Our Story
              </button>
            </div>
          </div>

          <div className="scroll-reveal-right relative hidden lg:block">
            <div
              ref={heroVideoFrameRef}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              className="sabah-card relative ml-auto max-w-[660px] overflow-hidden rounded-[2.8rem] border border-white/20 bg-white/12 p-3 shadow-[0_45px_130px_rgba(0,0,0,.42)] backdrop-blur-xl transition duration-700"
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
                className="block h-[500px] w-full rounded-[2.35rem] bg-[#052b45] object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>

              <div className="absolute left-7 top-7 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white shadow-xl backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">Portal</p>
                <p className="mt-1 text-lg font-black">Water & Energy</p>
              </div>

              <div
                className={`absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-14 transition-all duration-300 ${
                  showControls
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-6 opacity-0"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/15 bg-[#041f35]/85 px-4 py-3 text-white shadow-[0_14px_40px_rgba(0,0,0,.35)] backdrop-blur-md">
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

                  <div className="flex min-w-[150px] flex-1 items-center gap-3 sm:max-w-[230px]">
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

        <div className="absolute bottom-11 left-1/2 z-30 -translate-x-1/2">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.88, behavior: "smooth" })}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-[#77d35d]/50 bg-white text-[#35B24A] shadow-[0_14px_45px_rgba(0,0,0,.22)] transition hover:-translate-y-1 hover:bg-[#fbf234] hover:text-[#073e63]"
            aria-label="Scroll down"
          >
            <ChevronDown size={25} />
          </button>
        </div>

        <CleanLayerDivider />
      </section>

      <section className="relative bg-white px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(53,178,74,.09),transparent_26%),radial-gradient(circle_at_90%_18%,rgba(0,90,170,.08),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#35B24A]">
              Inside Jetama Group
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] text-[#092b49] md:text-5xl">
              Water. Energy. Future.
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#35B24A]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {groupCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className={`scroll-card-3d sabah-card shine group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br ${item.bg} p-5 shadow-[0_20px_60px_rgba(4,43,73,.10)] transition duration-700 hover:shadow-[0_34px_90px_rgba(4,43,73,.18)]`}
                  style={{ transitionDelay: `${index * 110}ms` }}
                >
                  <div className="relative h-28 overflow-hidden rounded-[1.5rem] bg-white shadow-inner ring-1 ring-slate-100">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundColor: item.color }}
                    />
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="absolute inset-0 m-auto max-h-20 max-w-[78%] object-contain drop-shadow-[0_12px_24px_rgba(0,44,85,.18)] transition duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  <div className="relative z-10 mt-6">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em]" style={{ color: item.color }}>
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-[#092b49]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#005AAA] shadow-md transition group-hover:translate-x-1 group-hover:bg-[#fbf234]">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbff] px-4 py-20 sm:px-6 lg:px-8">
        <CleanLayerDivider flipped />
        <div className="pointer-events-none absolute inset-x-0 top-10 h-52 bg-[linear-gradient(180deg,rgba(255,255,255,.95),rgba(247,251,255,0))]" />
        <div className="pointer-events-none absolute -left-16 top-28 h-72 w-72 rounded-full bg-[#35B24A]/10 blur-[70px]" />
        <div className="pointer-events-none absolute -right-14 bottom-16 h-72 w-72 rounded-full bg-[#005AAA]/10 blur-[70px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_.92fr]">
          <div className="scroll-reveal-left overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#2b6f31] via-[#3f8239] to-[#0d4d3d] p-7 text-white shadow-[0_26px_85px_rgba(20,83,45,.20)]">
            <div className="absolute left-0 top-0 h-full w-52 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,.18),transparent_55%)]" />
            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Bell className="text-[#d8ff93]" size={22} />
                <h3 className="text-xl font-black uppercase tracking-[0.14em]">Noticeboard</h3>
              </div>
              <Link to="/news" className="text-sm font-bold text-white/90 hover:text-[#fbf234]">
                View All
              </Link>
            </div>

            <div className="relative mt-6 space-y-3">
              {notices.map((notice, index) => (
                <Link
                  key={notice.title}
                  to="/news"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#073e63]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#d8ff93] group-hover:text-[#35B24A]">›</span>
                    {notice.title}
                  </span>
                  <span className="shrink-0 text-xs text-white/72 group-hover:text-slate-500">
                    {notice.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="scroll-reveal-right rounded-[2.2rem] border border-slate-200 bg-white/85 p-7 shadow-[0_26px_85px_rgba(4,43,73,.10)] backdrop-blur">
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#35B24A]" size={22} />
              <h3 className="text-xl font-black uppercase tracking-[0.14em] text-[#092b49]">Quick Links</h3>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="scroll-scale group rounded-2xl border border-slate-100 bg-[#f8fbff] p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#9adf8c] hover:bg-white hover:shadow-lg"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#005AAA] shadow-sm transition group-hover:bg-[#35B24A] group-hover:text-white">
                      <Icon size={21} />
                    </div>
                    <p className="mt-3 text-sm font-bold text-[#092b49]">{item.title}</p>
                  </Link>
                );
              })}
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
                index === aboutImageIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062a44]/88 via-[#062a44]/20 to-transparent" />
          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/15 bg-white/12 p-5 text-white backdrop-blur-md">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c6ff96]">Our Facility</p>
            <p className="mt-2 text-2xl font-black">Operational Readiness</p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-20 sm:px-10 lg:px-16">
          <p className="scroll-reveal-right text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
            Water Infrastructure
          </p>
          <h2 className="scroll-reveal-right mt-3 text-4xl font-black leading-tight tracking-[-0.04em] text-[#092b49] md:text-5xl">
            Facilities that support reliable water service delivery
          </h2>
          <p className="scroll-reveal-right mt-6 text-lg leading-9 text-slate-600">
            JETAMA’s role is built around treatment plant operations, technical
            capability, asset readiness and service responsibility for Sabah.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {facilityCards.map((item, index) => (
              <div
                key={item}
                className="scroll-scale flex items-center gap-3 rounded-2xl border border-[#d8f1f4] bg-gradient-to-r from-[#f4fbfd] to-white p-4 font-bold text-[#073e63] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <ShieldCheck className="text-[#35B24A]" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8fbff] px-4 pb-36 pt-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
                Latest Updates
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#092b49] md:text-5xl">
                Latest News & Events
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-[#35B24A]" />
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/news"
                className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#073e63] shadow-sm transition hover:-translate-y-1 hover:border-[#35B24A] hover:text-[#35B24A] md:inline-flex"
              >
                View All News <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                aria-label="Previous news"
                onClick={prevNews}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#073e63] shadow-sm transition hover:-translate-y-1 hover:bg-[#fbf234]"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next news"
                onClick={nextNews}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#073e63] shadow-sm transition hover:-translate-y-1 hover:bg-[#fbf234]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {sortedLatestNews.map((item, index) => {
              const isActive = index === activeNewsIndex;
              return (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`scroll-card-3d sabah-card group overflow-hidden rounded-[1.8rem] border bg-white shadow-[0_18px_55px_rgba(4,43,73,.09)] transition duration-700 hover:shadow-[0_30px_85px_rgba(4,43,73,.15)] ${
                    isActive ? "border-[#35B24A] ring-4 ring-[#35B24A]/10" : "border-slate-200"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden bg-[#073e63]">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={handleNewsImageError}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-5 top-5 rounded-xl bg-white px-4 py-3 text-center shadow-xl">
                      <p className="text-2xl font-black leading-none text-[#073e63]">{item.day}</p>
                      <p className="mt-1 text-xs font-black uppercase text-[#073e63]">{item.month}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.1em] text-[#35B24A]">
                      <CalendarDays size={13} />
                      {item.date}
                    </div>
                    <h3 className="line-clamp-3 text-lg font-black leading-snug text-[#092b49]">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {item.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA]">
                      Read More <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <ScenicLayer />
        <div className="relative z-10 mx-auto mt-28 max-w-6xl text-center">
          <h2 className="scroll-reveal text-2xl font-black text-white drop-shadow md:text-3xl">
            Building a Sustainable Tomorrow for Sabah 🌿
          </h2>
        </div>
      </section>
    </div>
  );
}
