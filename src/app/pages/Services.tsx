import { Link } from "react-router";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Droplets,
  Factory,
  Gauge,
  MapPin,
  ShieldCheck,
  Waves,
} from "lucide-react";

import damHeroImage from "@/assets/DJI_0298.jpg";
import moyogImage from "@/assets/MOYOG.jpg";
import telibongImage from "@/assets/TELIBONG.jpg";
import kasiguiImage from "@/assets/KASIGUI.jpg";

const serviceCards = [
  {
    title: "Overview",
    path: "/services/overview",
    icon: Droplets,
    text: "Scope of works, rehabilitation, construction of new facilities, and operation & maintenance responsibilities.",
  },
  {
    title: "Our Facilities",
    path: "/services/our-facilities",
    icon: Factory,
    text: "Babagon Dam, Moyog Water Treatment Plant, existing treatment plants, reservoirs and pipelines.",
  },
  {
    title: "Total Capability",
    path: "/services/total-capability",
    icon: Gauge,
    text: "Water quality standards and treated water quantity growth delivered by JETAMA Sdn. Bhd.",
  },
];

const highlights = [
  "Rehabilitation & refurbishment of existing treatment plants",
  "Construction of Moyog WTP, Babagon Dam, reservoirs and pipelines",
  "Operation and maintenance during the concession period",
  "Water quality and production capability monitoring",
];

const featuredFacilities = [
  {
    name: "Moyog Water Treatment Plant",
    image: moyogImage,
    detail:
      "165 MLD design flow and currently produces about 185-190 MLD of potable water.",
  },
  {
    name: "Telibong Water Treatment Plant",
    image: telibongImage,
    detail:
      "Supplies treated water for Tuaran, Telipok and Tamparuli districts.",
  },
  {
    name: "Kasigui Water Treatment Plant",
    image: kasiguiImage,
    detail:
      "Supports Penampang, Putatan and surrounding areas from the Moyog River source.",
  },
];

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-20 h-44 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-transparent via-white/25 to-white/70" />

      <div className="absolute left-[-5%] top-8 h-10 w-[110%] rounded-[50%] bg-white/55 blur-2xl" />
      <div className="absolute left-[-10%] top-14 h-12 w-[120%] rounded-[50%] bg-white/60 blur-xl" />

      <svg
        className="absolute -bottom-4 left-0 h-44 w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        {/* White Foam */}
        <path
          d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z"
          fill="rgba(255,255,255,1)"
        />

        {/* Soft White Layer */}
        <path
          d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z"
          fill="rgba(248,255,250,.98)"
        />

        {/* Light Green */}
        <path
          d="M0,100 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z"
          fill="rgba(103,214,111,.55)"
        />

        {/* JETAMA Green */}
        <path
          d="M0,125 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z"
          fill="rgba(65,182,80,.75)"
        />

        {/* Corporate Blue */}
        <path
          d="M0,155 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z"
          fill="rgba(0,84,166,.78)"
        />

        {/* Main Blue */}
        <path
          d="M0,182 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z"
          fill="rgba(0,70,145,.88)"
        />

        {/* Deep JETAMA Blue */}
        <path
          d="M0,210 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z"
          fill="rgba(0,59,122,.96)"
        />
      </svg>

      {/* Left Splash */}
      <div className="absolute bottom-24 left-[8%]">
        <div className="h-8 w-5 animate-bounce rounded-full bg-white/80 blur-[1px]" />
      </div>

      <div className="absolute bottom-36 left-[10%]">
        <div className="h-4 w-4 animate-ping rounded-full bg-[#67D66F]/90" />
      </div>

      <div className="absolute bottom-30 left-[12%]">
        <div className="h-3 w-3 animate-bounce rounded-full bg-white/70" />
      </div>

      {/* Center Splash */}
      <div className="absolute bottom-28 left-[48%]">
        <div className="h-10 w-6 animate-bounce rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      </div>

      <div className="absolute bottom-40 left-[50%]">
        <div className="h-4 w-4 animate-ping rounded-full bg-[#41B650]" />
      </div>

      <div className="absolute bottom-34 left-[52%]">
        <div className="h-3 w-3 animate-bounce rounded-full bg-white/90" />
      </div>

      {/* Right Splash */}
      <div className="absolute bottom-26 right-[12%]">
        <div className="h-9 w-5 animate-bounce rounded-full bg-white/80" />
      </div>

      <div className="absolute bottom-38 right-[10%]">
        <div className="h-5 w-5 animate-ping rounded-full bg-[#67D66F]/90" />
      </div>

      <div className="absolute bottom-30 right-[8%]">
        <div className="h-3 w-3 animate-bounce rounded-full bg-white/70" />
      </div>

      {/* Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />

      {/* Floating Drops */}
      <div className="absolute left-[20%] bottom-20 h-2 w-2 animate-ping rounded-full bg-white" />
      <div className="absolute left-[35%] bottom-32 h-3 w-3 animate-bounce rounded-full bg-[#67D66F]" />
      <div className="absolute left-[65%] bottom-24 h-2 w-2 animate-ping rounded-full bg-white" />
      <div className="absolute left-[80%] bottom-36 h-4 w-4 animate-bounce rounded-full bg-[#41B650]" />
      <div className="absolute bottom-20 left-[55%] h-5 w-5 animate-bounce rounded-full bg-white/70" />
      <div className="absolute bottom-28 left-[72%] h-2 w-2 animate-ping rounded-full bg-[#0054A6]" />
      <div className="absolute bottom-18 left-[90%] h-4 w-4 animate-pulse rounded-full bg-white/70" />

      {/* Glow */}
      <div className="absolute bottom-10 left-0 right-0 h-10 bg-[#0054A6]/20 blur-3xl" />
      <div className="absolute bottom-19 left-0 right-0 h-6 bg-white/40 blur-2xl" />
    </div>
  );
}

