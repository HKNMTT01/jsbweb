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

import waterHero from "@/assets/jetama-dam-hero.jpg";
import moyogPlant from "@/assets/MOYOG.jpg";
import telibongPlant from "@/assets/TELIBONG.jpg";
import kasiguiPlant from "@/assets/KASIGUI.jpg";
import paparPlant from "@/assets/PAPAR.jpg";
import tamparuliPlant from "@/assets/TAMPARULI.jpg";
import tuaranPlant from "@/assets/TUARAN.jpg";


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


type SubsidiaryKey = "water" | "energy";

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



export default function Subsidiary() {
  const { type } = useParams();
  const selectedSubsidiary = type as SubsidiaryKey | undefined;

  if (
    selectedSubsidiary &&
    selectedSubsidiary !== "water" &&
    selectedSubsidiary !== "energy"
  ) {
    return <Navigate to="/subsidiary" replace />;
  }

  const pageTitle =
    selectedSubsidiary === "water"
      ? "Jetama Water Sdn. Bhd."
      : selectedSubsidiary === "energy"
        ? "Jetama Energy Sdn. Bhd."
          : "Subsidiaries";

  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#1f2933]">
      <section className="relative isolate overflow-hidden bg-[#f7fbff] pb-24 pt-32 text-slate-900">
        <CorporateHeroAtmosphere />
<img
          src={
            selectedSubsidiary === "energy"
              ? energyHero
              : waterHero
          }
          alt={pageTitle}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.14]"
        />

        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,90,170,0.10),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Link to="/" className="hover:text-[#005AAA]">
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="text-[#005AAA]">{pageTitle}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="corporate-hero-title mt-6 font-serif text-4xl font-normal italic leading-tight text-[#005AAA] sm:text-5xl lg:text-6xl">
              {pageTitle}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
              <span className="h-[3px] w-10 rounded-full bg-[#35B24A]" />
              <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
            </div>

            <p className="corporate-hero-copy mt-7 max-w-3xl text-lg leading-9 text-slate-600 sm:text-xl">
              {selectedSubsidiary
                ? "View subsidiary details, corporate profile, facilities and operational information."
                : "Explore Jetama Group of Companies and its subsidiary structure."}
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        {!selectedSubsidiary && <SubsidiaryOverview />}
        {selectedSubsidiary === "water" && <JetamaWaterDetail />}
        {selectedSubsidiary === "energy" && <JetamaEnergyDetail />}
      </div>
    </main>
  );
}

function SubsidiaryOverview() {
  return (
    <section className="relative z-10 bg-white pb-20 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
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

            <div className="mx-auto mt-8 grid w-full max-w-5xl gap-8 md:grid-cols-2">
              {subsidiaryCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#f8fbff] to-white p-8 text-center shadow-[0_18px_55px_rgba(0,44,85,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.14)]"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.color}`}
                    />

                    <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#35b24a]/10 transition group-hover:scale-125" />

                    <div className="flex h-40 items-center justify-center rounded-[1.5rem] bg-white/70 p-5">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="max-h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,44,85,0.16)]"
                      />
                    </div>

                    <div className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#005AAA]">
                      <Icon size={14} />
                      Subsidiary
                    </div>

                    <h3 className="mt-5 text-2xl font-black leading-tight text-[#0b2f7f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] leading-7 text-slate-600">
                      {item.text}
                    </p>
                    
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
    <section className="relative z-10 bg-white pb-20 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative min-h-[560px] overflow-hidden">
            <img
              src={waterHero}
              alt="Jetama Water treatment facilities"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061b46]/90 via-[#0b2f7f]/72 to-[#68bd00]/40" />

            <div className="relative flex min-h-[560px] items-center px-8 py-20 text-[#005AAA] sm:px-10 lg:px-14">
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

                <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
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
                  className="rounded-[1.5rem] bg-[#f8fbff] p-5 shadow-sm"
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

              <div className="rounded-[2rem] bg-[#f8fbff] p-8">
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
                    className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
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
                      className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
                    >
                      <div className="mb-6 inline-flex rounded-2xl bg-[#edf8ff] p-4 text-[#0b2f7f] transition group-hover:bg-[#68bd00] group-hover:text-[#005AAA]">
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
    <section className="relative z-10 bg-white pb-20 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="relative h-[410px] overflow-hidden">
            <img
              src={energyHero}
              alt="Jetama Energy solar photovoltaic plant"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 flex flex-col justify-center px-8 text-[#005AAA] sm:px-10 lg:px-14">
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

            <div className="mt-16 rounded-[2rem] bg-[#102f83] p-8 text-[#005AAA]">
              <h3 className="text-3xl font-black uppercase text-[#68bd00]">
                Our Values
              </h3>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {energyValues.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-xl font-black uppercase text-[#68bd00]">
                      {item.title}
                    </h4>

                    <p className="mt-5 text-sm font-semibold leading-7 text-[#005AAA]">
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

                <ul className="mt-8 space-y-4 rounded-[2rem] bg-[#f8fbff] p-8">
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

