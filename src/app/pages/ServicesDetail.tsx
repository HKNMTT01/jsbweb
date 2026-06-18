import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Droplet,
  Droplets,
  Factory,
  Gauge,
  Info,
  ShieldCheck,
  X,
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
    <section className="relative -mt-8 overflow-hidden bg-white pt-20 lg:-mt-10 lg:pt-24">
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
    <div className="pointer-events-none relative -mt-8 h-28 overflow-hidden bg-transparent">
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

function NumberBlock({ no }: { no: string }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#005AAA] text-lg font-black text-white shadow-sm">
      {no}
    </div>
  );
}

function OverviewContent() {
  return (
    <article className="scroll-reveal">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-white p-8 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-12">
        <div className="absolute right-8 top-8 grid grid-cols-6 gap-4 opacity-30">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#005AAA]" />
          ))}
        </div>

        <div className="relative">
          <h2 className="text-4xl font-black leading-tight text-[#005AAA]">
            Scope of Works &
            <br />
            Responsibility
          </h2>

          <p className="mt-14 text-xl font-black text-black">
            Our scope of works & responsibility covers:-
          </p>

          <div className="mt-10 space-y-10">
            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a93b] text-xl font-black text-black">
                1
              </div>

              <p className="max-w-3xl text-xl font-black leading-8 text-[#005AAA]">
                Rehabilitation & Refurbishment of existing treatment plants and
                other facilities taken over from Jabatan Air Negeri Sabah (JANS).
              </p>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a93b] text-xl font-black text-black">
                2
              </div>

              <div>
                <p className="text-xl font-black leading-8 text-[#005AAA]">
                  Construction of new facilities :-
                </p>

                <div className="mt-3 space-y-1 text-xl font-black leading-8 text-black">
                  <p>a. Moyog WTP – 165MLD (million litres per day).</p>
                  <p>b. Babagon Dam – 21,800 ML (million litres)</p>
                  <p>c. Nine 10ML concrete reservoirs.</p>
                  <p>d. 70 Kilometers of Pipeline.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#f5a93b] text-xl font-black text-black">
                3
              </div>

              <p className="max-w-3xl text-xl font-black leading-8 text-[#005AAA]">
                Operation & Maintenance during the concession period.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function FacilitiesContent() {
  const [selectedPlant, setSelectedPlant] = useState<WaterPlant | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 120, left: 120 });

  const damComponents = [
    "Catchment and Reservoir",
    "Embankment",
    "Spillway",
    "Intake Tower",
  ];

  function openPlantDetails(
    plant: WaterPlant,
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    setSelectedPlant(plant);
    setPopupPosition({
      top: Math.max(90, rect.top + rect.height / 2 - 250),
      left:
        window.innerWidth >= 1024
          ? Math.min(rect.right + 24, window.innerWidth - 720)
          : 16,
    });
  }

  return (
    <article className="scroll-reveal space-y-10">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-white p-8 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#41B650]">
          Water Infrastructure
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-[#005AAA] lg:text-4xl">
          Babagon Dam
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
          Babagon Dam is constructed across the Babagon River, a tributary of the
          Moyog River, and forms an important part of JETAMA’s water supply
          infrastructure.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {damComponents.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#fbfdff] p-5"
            >
              <NumberBlock no={String(index + 1).padStart(2, "0")} />
              <p className="font-black text-[#052b4f]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(0,44,85,0.08)]">
          <img
            src={heroImage}
            alt="Babagon Dam"
            className="h-[430px] w-full object-cover"
          />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-white p-8 shadow-[0_24px_70px_rgba(0,90,170,0.08)] lg:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#41B650]">
          Treatment Plants
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-[#005AAA] lg:text-4xl">
          Water Treatment Facilities
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
          Select a facility to view its details, design capacity and service
          information.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {waterPlants.map((plant) => (
            <button
              key={plant.title}
              type="button"
              onClick={(event) => openPlantDetails(plant, event)}
              className="group overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white text-left shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#005AAA]/40 hover:shadow-[0_18px_50px_rgba(0,90,170,0.12)]"
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={plant.image}
                  alt={plant.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-md border border-[#005AAA]/15 bg-[#f5faff] px-3 py-1.5 text-xs font-black text-[#005AAA]">
                    {plant.design}
                  </span>

                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#41B650]">
                    View
                  </span>
                </div>

                <h3 className="text-xl font-black leading-tight text-[#052b4f]">
                  {plant.title}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {plant.location}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {plant.text}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#005AAA]">
                  View Details
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {[
          [
            "Reservoirs",
            "Nine 10ML concrete reservoirs supporting treated water storage and distribution.",
          ],
          [
            "Pipelines",
            "70 kilometers of pipeline connecting water treatment, storage and supply infrastructure.",
          ],
          [
            "Existing Facilities",
            "Existing treatment plants and facilities taken over from Jabatan Air Negeri Sabah.",
          ],
        ].map(([title, text]) => (
          <article
            key={title}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
          >
            <ShieldCheck className="mb-5 text-[#41B650]" size={34} />
            <h3 className="mb-3 text-xl font-black text-[#052b4f]">
              {title}
            </h3>
            <p className="text-sm leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </section>

      {selectedPlant && (
        <div className="pointer-events-none fixed inset-0 z-[999]">
          <div
            className="pointer-events-auto fixed w-[calc(100%-32px)] max-w-[680px] overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.28)]"
            style={{
              top: popupPosition.top,
              left: popupPosition.left,
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedPlant(null)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#052b4f] shadow-sm transition hover:bg-slate-50"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-white p-5">
                <img
                  src={jetamaLogo}
                  alt="JETAMA"
                  className="mb-4 h-12 w-auto object-contain"
                />

                <div className="overflow-hidden rounded-[1rem] border border-slate-200 bg-white">
                  <img
                    src={selectedPlant.image}
                    alt={selectedPlant.title}
                    className="h-[260px] w-full object-cover"
                  />
                </div>
              </div>

              <div className="border-l border-slate-200 p-6">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#41B650]">
                  Facility Details
                </p>

                <h3 className="text-2xl font-black leading-tight text-[#052b4f]">
                  {selectedPlant.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md border border-[#005AAA]/15 bg-[#f5faff] px-3 py-1.5 text-xs font-bold text-[#005AAA]">
                    Plant Design: {selectedPlant.design}
                  </span>

                  <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600">
                    {selectedPlant.location}
                  </span>
                </div>

                <p className="mt-5 border-l-4 border-[#005AAA] bg-[#f8fbff] px-4 py-3 text-sm leading-7 text-slate-700">
                  {selectedPlant.text}
                </p>

                <div className="mt-5 space-y-2">
                  {selectedPlant.details.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 border-b border-slate-200 pb-2"
                    >
                      <CheckCircle2
                        className="mt-1 text-[#41B650]"
                        size={16}
                      />
                      <p className="text-sm leading-6 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
    ["June 1993", "135 MLD"],
    ["June 1995 (Phase I)", "175 MLD"],
    ["December 1995 (Advanced Phase II)", "215 MLD"],
    ["October 1997 (Phase II & Phase III)", "320 MLD"],
  ];

  return (
    <article className="scroll-reveal">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fbff] to-[#eef8f2] p-8 shadow-[0_28px_90px_rgba(0,90,170,0.10)] lg:p-12">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#41B650]">
          Service Capability
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-[#005AAA] lg:text-4xl">
          Water Quality & Quantity
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#052b4f] p-7 text-white shadow-[0_22px_70px_rgba(0,90,170,0.18)]">
            <Droplet className="mb-5 text-[#fbf234]" size={42} />
            <h3 className="mb-5 text-2xl font-black">Water Quality</h3>

            <div className="space-y-3">
              {quality.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#41B650]"
                    size={20}
                  />
                  <p className="text-sm font-semibold leading-7 text-white/90">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <Gauge className="mb-5 text-[#005AAA]" size={42} />
            <h3 className="mb-5 text-2xl font-black text-[#052b4f]">
              Water Quantity
            </h3>

            <div className="space-y-4">
              {quantity.map(([period, amount]) => (
                <div
                  key={period}
                  className="flex items-center justify-between rounded-2xl bg-[#f6fbff] p-5"
                >
                  <span className="text-sm font-bold text-slate-600">
                    {period}
                  </span>
                  <span className="text-xl font-black text-[#005AAA]">
                    {amount}
                  </span>
                </div>
              ))}
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
    <div className="overflow-hidden bg-white text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <SectionHero page={page} />

      <OceanWaveDivider />

      <section className="bg-white px-4 pb-8 pt-3 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <main className="min-w-0">
            <CurrentContent slug={slug} />
          </main>
        </div>
      </section>
    </div>
  );
}