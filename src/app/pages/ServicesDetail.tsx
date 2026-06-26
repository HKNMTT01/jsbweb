import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Droplet,
  Droplets,
  Eye,
  EyeOff,
  Factory,
  Gauge,
  Info,
  ShieldCheck,
} from "lucide-react";

import heroImage from "@/assets/DJI_0298.jpg";
import moyogImage from "@/assets/MOYOG.jpg";
import telibongImage from "@/assets/TELIBONG.jpg";
import kasiguiImage from "@/assets/KASIGUI.jpg";
import paparImage from "@/assets/PAPAR.jpg";
import tamparuliImage from "@/assets/TAMPARULI.jpg";
import tuaranImage from "@/assets/TUARAN.jpg";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";

type ServicePage = {
  title: string;
  subtitle: string;
  eyebrow: string;
  icon: typeof Droplets;
};

type WaterPlant = {
  title: string;
  image: string;
  design: string;
  location: string;
  text: string;
  details: string[];
};

const servicePages: Record<string, ServicePage> = {
  overview: {
    title: "Overview",
    subtitle:
      "Scope of works and responsibilities covering rehabilitation, new facilities, operation and maintenance.",
    eyebrow: "Scope of Works",
    icon: Info,
  },
  "our-facilities": {
    title: "Our Facilities",
    subtitle:
      "Key water infrastructure including Babagon Dam, treatment plants, reservoirs, pipelines and existing facilities.",
    eyebrow: "Water Infrastructure",
    icon: Factory,
  },
  "total-capability": {
    title: "Total Capability",
    subtitle:
      "Water quality requirements and increased quantity of treated water provided by JETAMA Sdn. Bhd.",
    eyebrow: "Capability",
    icon: Gauge,
  },
};

const servicesNavigation = Object.entries(servicePages).map(([slug, page]) => ({
  label: page.title,
  path: `/services/${slug}`,
  icon: page.icon,
}));

const waterPlants: WaterPlant[] = [
  {
    title: "Moyog Water Treatment Plant",
    image: moyogImage,
    design: "165 MLD",
    location: "KM15, Jalan Tambunan, Kg Inobong",
    text: "Designed to produce treated water using raw water mainly from Babagon Dam and Moyog River.",
    details: [
      "Major water treatment facility supporting Kota Kinabalu and surrounding supply areas.",
      "Uses raw water resources from Babagon Dam and Moyog River.",
      "Forms part of JETAMA’s key infrastructure under the concession responsibility.",
    ],
  },
  {
    title: "Kasigui Water Treatment Plant",
    image: kasiguiImage,
    design: "50 MLD",
    location: "Penampang area",
    text: "Taken over from JANS and supports treated water supply within Penampang and surrounding areas.",
    details: [
      "Supports the treated water supply network within Penampang.",
      "Part of the existing facilities taken over from Jabatan Air Negeri Sabah.",
      "Contributes to reliable treated water production and distribution.",
    ],
  },
  {
    title: "Telibong Water Treatment Plant",
    image: telibongImage,
    design: "55 MLD",
    location: "Tuaran / Telipok / Tamparuli areas",
    text: "Supplies treated water for Tuaran, Telipok and Tamparuli areas.",
    details: [
      "Supports water supply demand in Tuaran and nearby areas.",
      "Strengthens treatment capacity for Telipok and Tamparuli.",
      "Operated as part of JETAMA’s water supply service facilities.",
    ],
  },
  {
    title: "Tuaran Water Treatment Plant",
    image: tuaranImage,
    design: "1 MLD",
    location: "Tuaran township",
    text: "Existing treatment plant upgraded to support Tuaran township and nearby areas.",
    details: [
      "Supports treated water service for Tuaran township.",
      "Part of existing infrastructure under JETAMA’s facility responsibility.",
      "Contributes to localized water treatment service continuity.",
    ],
  },
  {
    title: "Tamparuli Water Treatment Plant",
    image: tamparuliImage,
    design: "2.58 MLD",
    location: "Tamparuli township",
    text: "Existing treatment plant serving Tamparuli township and surrounding villages.",
    details: [
      "Supports Tamparuli township and nearby communities.",
      "Provides treated water production for local distribution.",
      "Important facility within the surrounding water supply system.",
    ],
  },
  {
    title: "Papar Water Treatment Plant",
    image: paparImage,
    design: "9 MLD",
    location: "Papar district",
    text: "Existing treatment plant supporting treated water supply within Papar district.",
    details: [
      "Supports treated water service within Papar district.",
      "Contributes to the wider JETAMA concession service area.",
      "Maintains treated water production for district-level supply demand.",
    ],
  },
];

