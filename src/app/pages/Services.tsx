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


function CorporateCleanStyles() {
  return (
    <style>{`
      @keyframes softCorporateFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; }
        50% { transform: translate3d(18px,-14px,0) rotate(1deg); opacity: .82; }
      }
      @keyframes softCorporateBeam {
        0%, 100% { transform: translateX(-8%) rotate(-8deg); opacity: .16; }
        50% { transform: translateX(12%) rotate(-8deg); opacity: .30; }
      }
      @keyframes softTextLift {
        0% { opacity: 0; transform: translateY(24px); filter: blur(8px); }
        100% { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      .corporate-hero-title { animation: softTextLift .85s cubic-bezier(.2,.8,.2,1) both; }
      .corporate-hero-copy { animation: softTextLift .95s cubic-bezier(.2,.8,.2,1) .12s both; }
      .corporate-float-a { animation: softCorporateFloat 12s ease-in-out infinite; }
      .corporate-float-b { animation: softCorporateFloat 15s ease-in-out infinite reverse; }
      .corporate-beam { animation: softCorporateBeam 10s ease-in-out infinite; }
      .corporate-glass {
        background: linear-gradient(135deg, rgba(255,255,255,.88), rgba(248,251,255,.72), rgba(244,255,247,.72));
        border: 1px solid rgba(255,255,255,.78);
        box-shadow: 0 28px 90px rgba(0,90,170,.14);
        backdrop-filter: blur(14px);
      }
    `}</style>
  );
}

function CorporateHeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <CorporateCleanStyles />
      <div className="absolute inset-0 bg-transparent" />
      <div className="corporate-beam absolute left-[-18%] top-[8%] h-[360px] w-[58%] bg-[linear-gradient(105deg,transparent,rgba(255,255,255,.95),transparent)] blur-[6px]" />
      <div className="corporate-beam absolute right-[-18%] top-[4%] h-[360px] w-[58%] bg-[linear-gradient(105deg,transparent,rgba(246,166,35,.22),transparent)] blur-[12px] [animation-delay:2s]" />
      <div className="corporate-float-a absolute left-[-120px] top-24 h-64 w-[560px] bg-[#005AAA]/[.075]" style={{ clipPath: "polygon(0 25%, 84% 0, 100% 70%, 12% 100%)" }} />
      <div className="corporate-float-b absolute right-[-140px] top-36 h-72 w-[620px] bg-[#35B24A]/[.085]" style={{ clipPath: "polygon(9% 0, 100% 24%, 82% 100%, 0 72%)" }} />
      <div className="corporate-float-a absolute bottom-4 left-[22%] h-28 w-[520px] bg-[#F5A623]/[.075]" style={{ clipPath: "polygon(0 35%, 74% 0, 100% 65%, 22% 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7fbff] via-white/80 to-transparent" />
    </div>
  );
}


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


export default function Services() {
  return (
    <main className="bg-[#f7fbff] text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#f7fbff] pt-36 text-slate-900">
        <CorporateHeroAtmosphere />
<img
          src={damHeroImage}
          alt="JETAMA water facilities"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,90,170,0.10),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#005AAA]">
              Services & Facilities
            </span>
          </div>
          
          <h1 className="corporate-hero-title max-w-5xl text-5xl font-black leading-[1.04] text-[#005AAA] sm:text-6xl">
            Services & Facilities
          </h1>
          <p className="corporate-hero-copy mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            JETAMA manages strategic water infrastructure,
            treatment facilities, rehabilitation works and
            operational capability for reliable treated water
            supply.
          </p>
        </div>
      </section>


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