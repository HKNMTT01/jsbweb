import { Link, Navigate, useParams } from "react-router";
import {
  Award,
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
  ArrowRight,
} from "lucide-react";

import energyHero from "@/assets/DJI_0298.jpg";
import jesbLogo from "@/assets/LOGO-JESB.png";
import waterLogo from "@/assets/jwater.png";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import solarLogo from "@/assets/solarpvlogo.png";

import waterHero from "@/assets/jetama-dam-hero.jpg";
import moyogPlant from "@/assets/MOYOG.jpg";
import telibongPlant from "@/assets/TELIBONG.jpg";
import kasiguiPlant from "@/assets/KASIGUI.jpg";
import paparPlant from "@/assets/PAPAR.jpg";
import tamparuliPlant from "@/assets/TAMPARULI.jpg";
import tuaranPlant from "@/assets/TUARAN.jpg";

type SubsidiaryKey = "water" | "energy" | "solar-pv";

const subsidiaryCards = [
  {
    title: "Jetama Water Sdn. Bhd.",
    path: "/subsidiary/water",
    icon: Droplets,
    logo: waterLogo,
    text: "Water treatment operations and potable water service support for Sabah.",
    color: "from-[#005AAA] to-[#35B24A]",
  },
  {
    title: "Jetama Energy Sdn. Bhd.",
    path: "/subsidiary/energy",
    icon: Zap,
    logo: jesbLogo,
    text: "Renewable energy initiatives supporting Sabah’s low-carbon direction.",
    color: "from-[#005AAA] to-[#F5A623]",
  },
  {
    title: "Solar PV Power Sdn. Bhd.",
    path: "/subsidiary/solar-pv",
    icon: SunMedium,
    logo: solarLogo,
    text: "Large scale solar photovoltaic development under Jetama Energy.",
    color: "from-[#35B24A] to-[#F5A623]",
  },
];

const waterStats = [
  { value: "209", label: "Staffs" },
  { value: "6", label: "Water Treatment Plants" },
  { value: "80 km", label: "Concession Area" },
  { value: "200 km", label: "Transmission Mains" },
  { value: "30", label: "Service Reservoirs" },
  { value: "1", label: "Babagon Dam" },
];

const waterPlants = [
  { title: "Moyog Water Treatment Plant", image: moyogPlant },
  { title: "Telibong Water Treatment Plant", image: telibongPlant },
  { title: "Kasigui Water Treatment Plant", image: kasiguiPlant },
  { title: "Papar Water Treatment Plant", image: paparPlant },
  { title: "Tamparuli Water Treatment Plant", image: tamparuliPlant },
  { title: "Tuaran Water Treatment Plant", image: tuaranPlant },
];

const waterDepartments = [
  {
    title: "Plant Operation & Maintenance",
    icon: Factory,
    text: "Operates and maintains the water treatment and transmission facilities supplying potable water to Kota Kinabalu and the West Coast District, including six treatment plants and Babagon Dam.",
  },
  {
    title: "Laboratory, Quality & Environment",
    icon: FlaskConical,
    text: "Monitors treatment processes through in-house laboratories, ISO systems and environmental programmes to ensure safe, reliable and high-quality potable water.",
  },
  {
    title: "Safety, Health & Security",
    icon: ShieldCheck,
    text: "Promotes safety and well-being through audits, housekeeping campaigns, training, risk assessment and teamwork across all operating plants.",
  },
  {
    title: "Finance",
    icon: Landmark,
    text: "Supports financial reporting, procurement, ERP, e-procurement and warehousing functions in line with Malaysian standards and quality management requirements.",
  },
  {
    title: "Technical & Transmission",
    icon: HardHat,
    text: "Optimizes operational efficiency through engineering, maintenance systems and management of approximately 200 km of transmission mains and 30 storage reservoirs.",
  },
];

const energyValues = [
  {
    title: "PEOPLE",
    text: "Empowering and Caring for each other to create a safe and respectful working environment where our people can grow, perform, and succeed.",
  },
  {
    title: "CLIENT",
    text: "The success of our clients radiates our success in delivery.",
  },
  {
    title: "INTEGRITY",
    text: "Empowered to perform with consistently high professional and ethical standards in everything we do by embracing trust, honesty, fairness, respect and safety.",
  },
  {
    title: "COMMITMENT",
    text: "Engaging, loyal and accountable to our stakeholders in achieving our common goals and excellence.",
  },
  {
    title: "INNOVATION & CHANGE",
    text: "Remaining ahead of an ever-changing environment by being entrepreneurial, passionate, open, innovative and smart.",
  },
  {
    title: "EXCELLENCE",
    text: "Leading the industry by pursuing excellence and innovative solutions in demonstrating the highest standards by leveraging experience and unlocking the hidden potentials to create a more efficient and sustainable low carbon state.",
  },
];

