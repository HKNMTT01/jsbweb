import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Factory,
  Gauge,
  ShieldCheck,
  Waves,
} from "lucide-react";

import damHeroImage from "@/assets/DJI_0298.jpg";

function PageStyles() {
  return (
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(26px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes floatSoft {
        0%,100% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(16px,-14px,0) rotate(2deg); }
      }

      .page-animate {
        animation: fadeUp .7s cubic-bezier(.2,.8,.2,1) both;
      }

      .shape-float {
        animation: floatSoft 12s ease-in-out infinite;
      }

      .jetama-card {
        box-shadow: 0 18px 55px rgba(15,60,110,.08);
      }

      .jetama-card:hover {
        box-shadow: 0 26px 70px rgba(0,90,170,.16);
      }
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
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.11]"
        />
      )}

      <div className="shape-float absolute left-[-180px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="shape-float absolute right-[-160px] top-32 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5 [animation-delay:1.5s]" />
      <div className="absolute right-[18%] top-24 -z-10 h-32 w-72 rotate-[-10deg] bg-[#F6A623]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="page-animate max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-700">
            <Link to="/" className="transition hover:text-[#005AAA]">
              Home
            </Link>
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
    {
      title: "Overview",
      path: "/services/overview",
      icon: Droplets,
      text: "Scope of works, rehabilitation, new facilities and operation responsibilities.",
    },
    {
      title: "Our Facilities",
      path: "/services/our-facilities",
      icon: Factory,
      text: "Babagon Dam, treatment plants, reservoirs, pipelines and existing facilities.",
    },
    {
      title: "Total Capability",
      path: "/services/total-capability",
      icon: Gauge,
      text: "Water quality standards and treated water production capability.",
    },
  ];

  const scopeHighlights = [
    "Rehabilitation and refurbishment of existing treatment plants.",
    "Construction of Moyog WTP, Babagon Dam, reservoirs and pipelines.",
    "Operation and maintenance during the concession period.",
    "Water quality and production capability monitoring.",
  ];

  const facilityHighlights = [
    "Moyog Water Treatment Plant",
    "Telibong Water Treatment Plant",
    "Kasigui Water Treatment Plant",
    "Papar Water Treatment Plant",
    "Tamparuli Water Treatment Plant",
    "Tuaran Water Treatment Plant",
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

      <section className="relative overflow-hidden bg-white py-24">
        <div
          className="absolute left-0 top-0 h-full w-[54px] bg-cover bg-center opacity-95 md:w-[70px]"
          style={{ backgroundImage: `url(${damHeroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.97)_0%,rgba(255,255,255,.93)_50%,rgba(235,248,255,.88)_100%)]" />
        <div
          className="absolute left-[70px] top-20 h-40 w-[520px] bg-[#005AAA]/[.055]"
          style={{ clipPath: "polygon(0 10%, 88% 0, 100% 72%, 0 100%)" }}
        />
        <div
          className="absolute right-0 top-36 h-40 w-[620px] bg-[#35B24A]/[.065]"
          style={{ clipPath: "polygon(0 26%, 100% 0, 100% 74%, 12% 100%)" }}
        />
        <div
          className="absolute bottom-20 right-[10%] h-28 w-40 bg-[#005AAA]/65"
          style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_24%,rgba(255,255,255,.96),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(0,90,170,.08),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pl-[88px] lg:px-8 lg:pl-8">
          <div className="page-animate max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-[#35B24A]">
              Scope Of Works
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[1.02] tracking-[-0.045em] text-[#005AAA] md:text-5xl">
              Facilities Supporting
              <span className="block">Reliable Water Delivery</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
            <div className="space-y-6">
              {scopeHighlights.map((item, index) => (
                <div
                  key={item}
                  className="page-animate flex min-h-[78px] items-center gap-5 rounded-[26px] bg-white/82 px-7 py-5 shadow-[0_18px_55px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(0,90,170,.13)]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#35B24A] bg-white text-[#35B24A]">
                    <CheckCircle2 size={21} strokeWidth={2.8} />
                  </span>
                  <p className="text-base font-black leading-8 text-[#052b4f] sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {facilityHighlights.map((item, index) => (
                <div
                  key={item}
                  className="page-animate flex min-h-[70px] items-center gap-4 rounded-[20px] border border-[#DCEBF3] bg-white/88 px-5 py-4 shadow-[0_10px_28px_rgba(15,60,110,.08)] backdrop-blur transition hover:-translate-y-1 hover:border-[#35B24A]/35 hover:bg-white hover:shadow-[0_18px_42px_rgba(0,90,170,.13)]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8EE] text-[#35B24A]">
                    <ShieldCheck size={20} strokeWidth={2.6} />
                  </span>
                  <p className="text-sm font-black text-[#005AAA] sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#005AAA] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">
              Operational Focus
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
              Water Treatment Capability
            </h2>
            <p className="mt-5 leading-8 text-white/80">
              Key facilities are supported by operation, maintenance, quality assurance
              and continuous improvement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Waves,
                title: "Water Supply",
                text: "Supports treated water availability.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Control",
                text: "Maintains service standards.",
              },
              {
                icon: Factory,
                title: "Infrastructure",
                text: "Connects treatment and distribution.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[24px] bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <Icon className="text-[#F6A623]" size={28} />
                  <h3 className="mt-4 font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/78">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