export default function Services() {
  return (
    <main className="bg-[#F4F8FC] text-slate-900">
      <section className="relative overflow-hidden bg-[#062A44] pt-32 text-white">
        <img
          src={damHeroImage}
          alt="JETAMA water facilities"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,42,68,0.96)_0%,rgba(0,90,170,0.82)_52%,rgba(53,178,74,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.18),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/75">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-white">
              Services & Facilities
            </span>
          </div>
          
          <h1 className="max-w-5xl text-5xl font-black leading-[1.04] text-white sm:text-6xl">
            Services & Facilities
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/84">
            JETAMA manages strategic water infrastructure,
            treatment facilities, rehabilitation works and
            operational capability for reliable treated water
            supply.
          </p>
        </div>
      </section>
      <OceanWaveDivider />

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
              Scope of Works
            </p>
            <h2 className="mt-4 text-4xl font-black text-[#062A44] sm:text-5xl">
              Reliable Water Service Delivery
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The services section is organised into separate
              pages so users can browse JETAMA's overview,
              facilities and total capability clearly from the
              navigation menu.
            </p>
            <div className="mt-8 grid gap-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-[#F4F8FC] p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#35B24A]"
                    size={23}
                  />
                  <p className="font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {featuredFacilities.map((facility) => (
              <article
                key={facility.name}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,44,85,0.10)] ring-1 ring-slate-100"
              >
                <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="h-56 w-full object-cover sm:h-full"
                  />
                  <div className="p-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF8EE] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#168A46]">
                      <MapPin size={15} />
                      Facility
                    </div>
                    <h3 className="text-2xl font-black text-[#005AAA]">
                      {facility.name}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {facility.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <OceanWaveDivider />

      <section className="relative -mt-32 z-10 px-16 pb-16 pt-28 sm:px-15 lg:px-5">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-3">
          {serviceCards.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.path}
                className="group rounded-[30px] bg-white p-8 shadow-[0_22px_70px_rgba(0,44,85,0.09)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_85px_rgba(0,90,170,0.14)]"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005AAA] to-[#35B24A] text-white shadow-lg">
                  <Icon size={32} />
                </div>
                <h2 className="text-2xl font-black text-[#062A44]">
                  {item.title}
                </h2>
                <p className="mt-4 min-h-[96px] leading-7 text-slate-600">
                  {item.text}
                </p>

              </Link>
            );
          })}
        </div>
      </section>

    </main>
  );
}