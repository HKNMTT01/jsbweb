import { useEffect, useState, type SyntheticEvent } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Leaf,
  Zap,
} from "lucide-react";

import damHeroImage from "@/assets/jetama-dam-hero.jpg";
import aboutImageTwo from "@/assets/imgg3.jpeg";
import aboutImageThree from "@/assets/img000.jpeg";
import aboutImageFour from "@/assets/img0101.jpeg";
import jetamaEnergyLogo from "@/assets/jetama_energy.png";
import jetamaWaterLogo from "@/assets/JETAMA WATER - 2.png";
import jetamaAlpineLogo from "@/assets/jetama_alpine_pipe.png";
import solarLogo from "@/assets/solar_pv_power.png";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import jetamaBatuSapiLogo from "@/assets/jetama_batu_sapi.png";
import jetamaBabagonLogo from "@/assets/jetama_babagon_floating_solar.png";

const heroImage = damHeroImage;
const blueWaterImage = aboutImageTwo;

const aboutCarouselImages = [
  { src: aboutImageTwo, alt: "Aerial view of JETAMA reservoir" },
  { src: aboutImageThree, alt: "JETAMA dam and intake structure" },
  { src: aboutImageFour, alt: "JETAMA water treatment plant" },
];

const aboutStats = [
  ["1988", "Incorporated"],
  ["1992", "PCCA Signed"],
  ["165 MLD", "Moyog Capacity"],
  ["70 km", "Pipeline Works"],
];

const subsidiaries = [
  {
    title: "Jetama Water Sdn. Bhd.",
    category: "Subsidiary",
    color: "#005AAA",
    text: "Water treatment operations and potable water service support in Sabah.",
    logo: jetamaWaterLogo,
    link: "/subsidiary/water",
  },
  {
    title: "Jetama Energy Sdn. Bhd.",
    category: "Subsidiary",
    color: "#F6A623",
    text: "Renewable energy initiatives supporting Sabah’s low-carbon direction.",
    logo: jetamaEnergyLogo,
    link: "/subsidiary/energy",
  },
  {
    title: "Solar PV Power Sdn. Bhd.",
    category: "Subsidiary",
    color: "#F6A623",
    text: "Large scale solar photovoltaic development under Jetama Energy.",
    logo: solarLogo,
    link: "/jointventure/solar-pv-power",
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
    color: "#F6A623",
    text: "Large scale solar development at Batu Sapi, Sandakan.",
    logo: jetamaBatuSapiLogo,
    link: "/jointventure/jetama-batu-sapi-solar",
  },
  {
    title: "Jetama Babagon Floating Solar Sdn. Bhd.",
    category: "Joint Venture",
    color: "#35B24A",
    text: "Floating solar PV development at Babagon Dam, Penampang.",
    logo: jetamaBabagonLogo,
    link: "/jointventure/jetama-babagon-floating-solar",
  },
];


function CompanyTitle({ title }: { title: string }) {
  if (title === "Jetama Water Sdn. Bhd.") {
    return (
      <>
        <span className="text-[#005AAA]">Jetama </span>
        <span className="text-[#35B24A]">Water Sdn. Bhd.</span>
      </>
    );
  }

  if (title === "Jetama Energy Sdn. Bhd.") {
    return (
      <>
        <span className="text-[#005AAA]">Jetama </span>
        <span className="text-[#F6A623]">Energy </span>
        <span className="text-[#005AAA]">Sdn. Bhd.</span>
      </>
    );
  }

  if (title === "Solar PV Power Sdn. Bhd.") {
    return <span className="text-[#005AAA]">Solar PV Power Sdn. Bhd.</span>;
  }

  if (title === "Jetama Alpine Pipe (Sabah) Sdn. Bhd.") {
    return (
      <>
        <span className="text-[#005AAA]">Jetama </span>
        <span className="text-[#D62828]">Alpine Pipe </span>
        <span className="text-[#005AAA]">(Sabah) Sdn. Bhd.</span>
      </>
    );
  }

  return <span className="text-[#005AAA]">{title}</span>;
}

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