const projectMilestones = [
  "28 November 2017 : Letter of Acceptance of Offer from ST.",
  "16 November 2020 : Letter of Notification from ST for acceptance of price revision.",
  "15 December 2021 : Power Purchase Agreement Signed.",
  "Scheduled Commercial Operations Date : 30th June 2023.",
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
        <path d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z" fill="rgba(255,255,255,1)" />
        <path d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z" fill="rgba(248,255,250,.98)" />
        <path d="M0,100 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z" fill="rgba(103,214,111,.55)" />
        <path d="M0,125 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z" fill="rgba(65,182,80,.75)" />
        <path d="M0,155 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z" fill="rgba(0,84,166,.78)" />
        <path d="M0,182 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z" fill="rgba(0,70,145,.88)" />
        <path d="M0,210 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z" fill="rgba(0,59,122,.96)" />
      </svg>

      <div className="absolute bottom-24 left-[8%] h-8 w-5 animate-bounce rounded-full bg-white/80 blur-[1px]" />
      <div className="absolute bottom-36 left-[10%] h-4 w-4 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute bottom-28 left-[48%] h-10 w-6 animate-bounce rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      <div className="absolute bottom-40 left-[50%] h-4 w-4 animate-ping rounded-full bg-[#41B650]" />
      <div className="absolute bottom-24 right-[12%] h-9 w-5 animate-bounce rounded-full bg-white/80" />
      <div className="absolute bottom-36 right-[10%] h-5 w-5 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
    </div>
  );
}

export default function Subsidiary() {
  const { type } = useParams();
  const selectedSubsidiary = type as SubsidiaryKey | undefined;

  if (
    selectedSubsidiary &&
    selectedSubsidiary !== "water" &&
    selectedSubsidiary !== "energy" &&
    selectedSubsidiary !== "solar-pv"
  ) {
    return <Navigate to="/subsidiary" replace />;
  }

  const pageTitle =
    selectedSubsidiary === "water"
      ? "Jetama Water Sdn. Bhd."
      : selectedSubsidiary === "energy"
        ? "Jetama Energy Sdn. Bhd."
        : selectedSubsidiary === "solar-pv"
          ? "Solar PV Power Sdn. Bhd."
          : "Subsidiaries";

  return (
    <main className="overflow-hidden bg-white text-[#1f2933]">
      <section className="relative overflow-hidden bg-[#062A44] pb-24 pt-32 text-white">
        <img
          src={
            selectedSubsidiary === "energy" ||
            selectedSubsidiary === "solar-pv"
              ? energyHero
              : waterHero
          }
          alt={pageTitle}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,27,70,0.94)_0%,rgba(11,47,127,0.78)_54%,rgba(104,189,0,0.50)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.20),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0b2f7f] via-[#68bd00] to-[#0b2f7f]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/78">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">{pageTitle}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {pageTitle}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
              {selectedSubsidiary
                ? "View subsidiary details, corporate profile, facilities and operational information."
                : "Explore Jetama Group of Companies and its subsidiary structure."}
            </p>
          </div>
        </div>
      </section>

      <OceanWaveDivider />

      <div className="relative z-10">
        {!selectedSubsidiary && <SubsidiaryOverview />}
        {selectedSubsidiary === "water" && <JetamaWaterDetail />}
        {selectedSubsidiary === "energy" && <JetamaEnergyDetail />}
        {selectedSubsidiary === "solar-pv" && <SolarPVDetail />}
      </div>
    </main>
  );
}

