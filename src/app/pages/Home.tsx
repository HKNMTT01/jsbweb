import { useEffect, useState, type SyntheticEvent } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Leaf,
  ShieldCheck,
  Zap,
} from "lucide-react";

import damHeroImage from "@/assets/jetama-dam-hero.jpg";
import aboutImageTwo from "@/assets/jetama-about-2.jpg";
import aboutImageThree from "@/assets/jetama-about-3.jpg";
import aboutImageFour from "@/assets/jetama-about-4.jpg";
import jetamaEnergyLogo from "@/assets/LOGO-JESB.png";
import jetamaWaterLogo from "@/assets/JETAMA WATER - 2.png";
import jetamaAlpineLogo from "@/assets/jetamaAlpine.png";
import solarLogo from "@/assets/solarpvlogo.png";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";

const heroImage = damHeroImage;
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
    title:
      "JETAMA Sdn Bhd Anjur Program Penanaman Rumput Laut Dengan Kerjasama UKM",
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
    title:
      "Seawater Desalination System to Address Water Supply Issues in Sabah",
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

function HomeMotionStyles() {
  return (
    <style>{`
      @keyframes premiumFloatA {
        0%, 100% { transform: translate3d(0, 0, 0) skewX(-7deg); opacity: .70; }
        50% { transform: translate3d(-24px, -13px, 0) skewX(-7deg); opacity: .94; }
      }

      @keyframes premiumFloatB {
        0%, 100% { transform: translate3d(0, 0, 0) skewX(9deg); opacity: .58; }
        50% { transform: translate3d(26px, 10px, 0) skewX(9deg); opacity: .82; }
      }

      @keyframes premiumFloatC {
        0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); opacity: .42; }
        50% { transform: translate3d(15px, -14px, 0) rotate(.7deg); opacity: .66; }
      }

      @keyframes glassShine {
        0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
        26% { opacity: .52; }
        100% { transform: translateX(190%) skewX(-18deg); opacity: 0; }
      }

      @keyframes beamMove {
        0%, 100% { transform: translate3d(-8%, 0, 0) rotate(-8deg); opacity: .16; }
        50% { transform: translate3d(12%, -8px, 0) rotate(-8deg); opacity: .30; }
      }

      @keyframes dividerLayerA {
        0%, 100% { transform: translate3d(0, 0, 0) skewX(-5deg); }
        50% { transform: translate3d(-28px, -7px, 0) skewX(-5deg); }
      }

      @keyframes dividerLayerB {
        0%, 100% { transform: translate3d(0, 0, 0) skewX(7deg); }
        50% { transform: translate3d(32px, 8px, 0) skewX(7deg); }
      }

      @keyframes dividerLayerC {
        0%, 100% { transform: translate3d(0, 0, 0); opacity: .76; }
        50% { transform: translate3d(-16px, 6px, 0); opacity: .96; }
      }

      @keyframes mountainBreath {
        0%, 100% { transform: translate3d(0, 0, 0) scale(1.045); }
        50% { transform: translate3d(0, -9px, 0) scale(1.065); }
      }

      @keyframes foregroundDrift {
        0%, 100% { transform: translate3d(0, 0, 0) scale(1.02); }
        50% { transform: translate3d(-12px, 6px, 0) scale(1.035); }
      }

      @keyframes titleGlow {
        0%, 100% { text-shadow: 0 12px 40px rgba(0,0,0,.35), 0 0 22px rgba(255,255,255,.14); }
        50% { text-shadow: 0 18px 52px rgba(0,0,0,.46), 0 0 30px rgba(255,255,255,.28); }
      }

      @keyframes cardGlow {
        0%, 100% { box-shadow: 0 22px 70px rgba(0, 44, 85, .10); }
        50% { box-shadow: 0 28px 90px rgba(0, 90, 170, .16); }
      }

      @keyframes smallGeoPulse {
        0%, 100% { transform: translate3d(0,0,0) scale(1); opacity: .42; }
        50% { transform: translate3d(0,-12px,0) scale(1.04); opacity: .75; }
      }

      .scroll-reveal,
      .scroll-reveal-left,
      .scroll-reveal-right,
      .scroll-scale {
        opacity: 0;
        transform-style: preserve-3d;
        will-change: transform, opacity, filter;
      }

      .scroll-reveal { transform: translate3d(0, 54px, 0); filter: blur(8px); }
      .scroll-reveal-left { transform: translate3d(-70px, 42px, 0) rotateY(10deg); filter: blur(8px); }
      .scroll-reveal-right { transform: translate3d(70px, 42px, 0) rotateY(-10deg); filter: blur(8px); }
      .scroll-scale { transform: translate3d(0, 50px, 0) scale(.94); filter: blur(8px); }

      .scroll-visible {
        opacity: 1;
        transform: translate3d(0, 0, 0) rotateY(0deg) scale(1);
        filter: blur(0);
        transition: opacity .9s ease, transform 1s cubic-bezier(.2,.8,.2,1), filter .9s ease;
      }

      .hero-scene-bg { animation: mountainBreath 13s ease-in-out infinite; transform-origin: center; }
      .hero-scene-foreground { animation: foregroundDrift 10s ease-in-out infinite; transform-origin: center; }
      .premium-geo-a { animation: premiumFloatA 12s ease-in-out infinite; transform-origin: center; }
      .premium-geo-b { animation: premiumFloatB 15s ease-in-out infinite; transform-origin: center; }
      .premium-geo-c { animation: premiumFloatC 18s ease-in-out infinite; transform-origin: center; }
      .premium-beam { animation: beamMove 10s ease-in-out infinite; transform-origin: center; }
      .divider-geo-a { animation: dividerLayerA 11s ease-in-out infinite; transform-origin: center; }
      .divider-geo-b { animation: dividerLayerB 13s ease-in-out infinite; transform-origin: center; }
      .divider-geo-c { animation: dividerLayerC 15s ease-in-out infinite; transform-origin: center; }
      .title-glow { animation: titleGlow 4.4s ease-in-out infinite; }
      .soft-card-glow { animation: cardGlow 6s ease-in-out infinite; }
      .small-geo-pulse { animation: smallGeoPulse 6s ease-in-out infinite; }

      .shine-layer::before {
        content: "";
        position: absolute;
        top: -40%;
        bottom: -40%;
        left: -35%;
        width: 34%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent);
        animation: glassShine 7s ease-in-out infinite;
        pointer-events: none;
      }
    `}</style>
  );
}

function HeroGeometricAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      <div className="premium-beam absolute left-[-15%] top-[8%] h-[360px] w-[52%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.22),transparent)] blur-[6px]" />
      <div className="premium-beam absolute right-[-20%] top-[0%] h-[420px] w-[58%] bg-[linear-gradient(105deg,transparent,rgba(251,242,52,.18),transparent)] blur-[10px] [animation-delay:2s]" />

      <svg className="absolute inset-x-0 top-[9%] h-[390px] w-full opacity-90" viewBox="0 0 1440 390" preserveAspectRatio="none">
        <defs>
          <linearGradient id="heroBlueRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#005AAA" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#39B9FF" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="heroGreenRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#35B24A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00A884" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="heroGoldRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#FBF234" stopOpacity="0.09" />
          </linearGradient>
        </defs>

        <path className="premium-geo-a" d="M-90 260 L170 160 L390 212 L585 128 L865 205 L1050 118 L1540 178 L1540 248 L1140 220 L915 298 L700 235 L440 310 L195 242 L-90 342 Z" fill="url(#heroBlueRibbon)" />
        <path className="premium-geo-b" d="M-80 310 L140 238 L365 285 L625 206 L840 275 L1045 198 L1520 246 L1520 315 L1135 288 L895 342 L660 292 L410 358 L165 306 L-80 372 Z" fill="url(#heroGreenRibbon)" />
        <path className="premium-geo-c" d="M-70 220 L135 188 L340 225 L565 176 L790 214 L1010 168 L1510 200 L1510 246 L1045 226 L820 250 L570 218 L350 265 L120 230 L-70 252 Z" fill="url(#heroGoldRibbon)" />
      </svg>

      <div className="small-geo-pulse absolute left-[12%] top-[33%] h-9 w-9 bg-[#39b9ff]/40 shadow-[0_0_30px_rgba(57,185,255,.36)]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
      <div className="small-geo-pulse absolute right-[16%] top-[31%] h-8 w-8 bg-[#35B24A]/38 shadow-[0_0_28px_rgba(53,178,74,.34)] [animation-delay:1.4s]" style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }} />
      <div className="small-geo-pulse absolute left-[72%] top-[51%] h-7 w-7 bg-[#F5A623]/42 shadow-[0_0_26px_rgba(245,166,35,.30)] [animation-delay:2.3s]" style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }} />
    </div>
  );
}

function GeometricBlendDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[45] h-[285px] overflow-hidden" aria-hidden="true">
      <svg className="absolute bottom-0 left-[-5%] h-[265px] w-[110%]" viewBox="0 0 1600 280" preserveAspectRatio="none">
        <defs>
          <linearGradient id="blendWhite" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.45)" />
            <stop offset="52%" stopColor="rgba(255,255,255,.94)" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="blendBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="#005AAA" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#39B9FF" stopOpacity="0.11" />
          </linearGradient>
          <linearGradient id="blendGreen" x1="0" x2="1">
            <stop offset="0%" stopColor="#35B24A" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00A884" stopOpacity="0.11" />
          </linearGradient>
          <linearGradient id="blendGold" x1="0" x2="1">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FBF234" stopOpacity="0.11" />
          </linearGradient>
        </defs>

        <path className="divider-geo-a" d="M0 78 L210 48 L405 88 L640 38 L845 82 L1065 35 L1600 70 L1600 280 L0 280 Z" fill="url(#blendBlue)" />
        <path className="divider-geo-b" d="M0 108 L225 78 L475 125 L720 70 L980 116 L1180 78 L1600 108 L1600 280 L0 280 Z" fill="url(#blendGreen)" />
        <path className="divider-geo-c" d="M0 138 L180 116 L420 155 L650 106 L925 148 L1160 112 L1600 135 L1600 280 L0 280 Z" fill="url(#blendGold)" />
        <path className="divider-geo-a" d="M0 156 L240 132 L505 172 L735 126 L1005 166 L1260 134 L1600 150 L1600 280 L0 280 Z" fill="url(#blendWhite)" />
        <path className="divider-geo-b" d="M0 205 L260 178 L540 215 L810 178 L1080 214 L1320 184 L1600 198 L1600 280 L0 280 Z" fill="#FFFFFF" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" />
    </div>
  );
}

function SectionGeometricBackground({ variant = "light" }: { variant?: "light" | "news" | "bright" }) {
  const blue = variant === "news" ? "#39B9FF" : "#005AAA";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url(${damHeroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.94),rgba(255,255,255,.76),rgba(232,248,255,.86))]" />
      <div className="premium-beam absolute left-[-18%] top-[-18%] h-[420px] w-[52%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.86),transparent)] blur-[4px]" />
      <div className="premium-geo-a absolute -left-20 top-16 h-32 w-[560px] bg-[#005AAA]/[.075]" style={{ clipPath: "polygon(0 18%, 82% 0, 100% 72%, 14% 100%)" }} />
      <div className="premium-geo-b absolute right-[-120px] top-28 h-40 w-[620px] bg-[#35B24A]/[.08]" style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }} />
      <div className="premium-geo-c absolute bottom-10 left-[18%] h-24 w-[520px] bg-[#F5A623]/[.075]" style={{ clipPath: "polygon(0 35%, 74% 0, 100% 65%, 22% 100%)" }} />
      <div className="small-geo-pulse absolute right-[12%] bottom-[18%] h-10 w-10 opacity-70" style={{ background: blue, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
    </div>
  );
}

function NewsGeometricFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: `url(${damHeroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,31,53,.94),rgba(0,90,170,.86),rgba(0,128,112,.78))]" />
      <div className="premium-beam absolute left-[-15%] top-[-25%] h-[520px] w-[60%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.20),transparent)] blur-[5px]" />
      <div className="premium-geo-a absolute left-[-8%] top-[9%] h-28 w-[54%] bg-white/[.075]" style={{ clipPath: "polygon(0 25%, 84% 0, 100% 70%, 12% 100%)" }} />
      <div className="premium-geo-b absolute right-[-10%] bottom-[10%] h-32 w-[58%] bg-[#FBF234]/[.08]" style={{ clipPath: "polygon(10% 0, 100% 32%, 84% 100%, 0 68%)" }} />
      <div className="premium-geo-c absolute left-[12%] bottom-[2%] h-20 w-[42%] bg-[#35B24A]/[.10]" style={{ clipPath: "polygon(0 42%, 70% 0, 100% 58%, 25% 100%)" }} />
    </div>
  );
}

export default function Home() {
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAboutImageIndex((current) =>
        current === aboutCarouselImages.length - 1 ? 0 : current + 1,
      );
    }, 3500);

    return () => window.clearInterval(timer);
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
    <div className="overflow-hidden bg-white text-[#102f42] selection:bg-[#fbf234] selection:text-[#062a43]">
      <HomeMotionStyles />

      <section className="relative min-h-[880px] overflow-hidden bg-[#062b39] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="JETAMA water infrastructure"
            className="hero-scene-bg h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,123,149,.42)_0%,rgba(3,79,104,.23)_34%,rgba(4,45,57,.31)_68%,rgba(3,33,43,.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,22,38,.45),transparent_42%,rgba(0,90,170,.18)),radial-gradient(circle_at_50%_20%,rgba(255,255,255,.20),transparent_25%)]" />
        </div>

        <HeroGeometricAtmosphere />

        <div className="hero-scene-foreground pointer-events-none absolute inset-x-0 bottom-[82px] z-10 h-[320px] opacity-90">
          <div className="absolute left-[-10%] bottom-4 h-[260px] w-[56%] bg-[linear-gradient(180deg,rgba(35,112,79,.12),rgba(7,65,50,.82))] blur-[1px]" style={{ clipPath: "polygon(0 50%, 42% 0, 100% 36%, 94% 100%, 0 100%)" }} />
          <div className="absolute right-[-8%] bottom-4 h-[300px] w-[46%] bg-[linear-gradient(180deg,rgba(45,120,70,.14),rgba(5,55,48,.88))] blur-[1px]" style={{ clipPath: "polygon(8% 32%, 62% 0, 100% 46%, 100% 100%, 0 100%)" }} />
          <div className="absolute left-[18%] bottom-[48px] h-[155px] w-[18%] bg-[linear-gradient(180deg,rgba(74,126,70,.50),rgba(15,75,48,.95))] shadow-[0_26px_80px_rgba(0,0,0,.36)]" style={{ clipPath: "polygon(18% 100%, 42% 6%, 78% 0, 100% 100%)" }} />
        </div>

        <div className="relative z-30 mx-auto flex min-h-[820px] max-w-[1500px] flex-col items-center justify-center px-4 pb-36 pt-32 text-center sm:px-6 lg:px-8">
          <div className="scroll-reveal shine-layer relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-35 py-6">
            <div className="absolute inset-0 bg-white/[.025] backdrop-blur-[1px]" style={{ clipPath: "polygon(6% 0, 95% 0, 100% 72%, 88% 100%, 0 100%, 0 18%)" }} />
            <img
              src={jetamaLogo}
              alt="JETAMA Sdn Bhd"
              className="relative mx-auto mb-1 max-h-40 w-auto drop-shadow-[0_18px_38px_rgba(0,0,0,.30)]"
            />

            <h1 className="title-glow relative text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-8xl">
              <span className="block text-[#1cf100]">Redefining</span>
              <span className="mt-1 block">
                <span className="text-[#2d00cf]">Water</span>
                <span className="px-4 text-[#2d00cf]">&</span>
                <span className="text-[#ffd932]">Energy</span>
              </span>
            </h1>

            <p className="relative mx-auto mt-7 max-w-3xl text-base leading-8 text-white/88 drop-shadow-[0_8px_20px_rgba(0,0,0,.35)] sm:text-lg">
              Reliable treated water services, renewable energy initiatives and
              strategic development for Sabah.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#fbf234] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-[#073e63] shadow-[0_18px_45px_rgba(0,0,0,.20)] transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Jetama
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <GeometricBlendDivider />
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
          <div className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(100deg,rgba(0,90,170,.22),rgba(53,178,74,.16),rgba(245,166,35,.14))]" style={{ clipPath: "polygon(0 35%, 26% 5%, 54% 42%, 76% 12%, 100% 40%, 100% 100%, 0 100%)" }} />
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden px-4 py-20 sm:px-10 lg:px-16">
          <SectionGeometricBackground />
          <div className="relative">
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
                  className="scroll-scale flex items-center gap-3 rounded-2xl border border-[#d8f1f4] bg-white/86 p-4 font-bold text-[#073e63] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <ShieldCheck className="text-[#00a884]" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <SectionGeometricBackground />
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
              supporting water, energy, pipe manufacturing and solar
              development.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="scroll-scale soft-card-glow group shine-layer relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/86 p-7 shadow-[0_22px_70px_rgba(0,44,85,0.08)] backdrop-blur-md transition hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_90px_rgba(0,44,85,0.15)]"
                style={{ transitionDelay: `${index * 110}ms` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-2"
                  style={{ backgroundColor: item.color }}
                />
                <div
                  className="absolute right-0 top-0 h-24 w-32 opacity-10 transition group-hover:opacity-20"
                  style={{ backgroundColor: item.color, clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 62%)" }}
                />

                <div className="relative mb-7 flex h-32 items-center justify-center rounded-[1.6rem] bg-[#f8fbff]/90 p-5 ring-1 ring-[#d8eef5]">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-24 max-w-full object-contain drop-shadow-[0_12px_28px_rgba(0,44,85,0.18)] transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div
                  className="relative mb-4 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>

                <h3 className="relative text-2xl font-black leading-tight text-[#073e63]">
                  {item.title}
                </h3>

                <p className="relative mt-4 min-h-[86px] text-base leading-7 text-slate-600">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <NewsGeometricFrame />
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[2.4rem] border border-white/18 bg-white/12 p-6 shadow-[0_28px_95px_rgba(0,20,45,0.35)] backdrop-blur-md lg:p-10">
          <div className="premium-geo-a absolute left-0 top-0 h-20 w-72 bg-[#35B24A]/25" style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 70%)" }} />
          <div className="premium-geo-b absolute right-0 top-0 h-24 w-80 bg-[#F5A623]/25" style={{ clipPath: "polygon(22% 0, 100% 0, 100% 72%, 0 100%)" }} />

          <div className="relative mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9effbd]">
                Latest Updates
              </p>

              <h2 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">
                News & Events
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-white/78">
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

          <div className="relative grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <a
              href={activeNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group shine-layer relative min-h-[370px] overflow-hidden rounded-[1.8rem] border border-white/18 bg-[#073e63] shadow-[0_24px_75px_rgba(0,12,28,0.30)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(0,12,28,0.42)]"
            >
              <img
                key={`${activeNews.title}-${activeNews.image}`}
                src={activeNews.image}
                alt={activeNews.title}
                onError={handleNewsImageError}
                className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041f35] via-[#041f35]/62 to-[#041f35]/10" />
              <div className="absolute left-0 top-0 h-28 w-72 bg-[#35B24A]/30" style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 64%)" }} />
              <div className="absolute right-0 bottom-0 h-32 w-80 bg-[#F5A623]/25" style={{ clipPath: "polygon(22% 0, 100% 32%, 100% 100%, 0 100%)" }} />

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
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
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
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/14 bg-white/12 shadow-[0_18px_55px_rgba(0,20,45,0.22)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#fbf234]/45 hover:bg-white/18 hover:shadow-[0_26px_75px_rgba(0,20,45,0.32)]"
                >
                  <div className="absolute right-0 top-0 h-16 w-24 bg-[#39B9FF]/20" style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 64%)" }} />
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

                  <div className="relative p-5">
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
                      <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative mt-7 flex items-center justify-center gap-2">
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

      <section className="relative overflow-hidden px-4 py-20 text-[#073e63] sm:px-6 lg:px-8">
        <SectionGeometricBackground variant="bright" />
        <div className="relative mx-auto max-w-6xl">
          <div className="scroll-reveal shine-layer relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/82 p-7 shadow-[0_25px_80px_rgba(0,90,170,.12)] backdrop-blur-md md:p-10">
            <div className="absolute left-0 top-0 h-24 w-80 bg-[#005AAA]/10" style={{ clipPath: "polygon(0 0, 100% 0, 76% 100%, 0 62%)" }} />
            <div className="absolute right-0 bottom-0 h-28 w-96 bg-[#35B24A]/10" style={{ clipPath: "polygon(24% 0, 100% 34%, 100% 100%, 0 100%)" }} />
            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#00a884]">
                  Moving Forward
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#073e63] md:text-4xl lg:text-[2.8rem]">
                  Strengthening Water Services &
                  <span className="block text-[#005AAA]">
                    Sustainable Energy Growth
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  JETAMA continues to support Sabah’s infrastructure needs
                  through reliable water operations, renewable energy
                  initiatives and strategic corporate development.
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
                    className="inline-flex items-center gap-3 rounded-full border border-[#d8eef5] bg-white/80 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#073e63] backdrop-blur transition hover:-translate-y-1 hover:border-[#35B24A] hover:bg-white"
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
                      className="scroll-scale group relative overflow-hidden rounded-2xl border border-[#d8eef5] bg-white/86 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_55px_rgba(0,90,170,.14)]"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute right-0 top-0 h-16 w-24 bg-[#005AAA]/[.06]" style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 68%)" }} />
                      <div className="relative flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#073e63] text-white shadow-md transition group-hover:bg-[#fbf234] group-hover:text-[#073e63]">
                          <Icon size={21} />
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-[#073e63]">{card.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {card.text}
                          </p>
                        </div>
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