const formatNewsDisplayDate = (dateText: string) => {
  const date = new Date(dateText);

  if (Number.isNaN(date.getTime())) return dateText;

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();

  return `${day} • ${month} • ${year}`;
};

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

      @keyframes cloudDriftWide {
        0%, 100% { transform: translate3d(-3%, 0, 0) scale(1); opacity: .72; }
        50% { transform: translate3d(4%, -10px, 0) scale(1.06); opacity: .96; }
      }

      @keyframes cloudDriftReverse {
        0%, 100% { transform: translate3d(4%, 0, 0) scale(1.02); opacity: .68; }
        50% { transform: translate3d(-5%, 12px, 0) scale(1.08); opacity: .92; }
      }

      @keyframes cloudBreath {
        0%, 100% { transform: scale(1); filter: blur(28px); opacity: .72; }
        50% { transform: scale(1.08); filter: blur(36px); opacity: .95; }
      }

      @keyframes techGridFlow {
        0% { transform: translate3d(0, 0, 0); opacity: .32; }
        50% { opacity: .52; }
        100% { transform: translate3d(46px, 46px, 0); opacity: .32; }
      }

      @keyframes techScanLine {
        0% { transform: translateY(-120%); opacity: 0; }
        18% { opacity: .55; }
        100% { transform: translateY(220%); opacity: 0; }
      }

      @keyframes techPulseRing {
        0%, 100% { transform: scale(.94); opacity: .30; }
        50% { transform: scale(1.04); opacity: .62; }
      }

      @keyframes techDataFloat {
        0%, 100% { transform: translate3d(0, 0, 0); opacity: .58; }
        50% { transform: translate3d(0, -10px, 0); opacity: .95; }
      }

      @keyframes techCardGlow {
        0%, 100% { box-shadow: 0 22px 70px rgba(0, 33, 62, .16), inset 0 1px 0 rgba(255,255,255,.45); }
        50% { box-shadow: 0 30px 90px rgba(0, 90, 170, .22), inset 0 1px 0 rgba(255,255,255,.62); }
      }

      @keyframes techActiveReveal {
        0% { opacity: 0; transform: translate3d(18px, 0, 0) scale(.985); filter: blur(8px); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }

      @keyframes heroWordEntrance {
        0% { opacity: 0; transform: translate3d(0, 38px, 0) scale(.94); filter: blur(10px); }
        58% { opacity: 1; transform: translate3d(0, -4px, 0) scale(1.015); filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }

      @keyframes heroWordFloat {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(0, -7px, 0); }
      }

      @keyframes heroHaloPulse {
        0%, 100% { opacity: .58; transform: scale(1); filter: blur(34px); }
        50% { opacity: .88; transform: scale(1.08); filter: blur(42px); }
      }

      @keyframes heroLineSweep {
        0% { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
        24% { opacity: .72; }
        100% { transform: translateX(165%) skewX(-18deg); opacity: 0; }
      }

      @keyframes heroMiniText {
        0%, 100% { opacity: .82; letter-spacing: .22em; }
        50% { opacity: 1; letter-spacing: .30em; }
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
      .hero-title-panel {
        background: transparent;
        border: 0;
        box-shadow: none;
        backdrop-filter: none;
      }
      .hero-title-panel::after {
        content: "";
        position: absolute;
        top: 8%;
        bottom: 8%;
        left: -42%;
        width: 38%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.58), transparent);
        animation: heroLineSweep 6.8s ease-in-out infinite;
        pointer-events: none;
        mix-blend-mode: screen;
      }
      .hero-halo { animation: heroHaloPulse 6s ease-in-out infinite; }
      .hero-kicker { animation: heroMiniText 4.5s ease-in-out infinite; }
      .hero-word {
        display: inline-block;
        opacity: 0;
        animation: heroWordEntrance .95s cubic-bezier(.2,.8,.2,1) forwards, heroWordFloat 5.8s ease-in-out infinite;
        -webkit-text-stroke: .8px rgba(255,255,255,.45);
      }
      .hero-word-1 { animation-delay: .08s, 1.25s; }
      .hero-word-2 { animation-delay: .24s, 1.45s; }
      .hero-word-3 { animation-delay: .40s, 1.65s; }
      .hero-word-4 { animation-delay: .56s, 1.85s; }
      .soft-card-glow { animation: cardGlow 6s ease-in-out infinite; }
      .small-geo-pulse { animation: smallGeoPulse 6s ease-in-out infinite; }
      .cloud-drift-wide { animation: cloudDriftWide 14s ease-in-out infinite; transform-origin: center; }
      .cloud-drift-reverse { animation: cloudDriftReverse 17s ease-in-out infinite; transform-origin: center; }
      .cloud-breath { animation: cloudBreath 10s ease-in-out infinite; transform-origin: center; }
      .tech-grid-flow { animation: techGridFlow 16s linear infinite; }
      .tech-scan-line { animation: techScanLine 5.8s ease-in-out infinite; }
      .tech-pulse-ring { animation: techPulseRing 5.5s ease-in-out infinite; }
      .tech-data-float { animation: techDataFloat 6.5s ease-in-out infinite; }
      .tech-card-glow { animation: techCardGlow 6.8s ease-in-out infinite; }
      .tech-active-reveal { animation: techActiveReveal .55s cubic-bezier(.2,.8,.2,1); }
      .logo-gradient-text {
        background: linear-gradient(90deg, #35B24A 0%, #005AAA 48%, #F6A623 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: none;
      }
      .news-brand-glass::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 9px;
        background: linear-gradient(90deg, #35B24A 0%, #005AAA 48%, #F6A623 100%);
        opacity: .95;
        z-index: 5;
      }

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
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      <div className="premium-beam absolute left-[-15%] top-[8%] h-[360px] w-[52%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.22),transparent)] blur-[6px]" />
      <div className="premium-beam absolute right-[-20%] top-[0%] h-[420px] w-[58%] bg-[linear-gradient(105deg,transparent,rgba(251,242,52,.18),transparent)] blur-[10px] [animation-delay:2s]" />

      <svg
        className="absolute inset-x-0 top-[12%] h-[390px] w-full opacity-65"
        viewBox="0 0 1440 390"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroBlueRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#005AAA" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#005AAA" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="heroGreenRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#35B24A" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00A884" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="heroGoldRibbon" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#F6A623" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#F6A623" stopOpacity="0.09" />
          </linearGradient>
        </defs>

        <path
          className="premium-geo-a"
          d="M-90 260 L170 160 L390 212 L585 128 L865 205 L1050 118 L1540 178 L1540 248 L1140 220 L915 298 L700 235 L440 310 L195 242 L-90 342 Z"
          fill="url(#heroBlueRibbon)"
        />
        <path
          className="premium-geo-b"
          d="M-80 310 L140 238 L365 285 L625 206 L840 275 L1045 198 L1520 246 L1520 315 L1135 288 L895 342 L660 292 L410 358 L165 306 L-80 372 Z"
          fill="url(#heroGreenRibbon)"
        />
        <path
          className="premium-geo-c"
          d="M-70 220 L135 188 L340 225 L565 176 L790 214 L1010 168 L1510 200 L1510 246 L1045 226 L820 250 L570 218 L350 265 L120 230 L-70 252 Z"
          fill="url(#heroGoldRibbon)"
        />
      </svg>

      <div
        className="small-geo-pulse absolute left-[12%] top-[33%] h-9 w-9 bg-[#005AAA]/40 shadow-[0_0_30px_rgba(57,185,255,.36)]"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />
      <div
        className="small-geo-pulse absolute right-[16%] top-[31%] h-8 w-8 bg-[#35B24A]/38 shadow-[0_0_28px_rgba(53,178,74,.34)] [animation-delay:1.4s]"
        style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
      />
      <div
        className="small-geo-pulse absolute left-[72%] top-[51%] h-7 w-7 bg-[#F6A623]/42 shadow-[0_0_26px_rgba(245,166,35,.30)] [animation-delay:2.3s]"
        style={{
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        }}
      />
    </div>
  );
}

