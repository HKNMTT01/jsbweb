import { useEffect, useState, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router";
import {
  CalendarCheck,
  ChevronRight,
  ClipboardList,
  Droplets,
  Eye,
  ExternalLink,
  MapPinned,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

import moyogImage from "@/assets/MOYOG.jpg";
import telibongImage from "@/assets/TELIBONG.jpg";
import tuaranImage from "@/assets/TUARAN.jpg";
import kasiguiImage from "@/assets/KASIGUI.jpg";
import bottleFactoryImage from "@/assets/opening bottle factory.jpg";
import sabahFcCollabImage from "@/assets/collab sabah fc.png";
import systemresolveImage from "@/assets/jetama resolve system.jpeg";

type ProjectCategory = "Water Project" | "Renewable Energy";
type ProjectSegment =
  "industrial-project" | "commercial-project" | "concession-project";

type ProjectPage = {
  title: string;
  subtitle: string;
  eyebrow: string;
  icon: typeof ClipboardList;
  category: ProjectCategory;
  accent: string;
};

type TimelineProject = {
  no: string;
  year: string;
  category: ProjectCategory;
  title: string;
  description?: string;
  points?: string[];
  image: string;
  status?: string;
  segment?: ProjectSegment;
  sourceUrl?: string;
  sourceLabel?: string;
};

const projectPages: Record<string, ProjectPage> = {
  "water-project": {
    title: "Water Project",
    subtitle:
      "A corporate timeline of JETAMA's water infrastructure project experience.",
    eyebrow: "Water Infrastructure",
    icon: Droplets,
    category: "Water Project",
    accent: "#35b24a",
  },
  "renewable-energy-project": {
    title: "Renewable Energy Project",
    subtitle:
      "A corporate timeline of JETAMA's renewable energy and solar PV project experience.",
    eyebrow: "Renewable Energy",
    icon: Sun,
    category: "Renewable Energy",
    accent: "#f9a51a",
  },
};

const waterProjectSegments: Record<
  ProjectSegment,
  {
    label: string;
    shortLabel: string;
    subtitle: string;
    status: "ready" | "soon";
  }
> = {
  "industrial-project": {
    label: "Industrial Project",
    shortLabel: "Industrial",
    subtitle:
      "Industrial and rural water technology initiatives supporting clean drinking water access for remote, off-grid and underserved communities in Sabah.",
    status: "ready",
  },
  "commercial-project": {
    label: "Commercial Project",
    shortLabel: "Commercial",
    subtitle:
      "Commercial water initiatives highlighting JETAMA's bottled water business expansion, brand partnerships and public-facing water products.",
    status: "ready",
  },
  "concession-project": {
    label: "Concession Project",
    shortLabel: "Concession",
    subtitle:
      "Existing concession-related water infrastructure timeline and project portfolio.",
    status: "ready",
  },
};

const isWaterSegment = (value?: string): value is ProjectSegment =>
  value === "industrial-project" ||
  value === "commercial-project" ||
  value === "concession-project";

const timelineProjects: TimelineProject[] = [
  {
    no: "01",
    year: "1997",
    category: "Water Project",
    title: "Project Financing, Design and Built Water Facilities",
    points: [
      "Babagon Dam (21.5Mm³ Storage, Concrete Faced Rock-filled Dam)",
      "Moyog Water Treatment Plant (165MLD)",
      "70km Transmission Pipeline up to 1.2M diameter",
      "9 Numbers of 10ML Concrete Reservoirs",
    ],
    image: moyogImage,
  },
  {
    no: "02",
    year: "2008",
    category: "Water Project",
    title: "Kasigui Water Treatment Plant",
    points: ["Clarifiers and Filters Repair"],
    image: kasiguiImage,
  },
  {
    no: "03",
    year: "2011",
    category: "Water Project",
    title: "Construction of 3 Numbers of 10 ML Concrete Reservoirs",
    image: tuaranImage,
  },
  {
    no: "04",
    year: "2016",
    category: "Water Project",
    title: "Construction of Sludge Lagoon at Kasigui Water Treatment Plant",
    image: kasiguiImage,
  },
  {
    no: "05",
    year: "2016",
    category: "Water Project",
    title: "Construction of Soil Nail RC Wall and Protection Works",
    image: tuaranImage,
  },
  {
    no: "06",
    year: "2017",
    category: "Water Project",
    title:
      "Construction of Raw Water Pumping Main from Madziang Pumping Station to Kasigui Water Treatment Plant",
    image: telibongImage,
  },
  {
    no: "07",
    year: "2018",
    category: "Water Project",
    title: "Upgrading Filters for Moyog Water Treatment Plant",
    image: moyogImage,
  },
  {
    no: "08",
    year: "2023",
    category: "Water Project",
    title: "Urgent Water Supply Scheme (UWSS) Telibong 1 Water Treatment Plant",
    description: "5MLD water treatment plant development.",
    image: telibongImage,
  },
  {
    no: "09",
    year: "2025",
    category: "Water Project",
    title:
      "Engineering, Procurement, Construction and Commissioning (EPCC) of a 0.5 MLD Seawater Reverse Osmosis Plant",
    description: "Scalable to 2.5 MLD.",
    image: kasiguiImage,
  },
  {
    no: "10",
    year: "Ongoing",
    category: "Water Project",
    title:
      "Design, Construction, Installation and Commission of a New Package Plant at Kasigui Water Treatment Plant",
    description: "Capacity of 5 MLD under the Urgent Water Supply Scheme.",
    image: kasiguiImage,
    status: "Ongoing",
  },
  {
    no: "11",
    year: "Ongoing",
    category: "Water Project",
    title: "Upgrading the Kabang Intake Capacity from 9 MLD to 30 MLD",
    image: telibongImage,
    status: "Ongoing",
  },
  {
    no: "01",
    year: "2024",
    category: "Water Project",
    segment: "industrial-project",
    title: "Solar-Powered Nano-Filtration Drinking Water System",
    description:
      "JETAMA introduced a solar-powered nano-filtration drinking water system as a pilot initiative to help resolve drinking water supply issues in remote areas of Sabah.",
    points: [
      "Pilot system planned for Kampung Pulau Berhala in Sandakan, Kampung Tanjung Batu in Sukau and Kampung Paris in Kinabatangan.",
      "Designed for remote and off-grid communities that need reliable access to clean drinking water.",
      "Uses solar panels to power water treatment units, supporting low operating cost and sustainable deployment.",
      "Each unit can supply clean drinking water for up to 5,000 residents, with similar projects planned for more villages.",
    ],
    image: systemresolveImage,
    status: " Consumption rate of 4L to 6L per person",
    sourceUrl:
      "https://www.theborneopost.com/2024/10/19/system-to-resolve-drinking-water-supply-issues-in-remote-areas-of-sabah/",
    sourceLabel: "The Borneo Post",
  },
  {
    no: "01",
    year: "2025",
    category: "Water Project",
    segment: "commercial-project",
    title: "Opening of JETAMA Bottled Water Factory at KKIP",
    description:
      "JETAMA opened its new bottled water factory at Kota Kinabalu Industrial Park on 26 February 2025, marking a commercial milestone for the company's drinking water product expansion.",
    points: [
      "New bottled water factory officially opened at KKIP on 26 February 2025.",
      "Recognised as a major step for JETAMA's commercial water product direction.",
      "Supports higher production efficiency, wider distribution and trusted drinking water supply.",
      "Factory operations emphasise safety, cleanliness, regulatory compliance and environmental sustainability.",
    ],
    image: bottleFactoryImage,
    status: "Opened 26 February 2025",
    sourceUrl:
      "https://www.dailyexpress.com.my/news/253366/jetama-sdn-bhd-membuka-kilang-pembotolan-air-baharu-pada-26-februari-2025/?utm_source=Newswav&utm_medium=Website",
    sourceLabel: "Daily Express Malaysia",
  },
  {
    no: "02",
    year: "2025",
    category: "Water Project",
    segment: "commercial-project",
    title: "JETAMA Waig Sponsorship With Sabah FC",
    description:
      "JETAMA strengthened its commercial water brand visibility through a RM1.5 million Sabah FC sponsorship, with the Waig bottled water brand to be displayed on the team's jersey.",
    points: [
      "JETAMA signed a RM1.5 million sponsorship agreement with Sabah FC for the season.",
      "The Waig bottled water brand will be officially displayed on Sabah FC jerseys.",
      "Waig was introduced as JETAMA's new drinking water brand and official drinking water for Sabah FC.",
      "The initiative connects commercial brand growth with youth, sports and community development in Sabah.",
    ],
    image: sabahFcCollabImage,
    status: "RM1.5 Million Sponsorship",
    sourceUrl:
      "https://sabahnews.com.my/jetama-taja-sabah-fc-rm1-5-juta-logo-waig-akan-dipapar-rasmi-di-jersi-pasukan/",
    sourceLabel: "Sabah News",
  },
  {
    no: "01",
    year: "2024",
    category: "Renewable Energy",
    title: "10 MWac Large Scale Solar PV Plant with Trackers in F.T. Labuan",
    description: "Including operations and maintenance.",
    image: tuaranImage,
  },
  {
    no: "02",
    year: "2026",
    category: "Renewable Energy",
    title:
      "Small Scale 95 kWp / 80 kWac Ground-Mounted Solar PV Plant with 200 kWh Battery Energy Storage",
    description: "Located at POIC Desalination Plant, Lahad Datu, Sabah.",
    image: moyogImage,
  },
  {
    no: "03",
    year: "Ongoing",
    category: "Renewable Energy",
    title:
      "Proposed Development of 13.21 MWac Floating Solar PV Plant at Babagon Dam, Penampang, Sabah",
    description: "Scheduled completion: December 2026.",
    image: tuaranImage,
    status: "Scheduled completion December 2026",
  },
  {
    no: "04",
    year: "Ongoing",
    category: "Renewable Energy",
    title:
      "Proposed Development of 15 MWac Fixed-Tilt Ground Mounted Solar PV Plant at Batu Sapi, Sandakan, Sabah",
    description: "Scheduled completion: December 2026.",
    image: moyogImage,
    status: "Scheduled completion December 2026",
  },
];

function Breadcrumb({
  page,
  activeSegment,
}: {
  page: ProjectPage;
  activeSegment?: ProjectSegment;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
        <Link to="/" className="hover:text-[#005AAA]">
          Home
        </Link>
        <ChevronRight size={15} />
        <Link to="/projects" className="hover:text-[#005AAA]">
          Projects
        </Link>
        <ChevronRight size={15} />
        <span className="font-bold text-[#005AAA]">{page.title}</span>
        {activeSegment && (
          <>
            <ChevronRight size={15} />
            <span className="font-bold text-[#35b24a]">
              {waterProjectSegments[activeSegment].label}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function ComingSoonProjects({
  activeSegment,
}: {
  activeSegment: ProjectSegment;
}) {
  const item = waterProjectSegments[activeSegment];

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-14">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-[#35B24A]/8 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#35b24a]">
          Project Timeline
        </p>

        <h2 className="mt-4 font-serif text-3xl font-normal italic leading-tight text-[#005AAA] sm:text-4xl">
          {item.label} Timeline Coming Soon
        </h2>

        <div className="mx-auto my-6 flex w-fit items-center gap-3">
          <span className="h-[3px] w-16 rounded-full bg-[#005AAA]" />
          <span className="h-[3px] w-8 rounded-full bg-[#35B24A]" />
          <span className="h-[3px] w-5 rounded-full bg-[#F5A623]" />
        </div>

        <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
          This section has been prepared for future project records. Once the{" "}
          {item.shortLabel.toLowerCase()} project information is ready, the
          timeline can be added here while keeping the same clean corporate
          layout.
        </p>

        <Link
          to="/projects/water-project/concession-project"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-6 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(0,90,170,0.22)] transition hover:-translate-y-1 hover:bg-[#35B24A] hover:text-[#052b4f]"
        >
          View Concession Timeline
          <ChevronRight size={17} />
        </Link>
      </div>
    </section>
  );
}

function ProjectTimeline({
  page,
  projects,
  onSelect,
}: {
  page: ProjectPage;
  projects: TimelineProject[];
  onSelect: (project: TimelineProject) => void;
}) {
  const Icon = page.icon;

  useEffect(() => {
    const revealItems =
      document.querySelectorAll<HTMLElement>(".timeline-reveal");

    revealItems.forEach((item) => item.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
        });
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [projects, page.category]);

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-14">
      <style>
        {`
          .timeline-reveal {
            opacity: 0;
            transform: translateY(70px) scale(.96);
            transition: opacity .7s ease, transform .85s cubic-bezier(.2,.9,.2,1);
            will-change: opacity, transform;
          }

          .timeline-reveal.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .timeline-card {
            opacity: 0;
            transform: translateY(34px) scale(.94);
            transition: opacity .65s ease .08s, transform .75s cubic-bezier(.2,1.15,.25,1) .08s;
          }

          .timeline-reveal.is-visible .timeline-card {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .center-node {
            opacity: 0;
            transform: scale(.5);
            transition: opacity .45s ease .18s, transform .55s cubic-bezier(.2,1.5,.3,1) .18s;
          }

          .timeline-reveal.is-visible .center-node {
            opacity: 1;
            transform: scale(1);
          }

          .main-timeline-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 6px;
            transform: translateX(-50%);
            border-radius: 999px;
            background-image: linear-gradient(#7b7b7b 45%, transparent 0%);
            background-size: 6px 18px;
            opacity: .25;
          }

          .main-timeline-progress {
            position: absolute;
            top: 0;
            left: 50%;
            width: 7px;
            height: 0%;
            transform: translateX(-50%);
            border-radius: 999px;
            background: linear-gradient(to bottom, #102f83, #35b24a, #f9a51a, #102f83);
            box-shadow: 0 0 22px rgba(53,178,74,.32);
            transition: height 2.2s cubic-bezier(.2,.9,.2,1);
          }

          .timeline-wrapper.in-view .main-timeline-progress {
            height: 100%;
          }

          .connector-line {
            position: absolute;
            top: 50%;
            height: 4px;
            width: 0;
            border-radius: 999px;
            opacity: 0;
            transform: translateY(-50%);
            z-index: 0;
            transition: width .8s cubic-bezier(.2,.9,.2,1), opacity .35s ease;
          }

          .connector-line.to-left {
            right: calc(50% + 36px);
            background: linear-gradient(90deg, #102f83, #35b24a);
          }

          .connector-line.to-right {
            left: calc(50% + 36px);
            background: linear-gradient(90deg, #35b24a, #102f83);
          }

          .timeline-reveal.is-visible .connector-line {
            width: calc(50% - 260px);
            opacity: 1;
          }

          @media (max-width: 1023px) {
            .timeline-reveal {
              transform: translateY(45px) scale(.98);
            }

            .timeline-reveal.is-visible {
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Icon
          className="mx-auto mb-5"
          size={42}
          style={{ color: page.accent }}
        />

        <h2 className="font-serif text-4xl font-normal italic leading-tight text-[#005AAA] sm:text-5xl">
          Project Timeline
        </h2>

        <div className="mx-auto mt-5 flex w-fit items-center gap-3">
          <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
          <span className="h-[3px] w-10 rounded-full bg-[#35B24A]" />
          <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
        </div>
      </div>

      <TimelineWrapper>
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const ProjectIcon =
              project.category === "Renewable Energy" ? Sun : Droplets;

            return (
              <div
                key={`${project.category}-${project.no}-${project.title}`}
                className="timeline-reveal relative"
              >
                <div
                  className={`connector-line ${
                    isLeft ? "to-left" : "to-right"
                  }`}
                />

                <div className="hidden lg:grid lg:grid-cols-[1fr_120px_1fr] lg:items-center lg:gap-10">
                  <div className="relative z-10 flex justify-end">
                    {isLeft && (
                      <ProjectCard
                        page={page}
                        project={project}
                        onSelect={onSelect}
                      />
                    )}
                  </div>

                  <div className="relative z-20 flex justify-center">
                    <TimelineNode
                      page={page}
                      project={project}
                      ProjectIcon={ProjectIcon}
                    />
                  </div>

                  <div className="relative z-10 flex justify-start">
                    {!isLeft && (
                      <ProjectCard
                        page={page}
                        project={project}
                        onSelect={onSelect}
                      />
                    )}
                  </div>
                </div>

                <div className="relative grid grid-cols-[74px_1fr] gap-5 px-4 lg:hidden">
                  <div className="absolute left-[40px] top-0 h-full w-[4px] rounded-full bg-gradient-to-b from-[#102f83] via-[#35b24a] to-[#f9a51a]" />

                  <div className="relative z-20 pt-4">
                    <TimelineNode
                      page={page}
                      project={project}
                      ProjectIcon={ProjectIcon}
                    />
                  </div>

                  <ProjectCard
                    page={page}
                    project={project}
                    onSelect={onSelect}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </TimelineWrapper>
    </section>
  );
}

function TimelineWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    const wrapper = document.querySelector(".timeline-wrapper");

    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) wrapper.classList.add("in-view");
      },
      { threshold: 0.12 },
    );

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-wrapper relative mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="main-timeline-line hidden lg:block" />
      <div className="main-timeline-progress hidden lg:block" />
      {children}
    </div>
  );
}

function TimelineNode({
  page,
  project,
  ProjectIcon,
}: {
  page: ProjectPage;
  project: TimelineProject;
  ProjectIcon: typeof Droplets;
}) {
  return (
    <div
      className="center-node flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] border-[7px] border-white text-white shadow-[0_18px_45px_rgba(0,44,85,0.22)]"
      style={{ backgroundColor: page.accent }}
      title={project.year}
    >
      <ProjectIcon size={34} />
    </div>
  );
}

function ProjectCard({
  page,
  project,
  onSelect,
}: {
  page: ProjectPage;
  project: TimelineProject;
  onSelect: (project: TimelineProject) => void;
}) {
  const previewPoints = project.points?.slice(0, 2) ?? [];

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="timeline-card group relative block w-full max-w-[440px] overflow-hidden rounded-[2rem] bg-white/78 text-left shadow-[0_22px_70px_rgba(0,44,85,0.10)] backdrop-blur-md transition duration-500 hover:-translate-y-3 hover:shadow-[0_34px_100px_rgba(0,44,85,0.18)]"
    >
      <div className="relative h-[205px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061b46]/95 via-[#061b46]/38 to-transparent" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#102f83] shadow-lg">
            {project.year}
          </span>

          {project.status && (
            <span
              className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg"
              style={{ backgroundColor: page.accent }}
            >
              Ongoing
            </span>
          )}
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <p
            className="mb-2 text-xs font-black uppercase tracking-[0.18em]"
            style={{
              color:
                project.category === "Renewable Energy" ? "#ffd96a" : "#b8ff6a",
            }}
          >
            {project.category}
          </p>

          <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span
            className="text-5xl font-black leading-none"
            style={{ color: page.accent }}
          >
            {project.no}
          </span>

          <span className="text-xl font-black text-[#102f83]">
            {project.year}
          </span>
        </div>

        {project.description && (
          <p className="mt-4 line-clamp-2 text-sm leading-7 text-slate-600 sm:text-base">
            {project.description}
          </p>
        )}

        {previewPoints.length > 0 && (
          <ul className="mt-5 space-y-3">
            {previewPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-6 text-slate-600"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: page.accent }}
                />
                <span className="line-clamp-2">{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#102f83] transition group-hover:bg-[#102f83] group-hover:text-white">
          <Eye size={15} />
          View Details
        </div>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: TimelineProject | null;
  onClose: () => void;
}) {
  if (!project) return null;

  const Icon = project.category === "Renewable Energy" ? Sun : Droplets;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 rounded-full bg-white p-3 text-[#102f83] shadow-xl transition hover:scale-105"
        aria-label="Close project details"
      >
        <X size={24} />
      </button>

      <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-white shadow-2xl">
        <div className="relative h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b46]/95 via-[#061b46]/35 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#b8ff6a] backdrop-blur">
              <Icon size={15} />
              {project.category}
            </p>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              {project.title}
            </h2>
          </div>
        </div>

        <div className="p-8 lg:p-10">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#eef8ff] p-5">
              <CalendarCheck className="mb-3 text-[#102f83]" size={28} />
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Year
              </p>
              <p className="mt-1 text-2xl font-black text-[#102f83]">
                {project.year}
              </p>
            </div>

            <div className="rounded-2xl bg-[#ecfbef] p-5">
              <ClipboardList className="mb-3 text-[#35b24a]" size={28} />
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Project No.
              </p>
              <p className="mt-1 text-2xl font-black text-[#102f83]">
                {project.no}
              </p>
            </div>

            <div className="rounded-2xl bg-[#fff7e6] p-5">
              <MapPinned className="mb-3 text-[#f9a51a]" size={28} />
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Coverage
              </p>
              <p className="mt-1 text-2xl font-black text-[#102f83]">Sabah</p>
            </div>
          </div>

          {project.description && (
            <p className="text-lg leading-8 text-slate-700">
              {project.description}
            </p>
          )}

          {project.points && (
            <div className="mt-7 rounded-[1.5rem] bg-[#f8fbff] p-6">
              <h3 className="mb-5 text-xl font-black text-[#102f83]">
                Project Scope
              </h3>

              <ul className="space-y-3 text-slate-700">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#35b24a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.status && (
            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-5 py-3 text-sm font-black text-[#102f83]">
              <Sparkles size={17} />
              {project.status}
            </div>
          )}

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#005AAA] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(0,90,170,0.22)] transition hover:-translate-y-1 hover:bg-[#35B24A] hover:text-[#052b4f]"
            >
              <ExternalLink size={17} />
              Read Source{project.sourceLabel ? `: ${project.sourceLabel}` : ""}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CleanCorporateTheme() {
  return (
    <style>{`
      @keyframes jetamaFadeUp {
        from { opacity: 0; transform: translateY(26px); filter: blur(8px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }

      @keyframes jetamaSoftFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .55; }
        50% { transform: translate3d(18px,-14px,0) rotate(2deg); opacity: .82; }
      }

      @keyframes jetamaShine {
        0% { transform: translateX(-150%) skewX(-18deg); opacity: 0; }
        28% { opacity: .45; }
        100% { transform: translateX(190%) skewX(-18deg); opacity: 0; }
      }

      .clean-corporate-page {
        background: linear-gradient(135deg,#f8fbff 0%,#ffffff 42%,#eefaf3 100%);
      }

      .project-detail-shell {
        position: relative;
        isolation: isolate;
      }

      .project-detail-shell::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 1px 1px, rgba(0,90,170,.055) 1px, transparent 0);
        background-size: 28px 28px;
        opacity: .42;
        pointer-events: none;
        z-index: -1;
      }

      .project-detail-glow-blue {
        position: absolute;
        left: -8rem;
        top: 5rem;
        height: 24rem;
        width: 24rem;
        border-radius: 999px;
        background: rgba(0,90,170,.08);
        filter: blur(70px);
        pointer-events: none;
        z-index: -1;
      }

      .project-detail-glow-green {
        position: absolute;
        right: -9rem;
        top: 8rem;
        height: 28rem;
        width: 28rem;
        border-radius: 999px;
        background: rgba(65,182,80,.10);
        filter: blur(80px);
        pointer-events: none;
        z-index: -1;
      }

      .project-detail-glow-gold {
        position: absolute;
        left: 35%;
        top: 4rem;
        height: 12rem;
        width: 12rem;
        border-radius: 999px;
        background: rgba(245,166,35,.09);
        filter: blur(55px);
        pointer-events: none;
        z-index: -1;
      }

      .clean-corporate-page > section {
        background: transparent !important;
      }

      .clean-corporate-page .scroll-reveal {
        animation: jetamaFadeUp .82s cubic-bezier(.2,.8,.2,1) both;
      }

      .clean-corporate-page .timeline-wrapper {
        max-width: 1180px;
      }

      .clean-corporate-page .timeline-card {
        border: 1px solid rgba(0,90,170,.10);
        background: rgba(255,255,255,.90) !important;
        box-shadow: 0 24px 80px rgba(0,90,170,.12) !important;
      }

      .clean-corporate-page .timeline-card:hover {
        box-shadow: 0 32px 100px rgba(0,90,170,.18) !important;
      }

      .clean-corporate-page .center-node {
        box-shadow: 0 20px 55px rgba(0,90,170,.24) !important;
      }

      .clean-corporate-page article,
      .clean-corporate-page button,
      .clean-corporate-page a.group {
        position: relative;
        overflow: hidden;
      }

      .clean-corporate-page article::before,
      .clean-corporate-page button::before,
      .clean-corporate-page a.group::before {
        content: "";
        position: absolute;
        top: -50%;
        bottom: -50%;
        left: -35%;
        width: 28%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent);
        transform: translateX(-150%) skewX(-18deg);
        pointer-events: none;
      }

      .clean-corporate-page article:hover::before,
      .clean-corporate-page button:hover::before,
      .clean-corporate-page a.group:hover::before {
        animation: jetamaShine 1.9s ease;
      }
    `}</style>
  );
}

export default function ProjectsDetail() {
  const { slug = "water-project", segment } = useParams();
  const page = projectPages[slug];
  const [selectedProject, setSelectedProject] =
    useState<TimelineProject | null>(null);

  const isWaterProject = slug === "water-project";
  const activeSegment: ProjectSegment | undefined = isWaterProject
    ? isWaterSegment(segment)
      ? segment
      : undefined
    : undefined;

  useEffect(() => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, segment]);

  if (!page) {
    return <Navigate to="/projects/water-project/concession-project" replace />;
  }

  if (isWaterProject && !segment) {
    return <Navigate to="/projects/water-project/concession-project" replace />;
  }

  if (isWaterProject && segment && !isWaterSegment(segment)) {
    return <Navigate to="/projects/water-project/concession-project" replace />;
  }

  if (!isWaterProject && segment) {
    return <Navigate to={`/projects/${slug}`} replace />;
  }

  const filteredProjects = timelineProjects.filter((item) => {
    if (isWaterProject) {
      if (activeSegment === "industrial-project") {
        return item.segment === "industrial-project";
      }

      if (activeSegment === "commercial-project") {
        return item.segment === "commercial-project";
      }

      if (activeSegment === "concession-project") {
        return (
          item.category === "Water Project" &&
          item.segment !== "commercial-project" &&
          item.segment !== "industrial-project"
        );
      }

      return false;
    }

    return item.category === page.category;
  });

  return (
    <main className="clean-corporate-page min-h-screen overflow-hidden text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <CleanCorporateTheme />

      <section className="project-detail-shell relative z-10 px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="project-detail-glow-blue" />
        <div className="project-detail-glow-green" />
        <div className="project-detail-glow-gold" />

        <Breadcrumb page={page} activeSegment={activeSegment} />

        {isWaterProject &&
        activeSegment &&
        waterProjectSegments[activeSegment].status === "soon" ? (
          <ComingSoonProjects activeSegment={activeSegment} />
        ) : (
          <ProjectTimeline
            key={`${slug}-${activeSegment ?? "main"}`}
            page={page}
            projects={filteredProjects}
            onSelect={setSelectedProject}
          />
        )}
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
