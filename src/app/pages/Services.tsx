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