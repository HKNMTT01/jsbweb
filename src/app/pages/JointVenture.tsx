import { Link } from "react-router";
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  SunMedium,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/jetama-dam-hero.jpg";
import jetamaLogo from "@/assets/jetama-wide-logo-transparent.png";
import alpineLogo from "@/assets/Jetama Pipe - FINAL.png";
import solarLogo from "@/assets/solarpvlogo.png";


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


export default function JointVenture() {
  const jointVentures = [
    { title: "Jetama Alpine Pipe (Sabah) Sdn. Bhd.", path: "/jointventure/jetama-alpine-pipe", logo: alpineLogo, text: "Pipe supply, production and steel section products for Sabah.", accent: "from-[#102f83] to-[#d5282f]", icon: Zap },
    { title: "Solar PV Power Sdn. Bhd.", path: "/jointventure/solar-pv-power", logo: solarLogo, text: "Large scale solar photovoltaic development through strategic renewable energy partnership.", accent: "from-[#35B24A] to-[#F5A623]", icon: SunMedium },
    { title: "Jetama Batu Sapi Solar Sdn. Bhd.", path: "/jointventure/jetama-batu-sapi-solar", logo: jetamaLogo, text: "Large scale solar development at Batu Sapi, Sandakan.", accent: "from-[#102f83] to-[#F5A623]", icon: Zap },
    { title: "Jetama Babagon Floating Solar Sdn. Bhd.", path: "/jointventure/jetama-babagon-floating-solar", logo: jetamaLogo, text: "Floating solar PV development at Babagon Dam, Penampang.", accent: "from-[#102f83] to-[#35B24A]", icon: SunMedium },
  ];

  const focus = [
    ["Strategic Partnerships", "Collaborative ventures that expand JETAMA's capability across water infrastructure and renewable energy."],
    ["Renewable Direction", "Solar initiatives supporting clean energy growth and long-term environmental responsibility."],
    ["Technical Growth", "Industry partnerships that strengthen manufacturing, project delivery and operational capacity."],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <PageStyles />
      <Hero
        title="Our Joint Ventures"
        current="Joint Ventures"
        image={heroImage}
        subtitle="Strategic collaborations supporting Sabah's water infrastructure, pipe manufacturing and renewable energy development."
      />

      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Joint Venture Companies</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Explore Our Strategic Partnerships</h2>
            <p className="mt-5 leading-8 text-slate-600">A clean overview of JETAMA's joint venture companies, designed with the same corporate sustainability direction.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {jointVentures.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.path} className="group relative overflow-hidden rounded-[30px] bg-white p-7 text-center jetama-card transition hover:-translate-y-2">
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.accent}`} />
                  <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#35B24A]/10 transition group-hover:scale-125" />
                  <div className="flex h-36 items-center justify-center rounded-[24px] bg-[#f8fbff] p-5">
                    <img src={item.logo} alt={item.title} className="max-h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,44,85,0.16)] transition group-hover:scale-105" />
                  </div>
                  <div className="mx-auto mt-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005AAA]/10 text-[#005AAA]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-black leading-tight text-[#052b4f]">{item.title}</h3>
                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#005AAA]">
                    View Details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Corporate Direction</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Partnerships With Purpose</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Each joint venture supports the Group's wider direction across infrastructure reliability, energy transition and long-term value creation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {focus.map(([title, text]) => (
              <div key={title} className="rounded-[24px] bg-white p-5 jetama-card transition hover:-translate-y-1">
                <Handshake className="text-[#35B24A]" size={28} />
                <h3 className="mt-4 font-black text-[#052b4f]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