function GeometricBlendDivider() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[45] h-[285px] overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 left-[-5%] h-[265px] w-[110%]"
        viewBox="0 0 1600 280"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blendWhite" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.45)" />
            <stop offset="52%" stopColor="rgba(255,255,255,.94)" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <linearGradient id="blendBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="#005AAA" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#005AAA" stopOpacity="0.11" />
          </linearGradient>
          <linearGradient id="blendGreen" x1="0" x2="1">
            <stop offset="0%" stopColor="#35B24A" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00A884" stopOpacity="0.11" />
          </linearGradient>
          <linearGradient id="blendGold" x1="0" x2="1">
            <stop offset="0%" stopColor="#F6A623" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F6A623" stopOpacity="0.11" />
          </linearGradient>
        </defs>

        <path
          className="divider-geo-a"
          d="M0 78 L210 48 L405 88 L640 38 L845 82 L1065 35 L1600 70 L1600 280 L0 280 Z"
          fill="url(#blendBlue)"
        />
        <path
          className="divider-geo-b"
          d="M0 108 L225 78 L475 125 L720 70 L980 116 L1180 78 L1600 108 L1600 280 L0 280 Z"
          fill="url(#blendGreen)"
        />
        <path
          className="divider-geo-c"
          d="M0 138 L180 116 L420 155 L650 106 L925 148 L1160 112 L1600 135 L1600 280 L0 280 Z"
          fill="url(#blendGold)"
        />
        <path
          className="divider-geo-a"
          d="M0 156 L240 132 L505 172 L735 126 L1005 166 L1260 134 L1600 150 L1600 280 L0 280 Z"
          fill="url(#blendWhite)"
        />
        <path
          className="divider-geo-b"
          d="M0 205 L260 178 L540 215 L810 178 L1080 214 L1320 184 L1600 198 L1600 280 L0 280 Z"
          fill="#FFFFFF"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" />
    </div>
  );
}