function SectionHero({ page }: { page: ServicePage }) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 lg:pt-32">
      <div className="absolute left-0 top-0 z-10 h-8 w-full bg-[#005AAA]" />

      <div className="relative h-[430px] overflow-hidden sm:h-[450px] lg:h-[470px]">
        <img
          src={heroImage}
          alt={page.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-black/10" />
        <div className="absolute -left-24 top-0 h-full w-[55%] -skew-x-12 bg-white/92 shadow-[40px_0_90px_rgba(255,255,255,0.75)]" />
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-[#41B650]/15 blur-3xl" />
        <div className="absolute left-48 bottom-10 h-64 w-64 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white via-white/70 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl -translate-y-2">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Link to="/" className="hover:text-[#005AAA]">
                Home
              </Link>
              <ChevronRight size={15} />
              <Link to="/services" className="hover:text-[#005AAA]">
                Services
              </Link>
              <ChevronRight size={15} />
              <span className="font-bold text-[#005AAA]">{page.title}</span>
            </div>

            <p className="mb-4 inline-flex rounded-full bg-[#eaf8ef] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#087629]">
              {page.eyebrow}
            </p>

            <h1 className="font-serif text-4xl font-normal leading-tight text-[#064C82] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <div className="mt-5 h-1 w-24 rounded-full bg-[#41B650]" />

            <p className="mt-5 max-w-xl text-base font-medium leading-8 text-slate-700">
              {page.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailBreadcrumb({ page }: { page: ServicePage }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
      <Link to="/" className="transition hover:text-[#005AAA]">
        Home
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <Link to="/services" className="transition hover:text-[#005AAA]">
        Services
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <span className="font-bold text-[#005AAA]">{page.title}</span>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="relative -mt-3 h-fit bg-transparent px-4 py-0">
      <div className="mb-1 flex justify-start">
        <img
          src={jetamaLogo}
          alt="JETAMA"
          className="h-[88px] w-auto object-contain"
        />
      </div>

      <nav className="-mt-2 space-y-1">
        {servicesNavigation.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-white text-[#005AAA] shadow-sm"
                  : "text-slate-800 hover:bg-white hover:text-[#005AAA]"
              }`}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-8 h-16 overflow-hidden bg-transparent opacity-40">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-white/80 to-white" />
      <div className="absolute left-[-5%] top-4 h-10 w-[110%] rounded-[50%] bg-white blur-2xl" />
      <div className="absolute left-[-10%] top-8 h-12 w-[120%] rounded-[50%] bg-white/95 blur-xl" />

      <svg
        className="absolute bottom-0 left-0 h-28 w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path
          d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z"
          fill="rgba(255,255,255,1)"
        />
        <path
          d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z"
          fill="rgba(248,255,250,.98)"
        />
        <path
          d="M0,105 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z"
          fill="rgba(103,214,111,.50)"
        />
        <path
          d="M0,130 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z"
          fill="rgba(65,182,80,.72)"
        />
        <path
          d="M0,160 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z"
          fill="rgba(0,84,166,.80)"
        />
        <path
          d="M0,190 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z"
          fill="rgba(0,70,145,.90)"
        />
        <path
          d="M0,215 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z"
          fill="rgba(0,59,122,.96)"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />
    </div>
  );
}


function SoftNumber({ no }: { no: string }) {
  return (
    <span className="inline-flex min-w-[52px] font-serif text-2xl font-semibold italic leading-none text-[#005AAA]">
      {no}
    </span>
  );
}

function AccentRule() {
  return (
    <div className="my-7 flex items-center gap-3">
      <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
      <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
      <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
    </div>
  );
}

function OverviewContent() {
  const scopeItems = [
    {
      no: "01",
      title: "Rehabilitation & Refurbishment",
      text: "Rehabilitation and refurbishment of existing treatment plants and other facilities taken over from Jabatan Air Negeri Sabah (JANS).",
    },
    {
      no: "02",
      title: "Construction of New Facilities",
      text: "Development of strategic water infrastructure including Moyog WTP, Babagon Dam, concrete reservoirs and major pipeline works.",
      details: [
        "Moyog WTP — 165 MLD (million litres per day)",
        "Babagon Dam — 21,800 ML (million litres)",
        "Nine 10 ML concrete reservoirs",
        "70 kilometers of pipeline",
      ],
    },
    {
      no: "03",
      title: "Operation & Maintenance",
      text: "Operation and maintenance during the concession period to support service continuity, reliability and long-term infrastructure performance.",
    },
  ];

  return (
    <article className="scroll-reveal">
      <section className="relative">
        <div className="pointer-events-none absolute -right-20 top-4 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-4 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />
        <div className="pointer-events-none absolute right-[18%] top-28 h-28 w-52 rotate-[-10deg] bg-[#F5A623]/10 blur-3xl" />

        <div className="relative">
          <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Scope Of Works & Responsibility
          </h2>

          <AccentRule />

          <p className="max-w-4xl text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
            JETAMA’s service responsibility is structured around upgrading existing assets,
            delivering new water infrastructure and maintaining reliable operations throughout
            the concession period.
          </p>

          <div className="mt-12 space-y-10">
            {scopeItems.map((item, index) => (
              <div
                key={item.no}
                className="group relative grid gap-5 md:grid-cols-[72px_1fr]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <SoftNumber no={item.no} />

                <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-12 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                  <h3 className="font-serif text-2xl font-semibold italic tracking-[-0.02em] text-[#052b4f] transition group-hover:text-[#005AAA]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-4xl text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
                    {item.text}
                  </p>

                  {item.details && (
                    <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {item.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 shrink-0 text-[#41B650]" size={17} />
                          <p className="text-sm font-semibold leading-6 text-slate-700">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

function FacilitiesContent() {
  const [openPlant, setOpenPlant] = useState<string | null>(null);
  const [openFacility, setOpenFacility] = useState<string | null>(null);

  const damComponents = [
    "Catchment and Reservoir",
    "Embankment",
    "Spillway",
    "Intake Tower",
  ];

  const supportFacilities = [
    {
      title: "Reservoirs",
      text: "Nine 10ML concrete reservoirs supporting treated water storage and distribution.",
      details: [
        "Supports balancing storage for treated water supply.",
        "Strengthens water distribution continuity across demand areas.",
        "Provides operational reserve for daily network requirements.",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Pipelines",
      text: "70 kilometers of pipeline connecting water treatment, storage and supply infrastructure.",
      details: [
        "Connects key water treatment and reservoir infrastructure.",
        "Supports transmission of treated water to service areas.",
        "Forms part of the main concession delivery network.",
      ],
      icon: Droplets,
    },
    {
      title: "Existing Facilities",
      text: "Existing treatment plants and facilities taken over from Jabatan Air Negeri Sabah.",
      details: [
        "Includes facilities rehabilitated and refurbished under JETAMA’s scope.",
        "Supports continuity of existing water supply operations.",
        "Strengthens operational coverage for the concession area.",
      ],
      icon: Factory,
    },
  ];

  return (
    <article className="scroll-reveal space-y-16">
      <section className="relative">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">
              Water Infrastructure
            </p>

            <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Babagon Dam
            </h2>

            <AccentRule />

            <p className="max-w-4xl text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
              Babagon Dam is constructed across the Babagon River, a tributary of the
              Moyog River, and forms an important part of JETAMA’s water supply
              infrastructure.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {damComponents.map((item, index) => (
                <div key={item} className="flex items-start gap-4">
                  <SoftNumber no={String(index + 1).padStart(2, "0")} />
                  <p className="pt-1 text-sm font-black uppercase tracking-[0.10em] text-[#052b4f]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_28px_80px_rgba(0,44,85,0.14)]">
            <img src={heroImage} alt="Babagon Dam" className="h-[430px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/55 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 right-6">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white/75">
                Key Facility
              </p>
              <h3 className="mt-2 font-serif text-3xl font-semibold italic text-white">
                Babagon Dam
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-4xl">

          <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
            Water Treatment Facilities
          </h2>

          <AccentRule />

          <p className="max-w-4xl text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
            A clean view of JETAMA’s main treatment facilities, presented through soft image-led
            layouts and editorial-style text instead of heavy bordered content boxes.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {waterPlants.map((plant) => {
            const isOpen = openPlant === plant.title;

            return (
              <article key={plant.title} className="group text-left">
                <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_24px_75px_rgba(0,44,85,0.12)]">
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className={`h-72 w-full object-cover transition duration-700 ${
                      isOpen ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/85 via-[#052b4f]/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] shadow-lg backdrop-blur-md">
                    {plant.design}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                      {plant.location}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold italic leading-tight text-white">
                      {plant.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5">
                  {!isOpen ? (
                    <>
                      <p className="text-justify text-sm leading-7 text-slate-600">{plant.text}</p>
                      <button
                        type="button"
                        onClick={() => setOpenPlant(plant.title)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#005AAA] transition hover:text-[#41B650]"
                      >
                        <Eye size={16} />
                        View Details
                        <ArrowRight size={15} />
                      </button>
                    </>
                  ) : (
                    <div className="animate-[fadeIn_.45s_ease]">
                      <p className="relative pl-5 text-justify text-sm leading-7 text-slate-700 before:absolute before:left-0 before:top-2 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                        {plant.text}
                      </p>

                      <div className="mt-5 space-y-3">
                        {plant.details.map((item) => (
                          <div key={item} className="flex gap-3">
                            <CheckCircle2 className="mt-1 shrink-0 text-[#41B650]" size={16} />
                            <p className="text-sm leading-6 text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenPlant(null)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#052b4f] transition hover:text-[#005AAA]"
                      >
                        <EyeOff size={16} />
                        Hide Details
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[3px] w-16 rounded-full bg-[#005AAA]" />
          <span className="h-[3px] w-8 rounded-full bg-[#41B650]" />
          <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Supporting Facilities
            </h2>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {supportFacilities.map((item) => {
            const Icon = item.icon;
            const isOpen = openFacility === item.title;

            return (
              <article key={item.title} className="group relative">
                <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#005AAA]/7 blur-2xl" />

                <Icon className="mb-5 text-[#41B650]" size={34} />

                <h3 className="font-serif text-2xl font-semibold italic tracking-[-0.02em] text-[#052b4f]">
                  {item.title}
                </h3>

                {!isOpen ? (
                  <>
                    <p className="mt-4 text-justify text-sm leading-7 text-slate-600">{item.text}</p>
                    <button
                      type="button"
                      onClick={() => setOpenFacility(item.title)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#005AAA] transition hover:text-[#41B650]"
                    >
                      <Eye size={15} />
                      View
                    </button>
                  </>
                ) : (
                  <div className="animate-[fadeIn_.45s_ease]">
                    <p className="mt-4 relative pl-5 text-justify text-sm leading-7 text-slate-700 before:absolute before:left-0 before:top-2 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                      {item.text}
                    </p>

                    <div className="mt-5 space-y-3">
                      {item.details.map((detail) => (
                        <div key={detail} className="flex gap-3">
                          <CheckCircle2 className="mt-1 shrink-0 text-[#41B650]" size={16} />
                          <p className="text-sm leading-6 text-slate-700">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenFacility(null)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#052b4f] transition hover:text-[#005AAA]"
                    >
                      <EyeOff size={15} />
                      Hide
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </article>
  );
}

function TotalCapabilityContent() {
  const quality = [
    "Turbidity not more than 1 NTU",
    "Colour not more than 5 Hazen",
    "Residual chlorine between 1.5 - 2.0 mg/l",
    "pH between 7.0 and 8.5",
  ];

  const quantity = [
    ["June 1993", "135 MLD", 42],
    ["June 1995 (Phase I)", "175 MLD", 55],
    ["December 1995 (Advanced Phase II)", "215 MLD", 67],
    ["October 1997 (Phase II & Phase III)", "320 MLD", 100],
  ] as const;

  const capabilityStats = [
    {
      label: "Final Capacity",
      value: "320 MLD",
      icon: Gauge,
      detail: "Phase II & Phase III",
    },
    {
      label: "Quality Control",
      value: "4",
      icon: ShieldCheck,
      detail: "Key water quality parameters",
    },
    {
      label: "Supply Growth",
      value: "+185 MLD",
      icon: BarChart3,
      detail: "Increase from 1993 baseline",
    },
  ];

  return (
    <article className="scroll-reveal relative overflow-hidden">
      <style>
        {`
          @keyframes capabilityPulse {
            0%, 100% { transform: scale(1); opacity: .85; }
            50% { transform: scale(1.08); opacity: 1; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full bg-[#005AAA]/9 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-[#41B650]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[18%] top-32 h-28 w-52 rotate-[-10deg] bg-[#F5A623]/10 blur-3xl" />

      <section className="relative">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">
          Service Capability
        </p>

        <div className="mt-4 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Water Quality & Quantity
            </h2>

            <AccentRule />

            <p className="max-w-4xl text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
              A corporate view of JETAMA’s treated water quality standards and
              progressive supply capacity growth during the concession period.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {capabilityStats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="group relative" style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#eef8ff] to-[#effaf3] text-[#005AAA] shadow-[0_14px_34px_rgba(0,90,170,0.10)]">
                    <Icon size={24} />
                  </div>

                  <p className="text-3xl font-black text-[#052b4f]">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#41B650]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-[#052b4f] p-8 text-white shadow-[0_26px_80px_rgba(0,90,170,0.18)]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#41B650]/25 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#005AAA]/40 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#fbf234]">
                    Water Quality
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold italic">
                    Quality Parameters
                  </h3>
                </div>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                  <span className="absolute h-20 w-20 rounded-full bg-[#41B650]/30" style={{ animation: "capabilityPulse 2.6s ease-in-out infinite" }} />
                  <Droplet className="relative text-[#fbf234]" size={42} />
                </div>
              </div>

              <div className="space-y-4">
                {quality.map((item, index) => (
                  <div key={item} className="flex items-start gap-4" style={{ transitionDelay: `${index * 70}ms` }}>
                    <CheckCircle2 className="mt-1 shrink-0 text-[#fbf234]" size={18} />
                    <p className="text-sm font-semibold leading-7 text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#41B650]">
                  Water Quantity
                </p>
                <h3 className="mt-2 font-serif text-3xl font-semibold italic text-[#052b4f]">
                  Capacity Growth
                </h3>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#eef8ff] to-[#effaf3] text-[#005AAA] shadow-[0_14px_34px_rgba(0,90,170,0.10)]">
                <Activity size={34} />
              </div>
            </div>

            <div className="space-y-6">
              {quantity.map(([period, amount, percent], index) => (
                <div key={period}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-sm font-black text-[#052b4f]">{period}</span>
                    <span className="text-xl font-black text-[#005AAA]">{amount}</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-[#e8eef5]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#005AAA] via-[#41B650] to-[#fbf234] transition-all duration-1000"
                      style={{
                        width: `${percent}%`,
                        transitionDelay: `${index * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-12 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#41B650]">
                  Capability Milestone
                </p>
                <p className="mt-1 text-lg font-black text-[#052b4f]">
                  Supply capacity increased from 135 MLD to 320 MLD.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-5xl font-black tracking-[-0.05em] text-[#005AAA]">320</p>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  MLD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function CurrentContent({ slug }: { slug: string }) {
  if (slug === "overview") return <OverviewContent />;
  if (slug === "our-facilities") return <FacilitiesContent />;
  return <TotalCapabilityContent />;
}


function CleanCorporateTheme() {
  return (
    <style>{`
      @keyframes jetamaFadeUp { from { opacity: 0; transform: translateY(28px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
      @keyframes jetamaSoftFloat { 0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; } 50% { transform: translate3d(18px,-14px,0) rotate(2deg); opacity: .82; } }
      @keyframes jetamaShine { 0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; } 28% { opacity: .45; } 100% { transform: translateX(190%) skewX(-18deg); opacity: 0; } }

      .clean-corporate-page { background: #f7fbff; color: #0f2f44; }
      .clean-corporate-page > section:first-of-type {
        position: relative;
        isolation: isolate;
        background: linear-gradient(135deg, #ffffff 0%, #eef8ff 48%, #f8fff6 100%) !important;
        color: #0f2f44 !important;
        overflow: hidden;
      }
      .clean-corporate-page > section:first-of-type::before {
        content: "";
        position: absolute;
        left: -180px;
        top: 26px;
        width: 420px;
        height: 420px;
        border-radius: 72px;
        border: 1px solid rgba(0,90,170,.10);
        background: rgba(0,90,170,.045);
        transform: rotate(45deg);
        z-index: 1;
        animation: jetamaSoftFloat 11s ease-in-out infinite;
      }
      .clean-corporate-page > section:first-of-type::after {
        content: "";
        position: absolute;
        right: -170px;
        top: 95px;
        width: 430px;
        height: 430px;
        border-radius: 76px;
        border: 1px solid rgba(53,178,74,.16);
        background: rgba(53,178,74,.05);
        transform: rotate(12deg);
        z-index: 1;
        animation: jetamaSoftFloat 14s ease-in-out infinite reverse;
      }
      .clean-corporate-page > section:first-of-type img {
        opacity: .16 !important;
        filter: saturate(1.08) contrast(1.08) brightness(1.08);
      }
      .clean-corporate-page > section:first-of-type .absolute.inset-0,
      .clean-corporate-page > section:first-of-type .absolute.inset-x-0.top-0,
      .clean-corporate-page > section:first-of-type .absolute.-right-24,
      .clean-corporate-page > section:first-of-type .absolute.-left-20,
      .clean-corporate-page > section:first-of-type .absolute.left-10,
      .clean-corporate-page > section:first-of-type .absolute.-bottom-28,
      .clean-corporate-page > section:first-of-type .absolute.left-0.top-0.z-10 {
        opacity: .32;
      }
      .clean-corporate-page > section:first-of-type > div:last-child,
      .clean-corporate-page > section:first-of-type .relative {
        z-index: 5;
      }
      .clean-corporate-page > section:first-of-type h1 {
        color: #005AAA !important;
        letter-spacing: -0.045em;
        text-shadow: none !important;
      }
      .clean-corporate-page > section:first-of-type h1 span,
      .clean-corporate-page > section:first-of-type .font-serif {
        color: #005AAA !important;
        font-family: inherit !important;
        font-weight: 900 !important;
      }
      .clean-corporate-page > section:first-of-type p {
        color: #475569 !important;
      }
      .clean-corporate-page > section:first-of-type a,
      .clean-corporate-page > section:first-of-type span {
        color: #005AAA;
      }
      .clean-corporate-page > section:first-of-type [class*="text-white"] {
        color: #0f2f44 !important;
      }
      .clean-corporate-page > section:first-of-type [class*="bg-white/10"],
      .clean-corporate-page > section:first-of-type [class*="bg-white/90"],
      .clean-corporate-page > section:first-of-type [class*="border-white"] {
        background: rgba(255,255,255,.82) !important;
        border-color: rgba(0,90,170,.16) !important;
        box-shadow: 0 18px 55px rgba(0,90,170,.10);
      }
      .clean-corporate-page > section:first-of-type div[class*="h-24"][class*="w-24"][class*="rounded"] {
        display: none !important;
      }
      .clean-corporate-page > section:first-of-type .inline-flex,
      .clean-corporate-page > section:first-of-type button {
        backdrop-filter: blur(14px);
      }
      .clean-corporate-page article,
      .clean-corporate-page .rounded-\[2rem\],
      .clean-corporate-page .rounded-\[2\.5rem\],
      .clean-corporate-page .rounded-\[1\.8rem\] {
        border-color: rgba(0,90,170,.12) !important;
      }
      .clean-corporate-page .shadow-\[0_30px_90px_rgba\(0\,44\,85\,0\.16\)\],
      .clean-corporate-page .shadow-\[0_28px_90px_rgba\(0\,44\,85\,0\.12\)\],
      .clean-corporate-page .shadow-\[0_24px_70px_rgba\(0\,90\,170\,0\.08\)\] {
        box-shadow: 0 24px 80px rgba(0,90,170,.10) !important;
      }
      .clean-corporate-page .scroll-reveal,
      .clean-corporate-page .animate-\[fadeInUp_\.8s_ease_both\],
      .clean-corporate-page .animate-\[fadeInUp_\.7s_ease_both\] {
        animation: jetamaFadeUp .82s cubic-bezier(.2,.8,.2,1) both !important;
      }
      .clean-corporate-page .shine-layer,
      .clean-corporate-page article,
      .clean-corporate-page button,
      .clean-corporate-page a.group {
        position: relative;
        overflow: hidden;
      }
      .clean-corporate-page .shine-layer::before,
      .clean-corporate-page article::before,
      .clean-corporate-page button::before,
      .clean-corporate-page a.group::before {
        content: "";
        position: absolute;
        top: -50%; bottom: -50%; left: -35%; width: 28%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent);
        transform: translateX(-150%) skewX(-18deg);
        pointer-events: none;
      }
      .clean-corporate-page article:hover::before,
      .clean-corporate-page button:hover::before,
      .clean-corporate-page a.group:hover::before { animation: jetamaShine 1.9s ease; }
    `}</style>
  );
}

export default function ServicesDetail() {
  const { slug } = useParams();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -70px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [slug]);

  if (!slug || !servicePages[slug]) {
    return <Navigate to="/services/overview" replace />;
  }

  const page = servicePages[slug];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#eefaf3_100%)] text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 animate-pulse rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="absolute right-[-9rem] top-36 h-[28rem] w-[28rem] animate-pulse rounded-full bg-[#41B650]/10 blur-3xl" />
        <div className="absolute left-1/3 top-16 h-40 w-40 rounded-full bg-[#F5A623]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,90,170,0.08)_1px,transparent_0)] [background-size:28px_28px] opacity-40" />
      </div>

      <section className="relative z-10 px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DetailBreadcrumb page={page} />
        </div>

        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <main className="clean-corporate-page min-w-0">
      <CleanCorporateTheme />
            <CurrentContent slug={slug} />
          </main>
        </div>
      </section>
    </div>
  );
}