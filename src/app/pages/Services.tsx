import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
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


function PageStyles() {
  return (
    <style>{`
      @keyframes fadeUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes floatSoft { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(16px,-14px,0) rotate(2deg); } }
      .page-animate { animation: fadeUp .7s cubic-bezier(.2,.8,.2,1) both; }
      .shape-float { animation: floatSoft 12s ease-in-out infinite; }
      .jetama-card { box-shadow: 0 18px 55px rgba(15,60,110,.08); }
      .jetama-card:hover { box-shadow: 0 26px 70px rgba(0,90,170,.16); }
    `}</style>
  );
}


function Hero({
  title,
  subtitle,
  current,
  image,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  current: string;
  image?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_46%,#f8fff6_100%)]" />
      {image && <img src={image} alt={title} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.11]" />}
      <div className="shape-float absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="shape-float absolute right-[-160px] top-32 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />
      <div className="absolute right-[18%] top-24 -z-10 h-32 w-72 rotate-[-10deg] bg-[#F6A623]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="page-animate max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
            <Link to="/" className="transition hover:text-[#005AAA]">Home</Link>
            <ChevronRight size={15} className="text-slate-400" />
            <span className="font-bold text-[#005AAA]">{current}</span>
          </div>

          {eyebrow && (
            <p className="mb-5 inline-flex rounded-full border border-[#005AAA]/15 bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#35B24A] shadow-sm backdrop-blur">
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.98] tracking-tight text-[#005AAA] md:text-7xl">
            {title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
            <span className="h-[3px] w-10 rounded-full bg-[#35B24A]" />
            <span className="h-[3px] w-6 rounded-full bg-[#F6A623]" />
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}


export default function Services() {
  const serviceCards = [
    { title: "Overview", path: "/services/overview", icon: Droplets, text: "Scope of works, rehabilitation, new facilities and operation responsibilities." },
    { title: "Our Facilities", path: "/services/our-facilities", icon: Factory, text: "Babagon Dam, treatment plants, reservoirs, pipelines and existing facilities." },
    { title: "Total Capability", path: "/services/total-capability", icon: Gauge, text: "Water quality standards and treated water production capability." },
  ];

  const highlights = [
    "Rehabilitation and refurbishment of existing treatment plants.",
    "Construction of Moyog WTP, Babagon Dam, reservoirs and pipelines.",
    "Operation and maintenance during the concession period.",
    "Water quality and production capability monitoring.",
  ];

  const featuredFacilities = [
    { name: "Moyog Water Treatment Plant", image: moyogImage, detail: "165 MLD design flow supporting Kota Kinabalu and surrounding supply areas." },
    { name: "Telibong Water Treatment Plant", image: telibongImage, detail: "Supplies treated water for Tuaran, Telipok and Tamparuli districts." },
    { name: "Kasigui Water Treatment Plant", image: kasiguiImage, detail: "Supports Penampang, Putatan and surrounding areas from the Moyog River source." },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <PageStyles />
      <Hero
        title="Services & Facilities"
        current="Services & Facilities"
        image={damHeroImage}
        subtitle="JETAMA manages strategic water infrastructure, treatment facilities and operational capability to support reliable treated water supply."
      />

      <section className="relative bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Scope of Works</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Reliable Water Service Delivery</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The services section is organised so visitors can browse JETAMA's overview, facilities and total capability clearly from one page.
            </p>
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-[22px] bg-[#f8fbff] p-5 jetama-card">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#35B24A]" size={22} />
                  <p className="font-semibold leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {featuredFacilities.map((facility) => (
              <article key={facility.name} className="group overflow-hidden rounded-[30px] bg-white jetama-card transition hover:-translate-y-2">
                <div className="grid sm:grid-cols-[220px_1fr]">
                  <img src={facility.image} alt={facility.name} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-full" />
                  <div className="p-6">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF8EE] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#168A46]">
                      <MapPin size={15} /> Facility
                    </div>
                    <h3 className="text-2xl font-black text-[#005AAA]">{facility.name}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{facility.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Explore Services</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Service Pages</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.path} className="group relative overflow-hidden rounded-[30px] bg-white p-7 jetama-card transition hover:-translate-y-2">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005AAA] to-[#35B24A] text-white shadow-lg">
                    <Icon size={31} />
                  </div>
                  <h3 className="text-2xl font-black text-[#052b4f]">{item.title}</h3>
                  <p className="mt-4 min-h-[84px] leading-7 text-slate-600">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#005AAA]">
                    View Details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#005AAA] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Operational Focus</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">Water Treatment Capability</h2>
            <p className="mt-5 leading-8 text-white/80">Key facilities are supported by operation, maintenance, quality assurance and continuous improvement.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Waves, title: "Water Supply", text: "Supports treated water availability." },
              { icon: ShieldCheck, title: "Quality Control", text: "Maintains service standards." },
              { icon: Factory, title: "Infrastructure", text: "Connects treatment and distribution." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[24px] bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                  <Icon className="text-[#F6A623]" size={28} />
                  <h3 className="mt-4 font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/78">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
