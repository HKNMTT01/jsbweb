import { Link, Navigate, useParams } from "react-router";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Droplets,
  Factory,
  FlaskConical,
  HardHat,
  Landmark,
  ShieldCheck,
  SunMedium,
  Target,
  Zap,
} from "lucide-react";

import energyHero from "@/assets/DJI_0298.jpg";
import jesbLogo from "@/assets/LOGO-JESB.png";
import waterLogo from "@/assets/jwater.png";
import waterHero from "@/assets/jetama-dam-hero.jpg";
import moyogPlant from "@/assets/MOYOG.jpg";
import telibongPlant from "@/assets/TELIBONG.jpg";
import kasiguiPlant from "@/assets/KASIGUI.jpg";
import paparPlant from "@/assets/PAPAR.jpg";
import tamparuliPlant from "@/assets/TAMPARULI.jpg";
import tuaranPlant from "@/assets/TUARAN.jpg";


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


type SubsidiaryKey = "water" | "energy";

export default function Subsidiary() {
  const { type } = useParams();
  const selectedSubsidiary = type as SubsidiaryKey | undefined;

  if (selectedSubsidiary && selectedSubsidiary !== "water" && selectedSubsidiary !== "energy") {
    return <Navigate to="/subsidiary" replace />;
  }

  const pageTitle =
    selectedSubsidiary === "water"
      ? "Jetama Water Sdn. Bhd."
      : selectedSubsidiary === "energy"
        ? "Jetama Energy Sdn. Bhd."
        : "Subsidiaries";

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-900">
      <PageStyles />
      <Hero
        title={pageTitle}
        current={pageTitle}
        image={selectedSubsidiary === "energy" ? energyHero : waterHero}
        subtitle={selectedSubsidiary ? "View subsidiary details, corporate profile, facilities and operational information." : "Explore JETAMA Group of Companies and its subsidiary structure."}
      />

      {!selectedSubsidiary && <SubsidiaryOverview />}
      {selectedSubsidiary === "water" && <JetamaWaterDetail />}
      {selectedSubsidiary === "energy" && <JetamaEnergyDetail />}
    </main>
  );
}

