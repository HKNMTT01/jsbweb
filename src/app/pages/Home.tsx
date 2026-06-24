import { useEffect, useRef, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Bell,
  Building2,
  CalendarDays,
  ChevronDown,
  Droplets,
  Leaf,
  Mail,
  Maximize2,
  Pause,
  Play,
  ShieldCheck,
  UserRound,
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
const blueWaterImage = aboutImageTwo;

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
    title: "Jetama Water",
    fullTitle: "Jetama Water Sdn. Bhd.",
    category: "Water Operations",
    color: "#005AAA",
    text: "Reliable water treatment and supply operations for communities across Sabah.",
    logo: jetamaWaterLogo,
    link: "/subsidiary/water",
    icon: Droplets,
    image: aboutImageFour,
  },
  {
    title: "Jetama Energy",
    fullTitle: "Jetama Energy Sdn. Bhd.",
    category: "Energy Growth",
    color: "#F5A623",
    text: "Driving renewable energy initiatives for a sustainable tomorrow.",
    logo: jetamaEnergyLogo,
    link: "/subsidiary/energy",
    icon: Zap,
    image: aboutImageThree,
  },
  {
    title: "Solar PV Power",
    fullTitle: "Solar PV Power Sdn. Bhd.",
    category: "Solar Development",
    color: "#35B24A",
    text: "Developing large scale solar solutions for Sabah's clean energy future.",
    logo: solarLogo,
    link: "/subsidiary/solar-pv",
    icon: Leaf,
    image: aboutImageTwo,
  },
  {
    title: "Joint Ventures",
    fullTitle: "Jetama Group Joint Ventures",
    category: "Strategic Partners",
    color: "#00A884",
    text: "Strategic partnerships creating stronger infrastructure and shared value.",
    logo: jetamaAlpineLogo,
    link: "/jointventure",
    icon: Building2,
    image: damHeroImage,
  },
];

const noticeboard = [
  { title: "Jetama Babagon Floating Solar Project Update", date: "02 May 2025" },
  { title: "Corporate Sustainability Initiatives Update", date: "28 Apr 2025" },
  { title: "Career Opportunities at Jetama Group", date: "25 Apr 2025" },
  { title: "Water Supply Maintenance Advisory", date: "18 Apr 2025" },
];

const quickLinks = [
  { title: "About Jetama", icon: ShieldCheck, link: "/about" },
  { title: "Subsidiaries", icon: Building2, link: "/subsidiary" },
  { title: "Projects", icon: Leaf, link: "/projects" },
  { title: "Careers", icon: UserRound, link: "/careers" },
  { title: "Sustainability", icon: Droplets, link: "/sustainability" },
  { title: "Contact Us", icon: Mail, link: "/contact" },
];

const latestNews = [
  {
    title: "Jetama Babagon Floating Solar Project Update",
    date: "02 May 2025",
    day: "02",
    month: "May",
    image: aboutImageTwo,
    excerpt: "Latest progress on the floating solar initiative at Babagon Dam.",
    link: "/news",
  },
  {
    title: "Corporate Sustainability Initiatives",
    date: "28 Apr 2025",
    day: "28",
    month: "Apr",
    image: "https://www.utusanborneo.com.my/sites/default/files/images/article/20241001/img6745.jpeg",
    excerpt: "Our continuous commitment towards a sustainable and greener future.",
    link: "/sustainability",
  },
  {
    title: "Career Opportunities at Jetama Group",
    date: "25 Apr 2025",
    day: "25",
    month: "Apr",
    image: aboutImageThree,
    excerpt: "Explore exciting career paths and grow with us.",
    link: "/careers",
  },
  {
    title: "Water Supply Maintenance Advisory",
    date: "18 Apr 2025",
    day: "18",
    month: "Apr",
    image: aboutImageFour,
    excerpt: "Scheduled maintenance to ensure reliable water supply.",
    link: "/news",
  },
];

const newsFallbackImage = aboutImageFour;

const handleNewsImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = newsFallbackImage;
};