function SubsidiaryOverview() {
  return (
    <section className="relative -mt-20 z-10 bg-white pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-[0_30px_90px_rgba(0,44,85,0.14)] sm:p-10">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
              Jetama Subsidiaries Chart
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#005AAA] sm:text-5xl">
              Jetama Group of Companies
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Jetama has grown significantly over the years and now encompasses
              four companies under the Jetama Group. As a wholly owned company
              of the State Government of Sabah, we are committed to redefining
              water and energy, fostering sustainable development across the
              West Coast of Sabah.
            </p>
          </div>

          <div className="mt-14 flex flex-col items-center">

            <div className="mt-8 grid w-full gap-6 lg:grid-cols-3">
              {subsidiaryCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.color}`}
                    />

                    <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#35b24a]/10 transition group-hover:scale-125" />

                    <div className="flex h-36 items-center justify-center rounded-[1.5rem] bg-white p-5 shadow-inner">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="max-h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,44,85,0.16)]"
                      />
                    </div>

                    <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#052b4f] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                      <Icon size={14} />
                      Subsidiary
                    </div>

                    <h3 className="mt-5 text-2xl font-black leading-tight text-[#0b2f7f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] leading-7 text-slate-600">
                      {item.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#35b24a]">
                      View Details
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JetamaWaterDetail() {
  return (
    <section className="relative -mt-20 z-10 bg-white pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(0,44,85,0.14)]">
          <div className="relative min-h-[560px] overflow-hidden">
            <img
              src={waterHero}
              alt="Jetama Water treatment facilities"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b46]/90 via-[#0b2f7f]/72 to-[#68bd00]/40" />

            <div className="relative flex min-h-[560px] items-center px-8 py-20 text-white sm:px-10 lg:px-14">
              <div className="max-w-4xl">
                <img
                  src={waterLogo}
                  alt="Jetama Water Logo"
                  className="mb-8 max-h-32 rounded-3xl bg-white/95 p-5 shadow-2xl"
                />

                <p className="text-sm font-black uppercase tracking-[0.32em] text-[#9df04b]">
                  Jetama Water Sdn. Bhd.
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                  Potable Water Operations for Kota Kinabalu and Sabah West Coast
                </h2>

                <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-white/90">
                  Formerly known as Corporate Dynamics Sdn. Bhd., Jetama Water is
                  a subsidiary of Jetama Sdn. Bhd. involved in the Kota Kinabalu
                  Water Privatization Project and responsible for operating key
                  water treatment facilities.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {waterStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbff] p-5 shadow-sm"
                >
                  <div className="text-3xl font-black text-[#0b2f7f]">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-bold text-slate-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#68bd00]">
                  About Jetama Water
                </p>

                <h3 className="mt-4 text-3xl font-black text-[#0b2f7f]">
                  Company Background
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-600">
                  JETAMA WATER SDN. BHD. is a locally incorporated company
                  currently involved in the Kota Kinabalu Water Privatization
                  Project, providing potable drinking water for consumers on the
                  West Coast of Sabah.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  The company operates and maintains existing water treatment
                  facilities from Tuaran in the North to Papar in the South,
                  including Tuaran, Tamparuli, Telibong, Kasigui, Papar and Moyog
                  Water Treatment Plants.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#eaf8ee] p-4 text-[#68bd00]">
                    <Target size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#0b2f7f]">
                      Vision & Mission
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      <span className="font-black text-[#0b2f7f]">Vision:</span>{" "}
                      To be recognized as a trusted and technically competent
                      partner for life in the management of potable water.
                    </p>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                      <span className="font-black text-[#0b2f7f]">Mission:</span>{" "}
                      To provide clean, high quality and uninterrupted potable
                      water to our client supported by a committed and competent
                      workforce.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#68bd00]">
                Facilities
              </p>

              <h3 className="mt-4 text-4xl font-black text-[#0b2f7f]">
                6 Water Treatment Plants
              </h3>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {waterPlants.map((plant) => (
                  <article
                    key={plant.title}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={plant.image}
                        alt={plant.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-110"
                      />
                    </div>

                    <div className="flex items-center gap-3 p-6">
                      <Building2 className="text-[#68bd00]" size={22} />
                      <h4 className="font-black uppercase tracking-wide text-[#0b2f7f]">
                        {plant.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#68bd00]">
                Our Departments
              </p>

              <h3 className="mt-4 text-4xl font-black text-[#0b2f7f]">
                Core Operational Divisions
              </h3>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {waterDepartments.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
                    >
                      <div className="mb-6 inline-flex rounded-2xl bg-[#edf8ff] p-4 text-[#0b2f7f] transition group-hover:bg-[#68bd00] group-hover:text-white">
                        <Icon size={28} />
                      </div>

                      <h4 className="text-xl font-black text-[#0b2f7f]">
                        {item.title}
                      </h4>

                      <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JetamaEnergyDetail() {
  return (
    <section className="relative -mt-20 z-10 bg-white pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(0,44,85,0.14)]">
          <div className="relative h-[410px] overflow-hidden">
            <img
              src={energyHero}
              alt="Jetama Energy solar photovoltaic plant"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 flex flex-col justify-center px-8 text-white sm:px-10 lg:px-14">
              <h2 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
                Our Subsidiaries - Jetama Energy Sdn. Bhd.
              </h2>

              <div className="mt-8 h-[2px] w-80 bg-white/70" />

              <p className="mt-8 max-w-3xl text-lg font-semibold leading-8 text-white/95">
                We deliver solutions which are economical, innovative and to the
                highest expectations of our customers and partners.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mx-auto max-w-6xl text-center">
              <img
                src={jesbLogo}
                alt="Jetama Energy Sdn. Bhd."
                className="mx-auto w-full max-w-5xl object-contain"
              />
              <div className="mx-auto mt-12 h-[3px] max-w-5xl bg-[#0b2f7f]" />
            </div>

            <div className="mt-20 grid gap-14 lg:grid-cols-2">
              <div>
                <h3 className="text-center text-3xl font-black text-[#0b2f7f]">
                  Vision
                </h3>

                <p className="mt-12 text-lg leading-8 text-slate-600">
                  Our vision is to energize Sabah towards a sustainable and low
                  carbon environment.
                </p>
              </div>

              <div>
                <h3 className="text-center text-3xl font-black text-[#0b2f7f]">
                  Mission
                </h3>

                <div className="mt-12 space-y-8 text-lg leading-8 text-slate-600">
                  <p>
                    Our mission is to generate sustainable renewable energy
                    solutions to enable Sabah to reduce its carbon footprint.
                  </p>
                  <p>
                    We deliver solutions which are economical, innovative and to
                    the highest expectations of our customers and partners.
                  </p>
                  <p>
                    We build a culture of excellence through the integrity and
                    competency of our team and partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-[2rem] bg-[#102f83] p-8 text-white">
              <h3 className="text-3xl font-black uppercase text-[#68bd00]">
                Our Values
              </h3>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {energyValues.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-xl font-black uppercase text-[#68bd00]">
                      {item.title}
                    </h4>

                    <p className="mt-5 text-sm font-semibold leading-7 text-white">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-5xl text-center">
              <h3 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#102f83] decoration-2 underline-offset-4">
                Inaugural Project
              </h3>

              <h4 className="mt-10 text-3xl font-black leading-tight text-[#102f83]">
                Development of 10MWac Large Scale Solar Photovoltaic Plant at Kg
                Bukit Kalam, FT Labuan.
              </h4>

              <div className="mt-12 space-y-7 text-left text-lg leading-9 text-slate-600">
                <p>
                  RM48 million Large scale solar project will be developed in
                  joint venture with Symbior Siam Ltd through the SPV, Solar PV
                  Power Sdn. Bhd. of which Jetama Energy holds 70% equity.
                </p>

                <ul className="mt-8 space-y-4 rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8">
                  {projectMilestones.map((item) => (
                    <li key={item} className="flex gap-4">
                      <SunMedium
                        className="mt-1 shrink-0 text-[#f9a51a]"
                        size={22}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolarPVDetail() {
  return (
    <section className="relative -mt-20 z-10 bg-white pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center shadow-[0_30px_90px_rgba(0,44,85,0.14)] sm:p-12">
          <img
            src={solarLogo}
            alt="Solar PV Power Sdn. Bhd."
            className="mx-auto max-h-40 w-auto object-contain"
          />

          <h2 className="mt-10 text-4xl font-black text-[#102f83]">
            Solar PV Power Sdn. Bhd.
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Solar PV Power Sdn. Bhd. is a subsidiary under Jetama Energy Sdn.
            Bhd., supporting renewable energy development and sustainable
            low-carbon initiatives.
          </p>

          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 text-left shadow-[0_20px_60px_rgba(0,44,85,0.08)]">
            <h3 className="text-3xl font-black text-[#102f83]">
              Large Scale Solar Photovoltaic Project
            </h3>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              The project involves the development of a 10MWac Large Scale Solar
              Photovoltaic Plant at Kg Bukit Kalam, FT Labuan, supporting Sabah’s
              move towards sustainable renewable energy solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}