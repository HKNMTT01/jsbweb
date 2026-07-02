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
  MapPinned,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/DJI_0298.jpg";
import moyogImage from "@/assets/MOYOG.jpg";
import telibongImage from "@/assets/TELIBONG.jpg";
import kasiguiImage from "@/assets/KASIGUI.jpg";
import paparImage from "@/assets/PAPAR.jpg";
import tamparuliImage from "@/assets/TAMPARULI.jpg";
import tuaranImage from "@/assets/TUARAN.jpg";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import aiConcessionMap from "@/assets/concession.png";
import concessionArea2 from "@/assets/concession-area2.jpg";
import pipelineReservoirMap from "@/assets/concessionArea.png";

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
      "Key water and energy infrastructure including Babagon Dam, treatment plants, reservoirs, pipelines, solar PV and renewable energy facilities.",
    eyebrow: "Water & Energy Infrastructure",
    icon: Factory,
  },
  "concession-area": {
    title: "Concession Area",
    subtitle:
      "Service coverage and operational areas supporting treated water supply distribution.",
    eyebrow: "Service Coverage",
    icon: MapPinned,
  },
  "total-capability": {
    title: "Total Capability",
    subtitle:
      "Water and energy capability covering treated water quality, production capacity and renewable energy development.",
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

          <p className="max-w-6xl text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
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

                  <p className="mt-3 max-w-6xl text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
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
  const [openEnergy, setOpenEnergy] = useState<string | null>(null);

  const damComponents = [
    "Catchment and Reservoir",
    "Embankment",
    "Spillway",
    "Intake Tower",
  ];

  const energyFacilities = [
    {
      title: "Energy Development",
      label: "Energy Subsidiary",
      icon: Zap,
      text: "Renewable energy aim supporting JETAMA's move into sustainable energy infrastructure and low-carbon development.",
      details: [
        "Supports the Group's strategic expansion into renewable energy.",
        "Focuses on solar and clean-energy opportunities for Sabah.",
        "Complements JETAMA's water infrastructure capability with energy-related development.",
      ],
    },
    {
      title: "Floating Solar Infrastructure",
      label: "Solar PV Development",
      icon: Activity,
      text: "Floating solar development supports the use of water assets for renewable energy generation and long-term sustainability.",
      details: [
        "Designed to support renewable energy generation using suitable water-based locations.",
        "Strengthens clean-energy visibility within JETAMA's infrastructure portfolio.",
        "Aligns with the Group's Water & Energy direction.",
      ],
    },
    {
      title: "Utility-Scale Solar PV",
      label: "Ground-Mounted Solar",
      icon: Gauge,
      text: "Large-scale solar photovoltaic projects support Sabah's energy transition through clean, scalable infrastructure.",
      details: [
        "Supports solar PV project development and strategic energy growth.",
        "Creates long-term renewable energy capacity beyond water treatment operations.",
        "Provides a platform for future sustainable infrastructure partnerships.",
      ],
    },
    {
      title: "Energy Partnerships",
      label: "Strategic Collaboration",
      icon: ShieldCheck,
      text: "Strategic joint ventures and collaborations strengthen JETAMA's capability to deliver energy-related projects.",
      details: [
        "Supports knowledge sharing and delivery capability in renewable energy.",
        "Enables project development through corporate and technical collaboration.",
        "Strengthens JETAMA's position in sustainable infrastructure development.",
      ],
    },
  ];

  return (
    <article className="scroll-reveal space-y-20">
      <section className="relative">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">
              Water Infrastructure
            </p>

            <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Babagon Dam
            </h2>

            <AccentRule />

            <p className="max-w-6xl text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
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
        <div className="max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">
            Water Infrastructure
          </p>

          <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
            Water Treatment Facilities
          </h2>

          <AccentRule />

          <p className="max-w-6xl text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
            A clean view of JETAMA’s main treatment facilities, presented through soft image-led
            layouts and editorial-style text instead of heavy bordered content boxes.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 2xl:grid-cols-3">
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
        <div className="max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F5A623]">
            Energy Infrastructure
          </p>

          <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
            Renewable Energy Facilities
          </h2>

          <AccentRule />

          <p className="max-w-6xl text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
            JETAMA’s facilities are expanded with renewable energy infrastructure through
            Jetama Energy, solar PV development, floating solar initiatives and strategic
            energy partnerships that support Sabah’s sustainable infrastructure direction.
          </p>
        </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {energyFacilities.map((item) => {
              const Icon = item.icon;
              const isOpen = openEnergy === item.title;

              return (
                <article key={item.title} className="group relative">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5A623] to-[#fbf234] p-3 text-[#052b4f] shadow-[0_14px_34px_rgba(245,166,35,0.16)]">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#F5A623]">
                        {item.label}
                      </p>
                      <h3 className="mt-1 font-serif text-xl font-semibold italic leading-tight text-[#052b4f] transition group-hover:text-[#005AAA]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {!isOpen ? (
                    <>
                      <p className="text-justify text-sm leading-7 text-slate-600">{item.text}</p>
                      <button
                        type="button"
                        onClick={() => setOpenEnergy(item.title)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#005AAA] transition hover:text-[#F5A623]"
                      >
                        <Eye size={15} />
                        View Details
                      </button>
                    </>
                  ) : (
                    <div className="animate-[fadeIn_.45s_ease]">
                      <p className="relative pl-5 text-justify text-sm leading-7 text-slate-700 before:absolute before:left-0 before:top-2 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#F5A623] before:to-[#41B650]">
                        {item.text}
                      </p>

                      <div className="mt-5 space-y-3">
                        {item.details.map((detail) => (
                          <div key={detail} className="flex gap-3">
                            <CheckCircle2 className="mt-1 shrink-0 text-[#F5A623]" size={16} />
                            <p className="text-sm leading-6 text-slate-700">{detail}</p>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenEnergy(null)}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#052b4f] transition hover:text-[#005AAA]"
                      >
                        <EyeOff size={15} />
                        Hide Details
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

  const energyCapability = [
    "Renewable energy initiatives through Jetama Energy and strategic project development.",
    "Floating solar and utility-scale solar opportunities supporting Sabah's low-carbon direction.",
    "Energy projects aligned with sustainable infrastructure growth and long-term resilience.",
    "Strategic collaboration to diversify capability beyond treated water operations.",
  ];

  const capabilityStats = [
    {
      label: "Water Capacity",
      value: "320 MLD",
      icon: Gauge,
      detail: "Final treated water capacity",
    },
    {
      label: "Water Quality",
      value: "4",
      icon: ShieldCheck,
      detail: "Key quality parameters",
    },
    {
      label: "Renewable Energy",
      value: "Solar",
      icon: Zap,
      detail: "Floating and utility-scale initiatives",
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

        <div className="mt-4 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Water, Energy, Quality & Quantity
            </h2>

            <AccentRule />

            <p className="max-w-6xl text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
              JETAMA’s total capability covering treated
              water quality standards, progressive supply quantity and renewable
              energy initiatives for sustainable infrastructure growth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
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

          <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-[#F6A623] via-[#F5A623] to-[#fbf234] p-8 text-[#052b4f] shadow-[0_26px_80px_rgba(246,166,35,0.20)]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#005AAA]/18 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#005AAA]">
                    Energy Capability
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold italic text-[#052b4f]">
                    Renewable Energy
                  </h3>
                </div>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/35 shadow-[0_16px_40px_rgba(0,90,170,0.12)]">
                  <span className="absolute h-20 w-20 rounded-full bg-white/30" style={{ animation: "capabilityPulse 2.8s ease-in-out infinite" }} />
                  <Zap className="relative text-[#005AAA]" size={42} />
                </div>
              </div>

              <div className="space-y-4">
                {energyCapability.map((item, index) => (
                  <div key={item} className="flex items-start gap-4" style={{ transitionDelay: `${index * 70}ms` }}>
                    <CheckCircle2 className="mt-1 shrink-0 text-[#005AAA]" size={18} />
                    <p className="text-sm font-semibold leading-7 text-[#052b4f]/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] bg-white/35 p-8 shadow-[0_20px_60px_rgba(0,90,170,0.07)] backdrop-blur-sm">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#005AAA]/8 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#41B650]/10 blur-3xl" />
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
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.6rem] bg-white/40 p-6 shadow-[0_14px_42px_rgba(0,90,170,0.06)] backdrop-blur-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#41B650]">Total Capability</p>
            <h4 className="mt-2 text-xl font-black text-[#052b4f]">Water Reliability</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">Quality standards and production capacity support reliable treated water supply.</p>
          </div>
          <div className="rounded-[1.6rem] bg-white/40 p-6 shadow-[0_14px_42px_rgba(0,90,170,0.06)] backdrop-blur-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F5A623]">Total Capability</p>
            <h4 className="mt-2 text-xl font-black text-[#052b4f]">Energy Direction</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">Renewable energy capability expands JETAMA’s role in sustainable infrastructure.</p>
          </div>
          <div className="rounded-[1.6rem] bg-white/40 p-6 shadow-[0_14px_42px_rgba(0,90,170,0.06)] backdrop-blur-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#005AAA]">Total Capability</p>
            <h4 className="mt-2 text-xl font-black text-[#052b4f]">Growth Capacity</h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">Capacity growth from 135 MLD to 320 MLD reflects strengthened operational capability.</p>
          </div>
        </div>
      </section>
    </article>
  );
}


function ConcessionAreaContent() {
  const [activeViewer, setActiveViewer] = useState<"coverage" | "pipeline" | null>(null);
  const [activePlace, setActivePlace] = useState("Kota Kinabalu");

  const locations = [
    {
      name: "Kota Kinabalu",
      short: "Main demand centre within JETAMA's concession coverage area.",
      image: concessionArea2,
      x: 39,
      y: 50,
      color: "bg-[#0077ff]",
    },
    {
      name: "Tuaran",
      short: "Northern district coverage supporting surrounding communities.",
      image: tuaranImage,
      x: 55,
      y: 27,
      color: "bg-[#54b948]",
    },
    {
      name: "Telibong",
      short: "Important water supply area near the northern network corridor.",
      image: telibongImage,
      x: 58,
      y: 34,
      color: "bg-[#8cc63f]",
    },
    {
      name: "Tamparuli",
      short: "Service area linked to upstream water supply and distribution routes.",
      image: tamparuliImage,
      x: 62,
      y: 40,
      color: "bg-[#ffd200]",
    },
    {
      name: "Moyog",
      short: "Strategic water treatment area and major production location.",
      image: moyogImage,
      x: 46,
      y: 56,
      color: "bg-[#00aeef]",
    },
    {
      name: "Kasigui",
      short: "Key treatment and operational support area within the network.",
      image: kasiguiImage,
      x: 48,
      y: 63,
      color: "bg-[#92278f]",
    },
    {
      name: "Papar",
      short: "Southern concession coverage area supporting water service continuity.",
      image: paparImage,
      x: 42,
      y: 74,
      color: "bg-[#ec4f9a]",
    },
  ];

  const activeLocation =
    locations.find((item) => item.name === activePlace) ?? locations[0];

  const stats = [
    {
      value: "7",
      label: "Coverage Areas",
      icon: Users,
      color: "from-[#005AAA] to-[#00aeef]",
    },
    {
      value: "2033",
      label: "Concession Period",
      icon: ShieldCheck,
      color: "from-[#41B650] to-[#7ed957]",
    },
    {
      value: "165 MLD",
      label: "Moyog WTP Capacity",
      icon: Droplets,
      color: "from-[#f0a233] to-[#fbf234]",
    },
  ];

  const imageCards = [
    {
      id: "coverage" as const,
      title: "Concession Area Map",
      subtitle: "Concession area and service coverage locations.",
      image: aiConcessionMap,
      action: "View Map",
    },
    {
      id: "pipeline" as const,
      title: "Pipeline & Reservoir Network",
      subtitle: "Route and water supply network overview.",
      image: pipelineReservoirMap,
      action: "View Network Map",
    },
  ];

  const renderPins = (zoomed = false) => (
    <>
      {locations.map((place, index) => {
        const active = activePlace === place.name;

        return (
          <button
            key={place.name}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActivePlace(place.name);
            }}
            className="group absolute z-30 -translate-x-1/2 -translate-y-full focus:outline-none"
            style={{
              left: `${place.x}%`,
              top: `${place.y}%`,
              animationDelay: `${index * 0.12}s`,
            }}
            aria-label={`Select ${place.name}`}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full ${
                active ? "bg-[#fbf234]/80" : "bg-white/70"
              }`}
            />

            <span
              className={`relative flex h-10 w-10 animate-[mapPinFloat_2.3s_ease-in-out_infinite] items-center justify-center rounded-full border-[4px] border-white text-white shadow-[0_14px_35px_rgba(0,0,0,0.38)] transition duration-300 group-hover:scale-125 ${
                active ? "bg-[#fbf234] text-[#052b4f]" : place.color
              }`}
            >
              <MapPinned size={19} />
            </span>

            <span
              className={`absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] shadow-xl transition duration-300 ${
                active
                  ? "scale-100 bg-[#052b4f] text-[#F5A623] opacity-100"
                  : "scale-90 bg-white text-[#005AAA] opacity-0 group-hover:scale-100 group-hover:opacity-100"
              }`}
            >
              {place.name}
            </span>

            {active && (
              <div
                className={`absolute left-1/2 z-40 w-[230px] -translate-x-1/2 rounded-[1.25rem] border border-white/80 bg-white p-3 text-left shadow-[0_20px_55px_rgba(0,0,0,0.28)] ${
                  zoomed ? "top-20" : "top-16 hidden md:block"
                }`}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-24 w-full rounded-xl object-cover"
                />
                <h4 className="mt-3 text-sm font-black text-[#052b4f]">
                  {place.name}
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {place.short}
                </p>
              </div>
            )}
          </button>
        );
      })}
    </>
  );

  return (
    <article className="scroll-reveal">
      <style>
        {`
          @keyframes mapPinFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-9px); }
          }
        `}
      </style>

      <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
        Concession Area
      </h2>

      <section className="relative overflow-hidden rounded-[2.8rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fcff] to-[#eefaf3] p-5 shadow-[0_30px_100px_rgba(0,90,170,0.12)] sm:p-8">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#41B650]/12 blur-3xl" />

        <div className="relative">
          <p className="max-w-4xl text-base leading-8 text-slate-700">
            JETAMA's concession area covers Kota Kinabalu and surrounding areas
            including Tuaran, Telibong, Tamparuli, Moyog, Kasigui and Papar.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`group relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br ${item.color} p-6 text-white shadow-[0_20px_55px_rgba(0,90,170,0.18)] transition duration-500 hover:-translate-y-2`}
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                      <Icon size={27} />
                    </div>

                    <div>
                      <p className="text-3xl font-black">{item.value}</p>
                      <p className="mt-1 text-sm font-semibold text-white/85">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid gap-7 xl:grid-cols-2">
            {imageCards.map((card, index) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setActiveViewer(card.id)}
                className="group relative overflow-hidden rounded-[2.3rem] border border-white bg-white text-left shadow-[0_28px_90px_rgba(0,90,170,0.16)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_38px_120px_rgba(0,90,170,0.24)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative h-[420px] overflow-hidden bg-white sm:h-[480px] xl:h-[520px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-contain p-3 transition duration-[1200ms] group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/80 via-[#052b4f]/10 to-transparent" />

                  {card.id === "coverage" && renderPins(false)}

                  <div className="absolute bottom-5 left-5 right-5 z-40 rounded-[1.7rem] border border-white/25 bg-white/18 p-5 text-white shadow-2xl backdrop-blur-md">
                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      {card.subtitle}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#fbf234] px-5 py-3 text-sm font-black text-[#052b4f] transition group-hover:bg-[#41B650]">
                      {card.action}
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeViewer && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#021727]/90 p-4 backdrop-blur-md"
          onClick={() => setActiveViewer(null)}
        >
          <button
            type="button"
            onClick={() => setActiveViewer(null)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#052b4f] shadow-lg transition hover:bg-[#fbf234]"
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          <div
            className="max-h-[94vh] w-full max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-slate-200 bg-gradient-to-r from-[#052b4f] via-[#005AAA] to-[#41B650] p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F5A623]">
                Concession Area Viewer
              </p>
              <h3 className="mt-2 text-2xl font-black">
                {activeViewer === "coverage"
                  ? `${activePlace} Coverage Pin`
                  : "Pipeline & Reservoir Network"}
              </h3>
            </div>

            {activeViewer === "coverage" ? (
              <div className="grid max-h-[78vh] overflow-y-auto xl:grid-cols-[1fr_330px]">
                <div className="overflow-auto bg-[#eef6fb] p-4">
                  <div className="relative mx-auto h-[min(72vh,760px)] w-full max-w-5xl overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-inner">
                    <img
                      src={aiConcessionMap}
                      alt="Zoomed JETAMA concession area map"
                      className="h-full w-full object-contain p-3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052b4f]/35 via-transparent to-transparent" />
                    {renderPins(true)}
                  </div>
                </div>

                <div className="border-l border-slate-200 bg-white p-5">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Select Location
                  </p>

                  <div className="grid grid-cols-2 gap-2 xl:grid-cols-1">
                    {locations.map((place) => (
                      <button
                        key={place.name}
                        type="button"
                        onClick={() => setActivePlace(place.name)}
                        className={`rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                          activePlace === place.name
                            ? "bg-[#005AAA] text-white shadow-lg"
                            : "bg-[#f8fbff] text-[#052b4f] hover:bg-[#eaf8ef] hover:text-[#087629]"
                        }`}
                      >
                        {place.name}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-[#dcebf3] bg-[#f8fbff] p-4 shadow-sm">
                    <img
                      src={activeLocation.image}
                      alt={activeLocation.name}
                      className="h-44 w-full rounded-[1.2rem] object-cover"
                    />
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-[#41B650]">
                      Selected Pin
                    </p>
                    <h4 className="mt-2 text-2xl font-black text-[#052b4f]">
                      {activeLocation.name}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {activeLocation.short}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-h-[78vh] overflow-auto bg-[#eef6fb] p-4">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-inner">
                  <img
                    src={pipelineReservoirMap}
                    alt="Pipeline and reservoir network"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

function CurrentContent({ slug }: { slug: string }) {
  if (slug === "overview") return <OverviewContent />;
  if (slug === "our-facilities") return <FacilitiesContent />;
  if (slug === "concession-area") return <ConcessionAreaContent />;
  return <TotalCapabilityContent />;
}


function CleanCorporateTheme() {
  return (
    <style>{`
      @keyframes jetamaFadeUp { from { opacity: 0; transform: translateY(28px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
      @keyframes jetamaSoftFloat { 0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; } 50% { transform: translate3d(18px,-14px,0) rotate(2deg); opacity: .82; } }
      @keyframes jetamaShine { 0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; } 28% { opacity: .45; } 100% { transform: translateX(190%) skewX(-18deg); opacity: 0; } }

      .clean-corporate-page { background: transparent; color: #0f2f44; }
      .clean-corporate-page > section:first-of-type {
        position: relative;
        isolation: isolate;
        background: transparent !important;
        color: #0f2f44 !important;
        overflow: visible;
      }
      .clean-corporate-page > section:first-of-type::before,
      .clean-corporate-page > section:first-of-type::after {
        display: none !important;
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
      .clean-corporate-page article,
      .clean-corporate-page button,
      .clean-corporate-page a.group {
        position: relative;
      }
      .clean-corporate-page article::before,
      .clean-corporate-page button::before,
      .clean-corporate-page a.group::before {
        display: none !important;
      }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,90,170,0.035)_1px,transparent_0)] [background-size:34px_34px] opacity-20" />
      </div>

      <section className="relative z-10 px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1540px]">
          <DetailBreadcrumb page={page} />
        </div>

        <div className="mx-auto grid max-w-[1540px] gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
          <Sidebar />

          <main className="clean-corporate-page min-w-0 w-full">
            <CleanCorporateTheme />
            <CurrentContent slug={slug} />
          </main>
        </div>
      </section>
    </div>
  );
}