function SectionGeometricBackground({
  variant = "light",
}: {
  variant?: "light" | "news" | "bright";
}) {
  const blue = variant === "news" ? "#005AAA" : "#005AAA";
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(${damHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.94),rgba(255,255,255,.76),rgba(232,248,255,.86))]" />
      <div className="premium-beam absolute left-[-18%] top-[-18%] h-[420px] w-[52%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.86),transparent)] blur-[4px]" />
      <div
        className="premium-geo-a absolute -left-20 top-16 h-32 w-[560px] bg-[#005AAA]/[.075]"
        style={{ clipPath: "polygon(0 18%, 82% 0, 100% 72%, 14% 100%)" }}
      />
      <div
        className="premium-geo-b absolute right-[-120px] top-28 h-40 w-[620px] bg-[#35B24A]/[.08]"
        style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }}
      />
      <div
        className="premium-geo-c absolute bottom-10 left-[18%] h-24 w-[520px] bg-[#F6A623]/[.075]"
        style={{ clipPath: "polygon(0 35%, 74% 0, 100% 65%, 22% 100%)" }}
      />
      <div
        className="small-geo-pulse absolute right-[12%] bottom-[18%] h-10 w-10 opacity-70"
        style={{
          background: blue,
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
    </div>
  );
}

function NewsCloudBlend() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <div className="cloud-breath absolute inset-x-[-10%] top-[-82px] h-[190px] bg-[radial-gradient(ellipse_at_18%_55%,rgba(255,255,255,.88)_0%,rgba(255,255,255,.42)_30%,transparent_62%),radial-gradient(ellipse_at_48%_45%,rgba(0,90,170,.28)_0%,rgba(0,90,170,.14)_34%,transparent_66%),radial-gradient(ellipse_at_78%_58%,rgba(53,178,74,.30)_0%,rgba(53,178,74,.15)_32%,transparent_64%)]" />
      <div className="cloud-drift-wide absolute left-[-18%] top-[-42px] h-[155px] w-[72%] rounded-[999px] bg-white/36 blur-3xl" />
      <div className="cloud-drift-reverse absolute right-[-20%] top-[-54px] h-[170px] w-[76%] rounded-[999px] bg-[#005AAA]/28 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/90 via-white/36 to-transparent" />

      <div className="cloud-breath absolute inset-x-[-10%] bottom-[-90px] h-[200px] bg-[radial-gradient(ellipse_at_15%_42%,rgba(255,255,255,.82)_0%,rgba(255,255,255,.34)_30%,transparent_64%),radial-gradient(ellipse_at_52%_55%,rgba(53,178,74,.30)_0%,rgba(53,178,74,.14)_34%,transparent_68%),radial-gradient(ellipse_at_84%_44%,rgba(246,166,35,.26)_0%,rgba(246,166,35,.12)_32%,transparent_64%)] [animation-delay:1.2s]" />
      <div className="cloud-drift-reverse absolute left-[-16%] bottom-[-54px] h-[155px] w-[78%] rounded-[999px] bg-white/32 blur-3xl" />
      <div className="cloud-drift-wide absolute right-[-18%] bottom-[-46px] h-[150px] w-[72%] rounded-[999px] bg-[#35B24A]/22 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
    </div>
  );
}

function NewsTechBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#005AAA]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `url(${damHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,90,170,.96)_0%,rgba(0,96,170,.92)_48%,rgba(0,120,145,.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(53,178,74,.20),transparent_28%),radial-gradient(circle_at_76%_76%,rgba(246,166,35,.18),transparent_32%)]" />
      <div className="premium-beam absolute left-[-18%] top-[4%] h-[420px] w-[58%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.22),transparent)] blur-[6px]" />
      <div className="premium-beam absolute right-[-20%] bottom-[-8%] h-[380px] w-[56%] bg-[linear-gradient(110deg,transparent,rgba(246,166,35,.18),transparent)] blur-[8px] [animation-delay:2s]" />
      <div
        className="premium-geo-a absolute left-[-5%] top-[12%] h-32 w-[52%] bg-white/[.075]"
        style={{ clipPath: "polygon(0 22%, 86% 0, 100% 70%, 12% 100%)" }}
      />
      <div
        className="premium-geo-b absolute right-[-8%] bottom-[10%] h-36 w-[54%] bg-[#35B24A]/[.11]"
        style={{ clipPath: "polygon(10% 0, 100% 28%, 84% 100%, 0 72%)" }}
      />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/88 via-white/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
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
    <div className="overflow-hidden bg-white text-[#052B4F] selection:bg-[#F6A623] selection:text-[#052B4F]">
      <HomeMotionStyles />

      <section className="relative min-h-[880px] overflow-hidden bg-[#052B4F] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="JETAMA water infrastructure"
            className="hero-scene-bg h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,56,86,.50)_0%,rgba(0,90,112,.26)_34%,rgba(4,45,57,.45)_68%,rgba(3,28,43,.70)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,22,38,.66),rgba(3,50,70,.18)_42%,rgba(0,90,170,.34)),radial-gradient(circle_at_50%_34%,rgba(255,255,255,.28),transparent_24%),radial-gradient(circle_at_22%_30%,rgba(251,242,52,.22),transparent_20%),radial-gradient(circle_at_82%_26%,rgba(53,178,74,.22),transparent_22%)]" />
          <div className="hero-halo absolute left-[-8%] top-[5%] h-[380px] w-[440px] rounded-full bg-[#005AAA]/24" />
          <div className="hero-halo absolute right-[-8%] top-[3%] h-[360px] w-[430px] rounded-full bg-[#F6A623]/22 [animation-delay:1.7s]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
        </div>

        <HeroGeometricAtmosphere />

        <div className="hero-scene-foreground pointer-events-none absolute inset-x-0 bottom-[82px] z-10 h-[320px] opacity-90">
          <div
            className="absolute left-[-10%] bottom-4 h-[260px] w-[56%] bg-[linear-gradient(180deg,rgba(35,112,79,.12),rgba(7,65,50,.82))] blur-[1px]"
            style={{
              clipPath: "polygon(0 50%, 42% 0, 100% 36%, 94% 100%, 0 100%)",
            }}
          />
          <div
            className="absolute right-[-8%] bottom-4 h-[300px] w-[46%] bg-[linear-gradient(180deg,rgba(45,120,70,.14),rgba(5,55,48,.88))] blur-[1px]"
            style={{
              clipPath: "polygon(8% 32%, 62% 0, 100% 46%, 100% 100%, 0 100%)",
            }}
          />
          <div
            className="absolute left-[18%] bottom-[48px] h-[155px] w-[18%] bg-[linear-gradient(180deg,rgba(74,126,70,.50),rgba(15,75,48,.95))] shadow-[0_26px_80px_rgba(0,0,0,.36)]"
            style={{ clipPath: "polygon(18% 100%, 42% 6%, 78% 0, 100% 100%)" }}
          />
        </div>

        <div className="relative z-30 mx-auto flex min-h-[820px] max-w-[1500px] flex-col items-center justify-center px-4 pb-36 pt-32 text-center sm:px-6 lg:px-8">
          <div className="scroll-reveal hero-title-panel shine-layer relative mx-auto max-w-6xl overflow-hidden px-6 py-9 sm:px-10 lg:px-16 lg:py-12">
            <div className="hero-halo pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005AAA]/22 blur-3xl" />
            <div className="hero-halo pointer-events-none absolute left-[58%] top-[36%] h-[220px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#35B24A]/16 blur-3xl [animation-delay:1.4s]" />
            <div className="hero-halo pointer-events-none absolute left-[66%] top-[54%] h-[180px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6A623]/14 blur-3xl [animation-delay:2.2s]" />

            <p className="hero-kicker relative mb-5 text-[11px] font-black uppercase tracking-[0.24em] text-white/86 drop-shadow-[0_6px_18px_rgba(0,0,0,.38)] sm:text-xs">
              JETAMA SDN. BHD.
            </p>

            <h1 className="title-glow relative mx-auto flex items-center justify-center whitespace-nowrap gap-2 text-[clamp(2rem,5vw,5.2rem)] font-black leading-none tracking-[-0.045em]">
              <span className="hero-word hero-word-1 text-[#35B24A] drop-shadow-[0_12px_28px_rgba(0,0,0,.46)]">
                Redefining
              </span>
              <span className="hero-word hero-word-2 text-[#005AAA] drop-shadow-[0_12px_30px_rgba(255,255,255,.18)]">
                Water
              </span>
              <span className="hero-word hero-word-3 text-[#005AAA] drop-shadow-[0_12px_30px_rgba(0,0,0,.42)]">
                &
              </span>
              <span className="hero-word hero-word-4 text-[#F6A623] drop-shadow-[0_12px_28px_rgba(0,0,0,.44)]">
                Energy
              </span>
            </h1>

            <div className="relative mx-auto mt-7 h-[3px] max-w-md overflow-hidden rounded-full bg-white/18">
              <div className="h-full w-full bg-gradient-to-r from-[#35B24A] via-[#005AAA] to-[#F6A623]" />
            </div>

            <p className="relative mx-auto mt-7 max-w-3xl text-base font-semibold leading-8 text-white drop-shadow-[0_8px_24px_rgba(0,0,0,.52)] sm:text-lg">
              Reliable treated water services, renewable energy initiatives and
              strategic development around Sabah.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#005AAA] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(0,90,170,.28)] transition hover:-translate-y-1 hover:bg-[#35B24A]"
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

          <div className="absolute inset-0 bg-gradient-to-t from-[#052B4F]/90 via-[#052B4F]/25 to-transparent" />
          <div
            className="absolute bottom-0 left-0 h-24 w-full bg-[linear-gradient(100deg,rgba(0,90,170,.22),rgba(53,178,74,.16),rgba(245,166,35,.14))]"
            style={{
              clipPath:
                "polygon(0 35%, 26% 5%, 54% 42%, 76% 12%, 100% 40%, 100% 100%, 0 100%)",
            }}
          />
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden px-4 py-20 sm:px-10 lg:px-16">
          <SectionGeometricBackground />
          <div className="relative">
            <p className="scroll-reveal-right text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
              Redefining Water & Energy
            </p>

            <h2 className="scroll-reveal-right mt-3 text-4xl font-black leading-tight tracking-[-0.04em] text-[#005AAA] md:text-5xl">
              What Defines Us
            </h2>

            <p className="scroll-reveal-right mt-6 text-lg leading-9 text-slate-600">
              JETAMA provides the foundation for treated water services across
              key areas of Sabah while continuing to build stronger governance,
              operational excellence and future-ready sustainability.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:max-w-[560px]">
              {aboutStats.map(([value, label], index) => (
                <div
                  key={label}
                  className="scroll-scale rounded-[24px] bg-[#f8fbff]/90 p-5 shadow-[0_18px_55px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_70px_rgba(0,90,170,.16)]"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <p className="text-3xl font-black tracking-tight text-[#005AAA] sm:text-4xl">
                    {value}
                  </p>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#F6A623] sm:text-xs">
                    {label}
                  </p>
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
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
              Explore JETAMA Group of Companies
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#005AAA] md:text-5xl">
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
                  style={{
                    backgroundColor: item.color,
                    clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 62%)",
                  }}
                />

                <div className="relative mb-7 flex h-36 items-center justify-center rounded-[1.6rem] bg-[#f8fbff]/90 p-5 ring-1 ring-[#DCEBF3]">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className={`object-contain drop-shadow-[0_12px_28px_rgba(0,44,85,0.18)] transition duration-500 group-hover:scale-105 ${
                      item.title.includes("Batu Sapi") ||
                      item.title.includes("Babagon")
                        ? "max-h-36 max-w-[112%] scale-140 group-hover:scale-[1.16]"
                        : "max-h-24 max-w-full"
                    }`}
                  />
                </div>

                <div
                  className="relative mb-4 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>

                <h3 className="relative text-2xl font-black leading-tight tracking-[-0.02em]">
                  <CompanyTitle title={item.title} />
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
        <SectionGeometricBackground variant="bright" />

        <div className="relative mx-auto max-w-6xl">
          <div className="scroll-reveal mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#35B24A]">
                Latest Updates
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#005AAA] md:text-5xl">
                News & Events
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Stay updated with JETAMA’s latest corporate news, events and
                sustainability initiatives.
              </p>
            </div>

            <Link
              to="/news"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#005AAA] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_16px_40px_rgba(0,90,170,.18)] transition hover:-translate-y-1 hover:bg-[#35B24A]"
            >
              View All News
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="scroll-scale relative overflow-hidden rounded-[2rem] border border-[#DCEBF3] bg-white/88 p-4 shadow-[0_24px_75px_rgba(0,90,170,.12)] backdrop-blur-md md:p-5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#35B24A] via-[#005AAA] to-[#F6A623]" />
            <div
              className="pointer-events-none absolute right-0 top-0 h-32 w-80 bg-[#005AAA]/[.06]"
              style={{ clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 62%)" }}
            />
            <div
              className="pointer-events-none absolute left-0 bottom-0 h-28 w-80 bg-[#35B24A]/[.06]"
              style={{ clipPath: "polygon(0 0, 80% 35%, 100% 100%, 0 100%)" }}
            />

            <div className="relative grid gap-5 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
              <a
                key={activeNews.title}
                href={activeNews.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[330px] overflow-hidden rounded-[1.55rem] bg-[#052B4F] shadow-[0_18px_55px_rgba(0,44,85,.18)] transition duration-500 hover:-translate-y-1"
              >
                <img
                  key={`${activeNews.title}-${activeNews.image}`}
                  src={activeNews.image}
                  alt={activeNews.title}
                  onError={handleNewsImageError}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,22,42,.88)_0%,rgba(2,22,42,.52)_44%,rgba(2,22,42,.10)_100%)]" />

                <div className="absolute left-5 top-5 overflow-hidden rounded-full border border-white/25 bg-white/18 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(0,0,0,.18)] backdrop-blur-md">
                  {formatNewsDisplayDate(activeNews.date)}
                </div>

                <div className="absolute bottom-0 left-0 max-w-3xl p-5 md:p-6">
                  <div className="mb-3 inline-flex rounded-full bg-white/16 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    Latest Update
                  </div>

                  <h3 className="line-clamp-3 text-xl font-black leading-tight text-white md:text-2xl">
                    {activeNews.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-white/82 md:text-base">
                    {activeNews.excerpt}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-[#005AAA] transition group-hover:bg-[#F6A623] group-hover:text-[#052B4F]">
                    Read Full Story
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-3">
                {sortedLatestNews.map((item, index) => {
                  const isActive = index === activeNewsIndex;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveNewsIndex(index)}
                      className={`group relative overflow-hidden rounded-[1.25rem] border bg-white/86 p-3 text-left shadow-[0_10px_28px_rgba(15,60,110,.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_42px_rgba(0,90,170,.12)] ${
                        isActive
                          ? "border-[#F6A623]/70 ring-1 ring-[#F6A623]/40"
                          : "border-[#DCEBF3]"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 h-full w-1.5 transition ${
                          isActive
                            ? "bg-[#F6A623]"
                            : "bg-[#35B24A]/55 group-hover:bg-[#005AAA]"
                        }`}
                      />

                      <div className="relative flex gap-3 pl-1">
                        <div className="h-[78px] w-[92px] shrink-0 overflow-hidden rounded-[1rem] bg-[#005AAA] shadow-sm">
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={handleNewsImageError}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="min-w-0 flex-1 py-0.5">
                          <div className="mb-1.5 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.14em] text-[#35B24A]">
                            <CalendarDays size={12} />
                            {formatNewsDisplayDate(item.date)}
                          </div>
                          <h3 className="line-clamp-2 text-sm font-black leading-snug text-[#052B4F]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-500">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}

                <div className="mt-1 flex items-center justify-between rounded-[1.2rem] border border-[#DCEBF3] bg-white/80 p-2.5 shadow-sm backdrop-blur-md">
                  <button
                    type="button"
                    aria-label="Previous news"
                    onClick={prevNews}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCEBF3] bg-white text-[#005AAA] transition hover:border-[#F6A623] hover:bg-[#F6A623] hover:text-[#052B4F]"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    {sortedLatestNews.map((item, index) => (
                      <button
                        key={item.title}
                        type="button"
                        aria-label={`Show news ${index + 1}`}
                        onClick={() => setActiveNewsIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${
                          activeNewsIndex === index
                            ? "w-10 bg-[#F6A623]"
                            : "w-2.5 bg-[#DCEBF3] hover:bg-[#35B24A]"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    aria-label="Next news"
                    onClick={nextNews}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCEBF3] bg-white text-[#005AAA] transition hover:border-[#F6A623] hover:bg-[#F6A623] hover:text-[#052B4F]"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