function ScrollAnimationStyles() {
  return (
    <style>{`
      @keyframes jetamaFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(0,-18px,0) rotate(2deg); }
      }
      @keyframes jetamaDrift {
        0% { transform: translateX(-8%) translateY(0); }
        50% { transform: translateX(4%) translateY(-12px); }
        100% { transform: translateX(-8%) translateY(0); }
      }
      @keyframes jetamaPulseLine {
        0%, 100% { opacity: .38; stroke-dashoffset: 260; }
        50% { opacity: .9; stroke-dashoffset: 0; }
      }
      @keyframes jetamaGlowDot {
        0%, 100% { transform: scale(.8); opacity: .35; }
        50% { transform: scale(1.35); opacity: 1; }
      }
      @keyframes jetamaShine {
        0% { transform: translateX(-120%) skewX(-20deg); }
        100% { transform: translateX(220%) skewX(-20deg); }
      }
      .scroll-reveal,
      .scroll-reveal-left,
      .scroll-reveal-right,
      .scroll-scale,
      .scroll-flip {
        opacity: 0;
        transition: opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1), filter .9s ease;
        will-change: opacity, transform;
      }
      .scroll-reveal { transform: translateY(46px); }
      .scroll-reveal-left { transform: translateX(-60px); }
      .scroll-reveal-right { transform: translateX(60px); }
      .scroll-scale { transform: translateY(35px) scale(.92); }
      .scroll-flip { transform: perspective(900px) rotateX(16deg) translateY(46px); filter: blur(4px); }
      .scroll-visible {
        opacity: 1;
        transform: translate3d(0,0,0) scale(1) rotateX(0deg);
        filter: blur(0);
      }
      .geo-card {
        transform-style: preserve-3d;
      }
      .geo-card:hover .geo-card-inner {
        transform: translateY(-12px) rotateX(4deg) rotateY(-4deg);
      }
      .geo-card-inner {
        transition: transform .55s cubic-bezier(.2,.7,.2,1), box-shadow .55s ease;
        transform-style: preserve-3d;
      }
      .shine::after {
        content: "";
        position: absolute;
        inset: 0;
        width: 42%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
        animation: jetamaShine 5.5s ease-in-out infinite;
        pointer-events: none;
      }
      .geo-line {
        stroke-dasharray: 260;
        animation: jetamaPulseLine 7s ease-in-out infinite;
      }
      .geo-dot {
        transform-box: fill-box;
        transform-origin: center;
        animation: jetamaGlowDot 2.8s ease-in-out infinite;
      }
      .float-slow { animation: jetamaFloat 7s ease-in-out infinite; }
      .float-medium { animation: jetamaFloat 5.5s ease-in-out infinite; }
      .drift { animation: jetamaDrift 10s ease-in-out infinite; }

      .geo-drift-a { animation: jetamaGeoSlide 9s ease-in-out infinite; transform-origin: center; }
      .geo-drift-b { animation: jetamaGeoSlide 11s ease-in-out infinite reverse; transform-origin: center; }
      .geo-drift-c { animation: jetamaGeoSlide 13s ease-in-out infinite; transform-origin: center; }
      .geo-float-a { animation: jetamaGeoFloat 7s ease-in-out infinite; transform-origin: center; }
      .geo-float-b { animation: jetamaGeoFloat 8s ease-in-out infinite reverse; transform-origin: center; }
      .geo-float-c { animation: jetamaGeoFloat 9s ease-in-out infinite; transform-origin: center; }
      .geo-line-soft { animation-delay: 1.2s; }
      @keyframes jetamaGeoSlide {
        0%, 100% { transform: translateX(0) translateY(0); }
        50% { transform: translateX(-26px) translateY(8px); }
      }
      @keyframes jetamaGeoFloat {
        0%, 100% { transform: translateY(0) scale(1); opacity: .9; }
        50% { transform: translateY(-12px) scale(1.035); opacity: 1; }
      }
    `}</style>
  );
}

function GeometricDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`pointer-events-none relative left-1/2 h-[150px] w-screen -translate-x-1/2 overflow-hidden bg-transparent ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="geoBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#003B7A" stopOpacity="0.98" />
            <stop offset="52%" stopColor="#005AAA" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#003B7A" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="geoGreen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#35B24A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7ED957" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="geoOrange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#FFD166" stopOpacity="0.86" />
          </linearGradient>
        </defs>

        <polygon className="geo-drift-a" points="0,92 155,118 330,82 510,126 720,80 905,120 1115,74 1270,116 1440,84 1440,180 0,180" fill="url(#geoBlue)" />
        <polygon className="geo-drift-b" points="0,118 220,78 405,124 630,88 835,128 1050,82 1240,126 1440,94 1440,180 0,180" fill="url(#geoGreen)" />
        <polygon className="geo-drift-c" points="0,134 180,106 355,140 590,102 770,136 980,98 1190,142 1440,112 1440,180 0,180" fill="url(#geoBlue)" opacity="0.9" />
        <polygon className="geo-float-a" points="0,84 160,108 285,92 420,112 300,142 110,130" fill="url(#geoGreen)" />
        <polygon className="geo-float-b" points="960,100 1125,72 1300,108 1440,90 1440,132 1210,138" fill="url(#geoOrange)" />
        <polygon className="geo-float-c" points="260,118 390,82 555,116 705,94 620,138 420,146" fill="#005AAA" opacity="0.9" />

        <polyline className="geo-line" points="20,118 155,108 285,126 420,96 600,128 780,98 960,126 1135,88 1290,122 1420,96" fill="none" stroke="rgba(255,255,255,.78)" strokeWidth="1.35" />
        <polyline className="geo-line geo-line-soft" points="0,142 205,126 390,146 590,118 790,144 1020,116 1210,140 1440,118" fill="none" stroke="rgba(255,255,255,.32)" strokeWidth="1" />
        <circle className="geo-dot" cx="155" cy="108" r="5" fill="#35B24A" />
        <circle className="geo-dot" cx="420" cy="96" r="4" fill="#00AEEF" />
        <circle className="geo-dot" cx="780" cy="98" r="5" fill="#F5A623" />
        <circle className="geo-dot" cx="1135" cy="88" r="5" fill="#35B24A" />
        <circle className="geo-dot" cx="1290" cy="122" r="3.5" fill="#00AEEF" />
      </svg>
    </div>
  );
}

function FloatingGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="float-slow absolute left-[4%] top-[72%] h-4 w-4 rounded-full bg-[#35B24A] shadow-[0_0_25px_rgba(53,178,74,.8)]" />
      <div className="float-medium absolute right-[9%] top-[30%] h-3 w-3 rounded-full bg-[#80EA6E] shadow-[0_0_20px_rgba(128,234,110,.8)]" />
      <div className="float-slow absolute right-[16%] bottom-[24%] h-2 w-2 rounded-full bg-white/90" />
      <div className="float-medium absolute left-[46%] bottom-[14%] h-8 w-8 rounded-full bg-white/70 blur-[1px]" />
      <svg className="absolute bottom-0 left-0 h-[46%] w-full opacity-80" viewBox="0 0 1440 340" preserveAspectRatio="none">
        <polyline className="geo-line" points="30,230 235,265 450,208 640,278 820,196 1040,256 1260,160 1410,260" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.2" />
        <polyline className="geo-line" points="80,260 235,265 450,208 640,278 820,196 1040,256 1260,160" fill="none" stroke="rgba(53,178,74,.48)" strokeWidth="1" />
        <circle className="geo-dot" cx="235" cy="265" r="5" fill="#35B24A" />
        <circle className="geo-dot" cx="450" cy="208" r="4" fill="#00AEEF" />
        <circle className="geo-dot" cx="820" cy="196" r="5" fill="#F5A623" />
        <circle className="geo-dot" cx="1260" cy="160" r="5" fill="#35B24A" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState(true);
  const [heroVideoVolume, setHeroVideoVolume] = useState(0.7);
  const [showControls, setShowControls] = useState(false);

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroVideoFrameRef = useRef<HTMLDivElement | null>(null);

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
    if (fullscreenTarget.requestFullscreen) return fullscreenTarget.requestFullscreen();
    if (fullscreenTarget.webkitRequestFullscreen) return fullscreenTarget.webkitRequestFullscreen();
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
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale, .scroll-flip",
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-white text-[#08253d] selection:bg-[#fbf234] selection:text-[#062a43]">
      <ScrollAnimationStyles />

      <section className="relative min-h-[860px] overflow-hidden bg-[#052b45] px-4 pb-0 pt-28 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroImage}
            className="h-full w-full object-cover opacity-60"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <img src={heroImage} alt="JETAMA dam" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(3,22,41,.96)_0%,rgba(4,52,83,.88)_38%,rgba(0,90,170,.48)_68%,rgba(53,178,74,.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,.35),transparent_24%),radial-gradient(circle_at_42%_74%,rgba(53,178,74,.20),transparent_30%)]" />
        </div>

        <FloatingGeometry />

        <div className="relative mx-auto grid min-h-[690px] max-w-[1500px] items-center gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div className="scroll-reveal-left max-w-2xl pt-8 lg:pl-2">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.38em] text-[#9effbd]">
              JETAMA SDN BHD
            </p>
            <div className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#35B24A] via-[#00AEEF] to-[#F5A623]" />

            <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.065em] sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-white drop-shadow-lg">Redefining</span>
              <span className="mt-2 block text-[#1296ff] drop-shadow-lg">Water &</span>
              <span className="mt-2 block text-[#79de58] drop-shadow-lg">Energy</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/88">
              Delivering reliable water services, sustainable energy initiatives
              and long-term value for Sabah.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 rounded-full bg-[#0786ff] px-8 py-4 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(7,134,255,.34)] transition hover:-translate-y-1 hover:bg-[#35B24A]"
              >
                Explore Jetama
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={toggleHeroVideo}
                className="group inline-flex items-center gap-4 rounded-full border border-white/35 bg-white/10 px-4 py-3 pr-6 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white hover:text-[#073e63]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 transition group-hover:border-[#35B24A] group-hover:bg-[#35B24A] group-hover:text-white">
                  {isHeroVideoPlaying ? <Pause size={17} /> : <Play size={17} />}
                </span>
                Our Story
              </button>
            </div>
          </div>

          <div className="scroll-reveal-right relative hidden lg:block">
            <div className="absolute -inset-12 rounded-[4rem] bg-[#35B24A]/10 blur-[90px]" />
            <div
              ref={heroVideoFrameRef}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              className="shine relative overflow-hidden rounded-[2.5rem] border border-white/25 bg-white/12 p-4 shadow-[0_45px_120px_rgba(0,0,0,.42)] backdrop-blur-md"
            >
              <div className="absolute left-8 top-8 z-20 rounded-2xl border border-white/20 bg-white/18 px-6 py-5 shadow-xl backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-[0.32em] text-white/75">Portal</p>
                <p className="mt-2 text-xl font-black text-white">Water & Energy</p>
              </div>

              <video
                ref={heroVideoRef}
                autoPlay
                muted={isHeroVideoMuted}
                loop
                playsInline
                preload="auto"
                poster={aboutImageFour}
                controls={false}
                controlsList="nodownload"
                className="block h-[510px] w-full rounded-[1.9rem] bg-[#052b45] object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>

              <div className="absolute inset-x-4 bottom-4 rounded-b-[1.9rem] bg-gradient-to-t from-black/80 to-transparent px-7 pb-7 pt-28">
                <p className="text-center text-lg font-semibold leading-7 text-white/92">
                  Kota Kinabalu and the surrounding water supply areas of Tuaran,
                  Penampang and Papar.
                </p>
              </div>

              <div className={`absolute inset-x-5 bottom-5 z-30 transition-all duration-300 ${showControls ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#041f35]/88 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                  <button type="button" onClick={toggleHeroVideo} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#073e63] transition hover:bg-[#fbf234]">
                    {isHeroVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <button type="button" onClick={toggleHeroMute} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white hover:text-[#073e63]">
                    {isHeroVideoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <input type="range" min="0" max="1" step="0.05" value={isHeroVideoMuted ? 0 : heroVideoVolume} onChange={handleHeroVolumeChange} className="h-1.5 flex-1 cursor-pointer accent-[#fbf234]" />
                  <button type="button" onClick={openHeroFullscreen} className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-xs font-black uppercase tracking-[0.12em] transition hover:bg-[#fbf234] hover:text-[#073e63]">
                    <Maximize2 size={16} /> Full Screen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GeometricDivider />
      </section>

      <section className="relative bg-white px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_25%,rgba(53,178,74,.08),transparent_26%),radial-gradient(circle_at_92%_40%,rgba(0,90,170,.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#35B24A]">Inside Jetama Group</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#062a43] md:text-5xl">Water. Energy. Future.</h2>
            <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-[#35B24A] via-[#005AAA] to-[#F5A623]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {subsidiaries.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.link} className="geo-card scroll-flip group" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="geo-card-inner relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(6,42,67,.12)]">
                    <div className="h-1.5" style={{ backgroundColor: item.color }} />
                    <div className="relative h-36 overflow-hidden bg-[#eef8fb]">
                      <img src={item.image} alt={item.fullTitle} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                      <div className="absolute left-6 top-7 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl" style={{ backgroundColor: item.color }}>
                        <Icon size={30} />
                      </div>
                    </div>
                    <div className="p-7">
                      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: item.color }}>{item.category}</p>
                      <h3 className="text-xl font-black text-[#062a43]">{item.title}</h3>
                      <p className="mt-3 min-h-[96px] text-sm leading-7 text-slate-600">{item.text}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <img src={item.logo} alt={item.fullTitle} className="max-h-10 max-w-[125px] object-contain" />
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-100 transition group-hover:translate-x-1" style={{ color: item.color }}>
                          <ArrowRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,59,122,.05),transparent_45%,rgba(53,178,74,.06))]" />
        <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rotate-12 bg-[#005AAA]/10 [clip-path:polygon(0_0,100%_35%,60%_100%,0_70%)]" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 -rotate-12 bg-[#35B24A]/12 [clip-path:polygon(25%_0,100%_20%,80%_100%,0_70%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="scroll-reveal-left relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#003b7a] via-[#005AAA] to-[#0b7f6b] p-7 text-white shadow-[0_28px_80px_rgba(0,59,122,.25)]">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${blueWaterImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-[#35B24A]/35 blur-[70px]" />
            <div className="relative flex items-center justify-between border-b border-white/15 pb-5">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10"><Bell size={23} /></span>
                <h3 className="text-2xl font-black uppercase tracking-[0.08em]">Noticeboard</h3>
              </div>
              <Link to="/news" className="group flex items-center gap-2 text-sm font-black">View All <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
            </div>
            <div className="relative mt-5 space-y-3">
              {noticeboard.map((notice, index) => (
                <Link key={notice.title} to="/news" className="scroll-scale flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur transition hover:translate-x-2 hover:bg-white/15" style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="flex items-center gap-3 text-sm font-bold"><ChevronDown className="-rotate-90 text-[#9effbd]" size={16} /> {notice.title}</span>
                  <span className="shrink-0 text-xs font-black text-white/80">{notice.date}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="scroll-reveal-right rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-7 shadow-[0_28px_80px_rgba(6,42,67,.10)]">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d8eef5] bg-white text-[#005AAA]"><ArrowRight size={22} /></span>
              <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-[#062a43]">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link key={item.title} to={item.link} className="scroll-scale group rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl" style={{ transitionDelay: `${index * 70}ms` }}>
                    <Icon className="mx-auto text-[#005AAA] transition group-hover:scale-110 group-hover:text-[#35B24A]" size={26} />
                    <p className="mt-3 text-sm font-black text-[#062a43]">{item.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="scroll-reveal-left">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#35B24A]">Latest Updates</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-[#062a43] md:text-5xl">Latest News & Events</h2>
              <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#35B24A] via-[#005AAA] to-[#F5A623]" />
            </div>
            <Link to="/news" className="scroll-reveal-right group flex items-center gap-3 rounded-full border border-[#35B24A]/40 px-5 py-3 text-sm font-black text-[#062a43] transition hover:bg-[#35B24A] hover:text-white">
              View All News <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((item, index) => (
              <Link key={item.title} to={item.link} className="geo-card scroll-flip group" style={{ transitionDelay: `${index * 100}ms` }}>
                <article className="geo-card-inner relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(6,42,67,.12)]">
                  <div className="relative h-44 overflow-hidden">
                    <img src={item.image} alt={item.title} onError={handleNewsImageError} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute left-4 top-4 rounded-xl bg-white px-4 py-3 text-center shadow-xl">
                      <p className="text-2xl font-black leading-none text-[#005AAA]">{item.day}</p>
                      <p className="mt-1 text-xs font-black uppercase text-[#35B24A]">{item.month}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500"><CalendarDays size={13} /> {item.date}</div>
                    <h3 className="line-clamp-3 text-lg font-black leading-snug text-[#062a43]">{item.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-black text-[#005AAA]">Read More <ArrowRight size={15} className="transition group-hover:translate-x-1" /></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#052b45] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(53,178,74,.25),transparent_30%),radial-gradient(circle_at_90%_70%,rgba(0,90,170,.35),transparent_35%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[130px] w-screen -translate-x-1/2 overflow-hidden opacity-90">
          <svg className="h-full w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <polygon className="geo-drift-a" points="0,0 1440,0 1440,48 1220,72 970,42 700,74 455,44 210,78 0,52" fill="#005AAA" />
            <polygon className="geo-drift-b" points="0,0 1440,0 1440,34 1180,60 900,34 610,65 340,36 0,68" fill="#35B24A" opacity="0.9" />
            <polygon className="geo-float-b" points="0,0 320,0 300,50 80,42" fill="#F5A623" opacity="0.85" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="scroll-reveal text-sm font-black uppercase tracking-[0.3em] text-[#9effbd]">Moving Forward</p>
          <h2 className="scroll-reveal mt-4 text-3xl font-black tracking-[-0.03em] md:text-5xl">Building a Sustainable Tomorrow for Sabah</h2>
          <p className="scroll-reveal mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">Strengthening water services, renewable energy growth and responsible corporate development.</p>
          <div className="scroll-scale mt-9 flex justify-center gap-4">
            <Link to="/projects" className="inline-flex items-center gap-3 rounded-full bg-[#fbf234] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#073e63] transition hover:-translate-y-1 hover:bg-white">Explore Projects <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