function SubsidiaryOverview() {
  const subsidiaryCards = [
    { title: "Jetama Water Sdn. Bhd.", path: "/subsidiary/water", icon: Droplets, logo: waterLogo, text: "Water treatment operations and potable water service support for Sabah.", color: "from-[#005AAA] to-[#35B24A]" },
    { title: "Jetama Energy Sdn. Bhd.", path: "/subsidiary/energy", icon: Zap, logo: jesbLogo, text: "Renewable energy initiatives supporting Sabah's low-carbon direction.", color: "from-[#005AAA] to-[#F6A623]" },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Jetama Subsidiaries Chart</p>
          <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Jetama Group of Companies</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Jetama has grown significantly over the years and now encompasses companies under the Jetama Group, supporting water and energy development across Sabah.
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-5xl gap-8 md:grid-cols-2">
          {subsidiaryCards.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.path} className="group relative overflow-hidden rounded-[30px] bg-white p-8 text-center jetama-card transition hover:-translate-y-2">
                <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.color}`} />
                <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#35B24A]/10 transition group-hover:scale-125" />
                <div className="flex h-40 items-center justify-center rounded-[24px] bg-[#f8fbff] p-5">
                  <img src={item.logo} alt={item.title} className="max-h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,44,85,0.16)] transition group-hover:scale-105" />
                </div>
                <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#005AAA]">
                  <Icon size={14} /> Subsidiary
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-[#052b4f]">{item.title}</h3>
                <p className="mx-auto mt-4 min-h-[72px] max-w-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#005AAA]">
                  View Details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JetamaWaterDetail() {
  const waterStats = [
    ["209", "Staffs"],
    ["6", "Water Treatment Plants"],
    ["80 km", "Concession Area"],
    ["200 km", "Transmission Mains"],
    ["30", "Service Reservoirs"],
    ["1", "Babagon Dam"],
  ];

  const waterPlants = [
    { title: "Moyog Water Treatment Plant", image: moyogPlant },
    { title: "Telibong Water Treatment Plant", image: telibongPlant },
    { title: "Kasigui Water Treatment Plant", image: kasiguiPlant },
    { title: "Papar Water Treatment Plant", image: paparPlant },
    { title: "Tamparuli Water Treatment Plant", image: tamparuliPlant },
    { title: "Tuaran Water Treatment Plant", image: tuaranPlant },
  ];

  const departments = [
    { icon: Factory, title: "Plant Operation & Maintenance", text: "Operates and maintains treatment and transmission facilities." },
    { icon: FlaskConical, title: "Laboratory, Quality & Environment", text: "Monitors treatment processes and environmental programmes." },
    { icon: ShieldCheck, title: "Safety, Health & Security", text: "Promotes safe work culture, audits and risk control." },
    { icon: Landmark, title: "Finance", text: "Supports reporting, procurement and financial governance." },
    { icon: HardHat, title: "Technical & Transmission", text: "Optimizes maintenance systems and transmission mains." },
  ];

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <img src={waterLogo} alt="Jetama Water" className="mb-8 max-h-28 w-auto object-contain" />
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">About Jetama Water</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Potable Water Operations</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Jetama Water operates key water treatment facilities from Tuaran to Papar and supports potable drinking water services for consumers on Sabah's West Coast.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {waterStats.map(([value, label]) => (
              <div key={label} className="rounded-[24px] bg-[#f8fbff] p-5 jetama-card transition hover:-translate-y-1">
                <p className="text-3xl font-black text-[#005AAA]">{value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#35B24A]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Facilities</p>
          <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA]">6 Water Treatment Plants</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {waterPlants.map((plant) => (
              <article key={plant.title} className="group overflow-hidden rounded-[30px] bg-white jetama-card transition hover:-translate-y-2">
                <div className="h-56 overflow-hidden">
                  <img src={plant.image} alt={plant.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="flex items-center gap-3 p-6">
                  <Building2 className="text-[#35B24A]" size={22} />
                  <h3 className="font-black uppercase tracking-wide text-[#052b4f]">{plant.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[28px] bg-white p-6 jetama-card transition hover:-translate-y-2">
                  <Icon className="text-[#005AAA]" size={30} />
                  <h3 className="mt-5 text-xl font-black text-[#052b4f]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function JetamaEnergyDetail() {
  const energyValues = [
    "People", "Client", "Integrity", "Commitment", "Innovation & Change", "Excellence"
  ];

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <img src={jesbLogo} alt="Jetama Energy" className="mb-8 max-h-28 w-auto object-contain" />
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Jetama Energy</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA] md:text-5xl">Renewable Energy Direction</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Jetama Energy supports Sabah's sustainable and low carbon environment through economical, innovative and dependable renewable energy solutions.
            </p>
          </div>
          <div className="rounded-[34px] bg-gradient-to-br from-[#005AAA] via-[#006fba] to-[#35B24A] p-8 text-white shadow-[0_30px_90px_rgba(0,90,170,.22)]">
            <Target className="text-[#F6A623]" size={38} />
            <h3 className="mt-5 text-3xl font-black uppercase">Vision & Mission</h3>
            <p className="mt-5 leading-8 text-white/82">
              To energize Sabah towards a sustainable and low carbon environment through renewable energy solutions and a culture of excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_52%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#F6A623]">Our Values</p>
          <h2 className="mt-4 text-4xl font-black uppercase text-[#005AAA]">Building Low Carbon Growth</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {energyValues.map((value) => (
              <div key={value} className="rounded-[28px] bg-white p-6 jetama-card transition hover:-translate-y-2">
                <SunMedium className="text-[#F6A623]" size={30} />
                <h3 className="mt-5 text-xl font-black uppercase text-[#052b4f]">{value}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Supporting professional standards, innovation and responsibility in renewable energy delivery.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
