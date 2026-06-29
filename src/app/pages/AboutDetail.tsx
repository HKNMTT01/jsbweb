import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router";
import {
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Droplets,
  MapPinned,
  Target,
  Users,
  X,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import ceoImage from "@/assets/Datuk CEO.png";
import gmEnergyImage from "@/assets/GM JESB - JD.png";
import gmFinanceImage from "@/assets/GM FIN - WKY.png";
import gmHrImage from "@/assets/GM HR & ESG - AAZ.png";
import sgmJwsbImage from "@/assets/SGM JWSB - JAL.png";
import sgmWaterImage from "@/assets/SGM - LHM.png";

import aboutImage from "@/assets/jetama-about-4.jpg";
import heroImageDefault from "@/assets/jetama-dam-hero.jpg";

import aiConcessionMap from "@/assets/concession.png";
import concessionArea2 from "@/assets/concession-area2.jpg";
import pipelineReservoirMap from "@/assets/concessionArea.png";
import moyogLocationImage from "@/assets/MOYOG.jpg";
import tuaranLocationImage from "@/assets/TUARAN.jpg";
import telibongLocationImage from "@/assets/TELIBONG.jpg";
import kasiguiLocationImage from "@/assets/KASIGUI.jpg";
import paparLocationImage from "@/assets/PAPAR.jpg";
import tamparuliLocationImage from "@/assets/TAMPARULI.jpg";
import jetamaLogo from "@/assets/JETAMA SDN BHD LOGO (TRANSPARENT).png";
import bodChairman from "@/assets/Datuk Faisyal.png";
import bodSofian from "@/assets/Datuk Sofian Alfian Nair.png";
import bodPeter from "@/assets/Datuk Peter.png";
import bodAkian from "@/assets/DrAkian.png";


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


type AboutPage = {
  title: string;
  shortLabel?: string;
  subtitle: string;
  eyebrow?: string;
  icon: typeof BriefcaseBusiness;
  image?: string;
  content?: string[];
  cards?: string[];
  person?: string;
  honorific?: string;
  role?: string;
};

const aboutPages: Record<string, AboutPage> = {
  "ceo-message": {
    title: "CEO's Message",
    subtitle: "A message of commitment, progress and service excellence from JETAMA leadership.",
    icon: BriefcaseBusiness,
    image: aboutImage,
    content: [
      "Welcome to Jetama Sdn. Bhd.",
      "For almost three decades since 1993, Jetama has been safeguarding water supply for Kota Kinabalu and the surrounding areas at Tuaran, Penampang and Papar. We work tirelessly all year round to ensure that our consumers receive high quality water.",
      "We strive continuously to improve ourselves to better serve the community and are determined to be recognised as the water treatment company of choice in Sabah and in the region.",
      "As the CEO of Jetama, I wish to bring Jetama into a new era where the company can spread its wings into other water related industries, creating opportunities and exploring sectors that not only benefit Jetama but also Sabah as a whole.",
      "Our success cannot be achieved without the continuous support of our sole shareholder, the State Government of Sabah. I would also like to express my appreciation to the Board of Directors, our subsidiary company Jetama Water Sdn. Bhd. and all employees for working together as a team.",
      "It is time for Jetama to be known as a well-managed company and find its rightful place amongst successful government linked companies that the State can rely on and be proud of.",
      "Thank you.",
    ],
    person: "Datuk Ahmad Naim Bin Uddang",
    honorific: "PGDK",
    role: "Chief Executive Officer",
  },

  "company-profile": {
    title: "Company Profile",
    subtitle: "A trusted Sabah water utility company supporting community well-being and reliable supply.",
    icon: Building2,
    image: aboutImage,
    content: [
      "JETAMA SDN BHD, incorporated on 31st May 1988, is a private limited company in Malaysia, wholly owned by the State Government of Sabah through Sabah Development Berhad, under the Ministry of Finance (MOF), Sabah.",
      "A Privatisation cum Concession Agreement (PCCA) was signed between Jetama and the State Government of Sabah on 9th December 1992 where Jetama was awarded a twenty-year concession to supply treated water to Kota Kinabalu and the surrounding water supply areas of Tuaran, Penampang and Papar.",
      "To meet increasing water demand, Jetama was required under the PCCA to finance, design and construct the following capital works comprising the 165 MLD Moyog water treatment plant, the 70-meter-high concrete faced rockfill Babagon Dam, nine numbers of 10 ML concrete service reservoirs and 70 km of pipelines which were all completed ahead of schedule.",
      "The PCCA also required Jetama to refurbish and rehabilitate the Sabah Water Department assets handed over to Jetama at commencement. These assets comprised of five (5) treatment plants, 120 KM transmission pipelines, service reservoirs at twenty (20) locations and booster stations.",
      "Jetama’s obligation in the operation and maintenance for the production of potable water is carried out by its subsidiary company, Corporate Dynamics Sdn. Bhd. (CDSB).",
      "CDSB was established on 23rd November 1992, appointed as the operating company of Jetama and started its operation on 5th June 1993. CDSB was originally owned by Lyonnaise Des Eaux, a French company, until 3rd January 2005 when Jetama and Corporate Dynamics were fully acquired by the State Government. In 2019, CDSB became a subsidiary of Jetama through a share transaction and rebranded into Jetama Water Sdn. Bhd.",
      "The first concession period which had expired on 4th June 2013 has since been extended by the State Government for another 20 years up to the year 2033.",
    ],
  },

  "board-of-directors": {
    title: "Board of Directors",
    subtitle: "Strategic governance and leadership oversight for responsible corporate direction.",
    icon: Users,
    image: aboutImage,
    content: [
      "The Board of Directors provides strategic direction, corporate governance, and oversight to ensure JETAMA operates responsibly and effectively.",
      "Their leadership supports business continuity, sustainable planning, and transparent decision-making across the organisation.",
    ],
  },

  "top-level-management": {
    title: "Top Level Management",
    subtitle: "Executive leadership driving operational excellence and service performance.",
    icon: Award,
    image: aboutImage,
    content: [
      "JETAMA's top level management team is responsible for implementing strategies, managing operations, and ensuring service delivery meets organisational goals.",
      "The management team works closely with technical, administrative, and operational departments to maintain efficiency, reliability and quality service delivery.",
    ],
  },

  "vision-mission-core-values": {
    title: "Vision, Mission & Core Values",
    shortLabel: "Vision, Mission & Values",
    subtitle: "The principles that guide our people, operations and long-term service commitment.",
    icon: Target,
    image: aboutImage,
  },

  shareholders: {
    title: "Shareholders",
    subtitle: "Company ownership and stakeholder support behind JETAMA's growth and operations.",
    icon: CheckCircle2,
    image: aboutImage,
  },

  "concession-area": {
    title: "Concession Area",
    subtitle: "Service coverage and operational areas supporting treated water supply distribution.",
    icon: MapPinned,
    image: concessionArea2,
  },
};

const aboutNavigation = Object.entries(aboutPages).map(([slug, page]) => ({
  label: page.shortLabel ?? page.title,
  path: `/about/${slug}`,
  icon: page.icon,
}));

function SectionHero({ page }: { page: AboutPage }) {
  const heroImage = page.image ?? heroImageDefault;

  return (
    <section className="relative -mt-8 overflow-hidden bg-white pt-20 lg:-mt-10 lg:pt-24">
      <div className="absolute left-0 top-0 z-10 h-8 w-full bg-[#005AAA]" />

      <div className="relative h-[430px] overflow-hidden sm:h-[450px] lg:h-[470px]">
        <img src={heroImage} alt={page.title} className="absolute inset-0 h-full w-full object-cover object-center" />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-black/10" />
        <div className="absolute -left-24 top-0 h-full w-[55%] -skew-x-12 bg-white/92 shadow-[40px_0_90px_rgba(255,255,255,0.75)]" />
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-[#41B650]/15 blur-3xl" />
        <div className="absolute left-48 bottom-10 h-64 w-64 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white via-white/70 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl -translate-y-2">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Link to="/" className="hover:text-[#005AAA]">Home</Link>
              <ChevronRight size={15} />
              <span className="font-bold text-[#005AAA]">{page.title}</span>
            </div>

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

function DetailBreadcrumb({ page }: { page: AboutPage }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
      <Link to="/" className="transition hover:text-[#005AAA]">
        Home
      </Link>
      <ChevronRight size={15} className="text-slate-400" />
      <Link to="/about" className="transition hover:text-[#005AAA]">
        About Us
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
        <img src={jetamaLogo} alt="JETAMA" className="h-[88px] w-auto object-contain" />
      </div>

      <nav className="-mt-2 space-y-1">
        {aboutNavigation.map((item) => {
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

function StandardContent({ page }: { page: AboutPage }) {
  const isCeoMessage = Boolean(page.person);
  const isCompanyProfile = page.title === "Company Profile";

  if (isCeoMessage) {
    const [opening, ...messageParagraphs] = page.content ?? [];

    return (
      <article className="scroll-reveal">
        <section className="relative">
          <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 bottom-8 h-64 w-64 rounded-full bg-[#41B650]/8 blur-3xl" />
          <div className="pointer-events-none absolute right-[18%] top-24 h-28 w-52 rotate-[-10deg] bg-[#F5A623]/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-stretch">
            <div className="flex min-w-0 flex-col justify-between py-4 lg:min-h-[760px] lg:pr-4">
              <div>

                <h2 className="max-w-3xl font-serif text-3xl font-normal italic leading-tight text-[#052b4f] sm:text-4xl">
                  {opening}
                </h2>

                <div className="my-7 flex items-center gap-3">
                  <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
                  <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
                  <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
                </div>

                <div className="max-w-4xl space-y-5 text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
                  {messageParagraphs.map((text, index) => (
                    <p
                      key={text}
                      className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]"
                      style={{ animationDelay: `${index * 70}ms` }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <aside className="relative flex min-h-[760px] flex-col items-center justify-start overflow-visible pt-0 lg:sticky lg:top-16 lg:-mr-10">
              <div className="pointer-events-none absolute bottom-32 h-[62%] w-[82%] rounded-full bg-gradient-to-t from-[#005AAA]/12 via-[#41B650]/7 to-transparent blur-[70px]" />
              <div className="pointer-events-none absolute right-4 top-6 h-32 w-32 rounded-full bg-[#F5A623]/12 blur-3xl" />
              <div className="pointer-events-none absolute left-1/2 top-7 h-[610px] w-[390px] -translate-x-1/2 rounded-t-full rounded-b-[3.2rem] border-[3px] border-white/80 bg-gradient-to-b from-white/24 via-[#eaf5ff]/18 to-transparent shadow-[inset_0_0_35px_rgba(255,255,255,0.65),0_30px_90px_rgba(0,90,170,0.12)] sm:h-[650px] sm:w-[420px] lg:h-[680px] lg:w-[450px] xl:h-[710px] xl:w-[470px]" />
              <div className="pointer-events-none absolute left-1/2 top-12 h-[560px] w-[350px] -translate-x-1/2 rounded-t-full rounded-b-[2.7rem] bg-gradient-to-b from-[#005AAA]/8 via-white/0 to-[#41B650]/7 blur-sm sm:h-[600px] sm:w-[380px] lg:h-[630px] lg:w-[410px] xl:h-[660px] xl:w-[430px]" />

              <div className="relative flex h-[642px] w-full items-start justify-center overflow-hidden rounded-t-full rounded-b-[3rem] sm:h-[682px] lg:h-[px] xl:h-[735px]">
                <img
                  src={ceoImage}
                  alt={page.person}
                  className="relative z-10 h-[642px] w-auto max-w-none -translate-y-10 object-contain object-top drop-shadow-[0_42px_52px_rgba(0,68,130,0.20)] sm:h-[684px] lg:h-[720px] xl:h-[752px]"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              <div className="relative z-20 mt-12 w-full max-w-[470px] text-center">
                <div className="mx-auto mb-4 flex w-fit items-center gap-2">
                  <span className="h-[2px] w-12 rounded-full bg-[#005AAA]" />
                  <span className="h-[2px] w-8 rounded-full bg-[#41B650]" />
                  <span className="h-[2px] w-5 rounded-full bg-[#F5A623]" />
                </div>

                <h3 className="font-serif text-[20px] font-semibold italic leading-tight tracking-[-0.03em] text-[#052b4f] drop-shadow-[0_8px_18px_rgba(0,90,170,0.10)] sm:text-[32px]">
                  {page.person}
                </h3>

                {page.honorific && (
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.42em] text-[#005AAA]/75">
                    {page.honorific}
                  </p>
                )}

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">{page.role}</p>
              </div>
            </aside>
          </div>
        </section>
      </article>
    );
  }

  if (isCompanyProfile) {
    return (
      <article className="scroll-reveal">
        <section className="relative">
          <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#005AAA]/7 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

          <div className="relative">

            <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Company Profile
            </h2>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
              <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
              <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
            </div>

            <div className="mt-9 columns-1 gap-10 text-justify text-[15.5px] leading-8 text-slate-700 sm:text-base lg:columns-2">
              {page.content?.map((text, index) => (
                <p key={text} className="mb-6 break-inside-avoid">
                  <span className="mr-3 align-baseline font-serif text-2xl italic text-[#005AAA]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>
    );
  }

  return (
    <article className="scroll-reveal">
      <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">{page.title}</h2>

      <div className="space-y-6 text-justify text-[15px] leading-8 text-slate-700 sm:text-base">
        {page.content?.map((text) => (
          <p key={text} className="text-justify">{text}</p>
        ))}
      </div>
    </article>
  );
}


function VisionMissionContent() {
  const coreValues = [
    {
      letter: "W",
      title: "WELL-BEING",
      desc: "We strive to contribute to the well-being of our society.",
    },
    {
      letter: "A",
      title: "ACCOUNTABILITY",
      desc: "We act openly and highly value the process of recognition & improvement.",
    },
    {
      letter: "T",
      title: "TEAMWORK",
      desc: "We are strongest when we work together as a team.",
    },
    {
      letter: "E",
      title: "EXCELLENCE",
      desc: "We deliver value through performance, innovation & quality services.",
    },
    {
      letter: "R",
      title: "RESPECT",
      desc: "We value our people & trust everyone with dignity.",
    },
  ];

  return (
    <article className="scroll-reveal">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f9fcff] to-[#f3faf5] p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] lg:p-12">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#41B650]/10 blur-3xl" />

        <div className="relative">

          <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
            Vision, Mission & Core Values
          </h2>

          <div className="mt-12 text-center">
            <h3 className="text-3xl font-black">
              <span className="text-[#41B650]">“Redefining</span>{" "}
              <span className="text-[#005AAA]">Water &</span>{" "}
              <span className="text-[#f0a233]">Energy”</span>
            </h3>
          </div>

          {/* Vision */}
          <div className="mt-14">
            <div className="inline-flex rounded-xl bg-[#f0a233] px-8 py-3 text-xl font-black text-black shadow-md">
              Vision
            </div>

            <p className="mt-5 text-lg font-bold uppercase leading-9 text-[#1f2937]">
              To contribute in the well-being of the community we serve and
              recognized as the regional water treatment company of choice.
            </p>
          </div>

          {/* Mission */}
          <div className="mt-10">
            <div className="inline-flex rounded-xl bg-[#f0a233] px-8 py-3 text-xl font-black text-black shadow-md">
              Mission
            </div>

            <p className="mt-5 text-lg font-bold uppercase leading-9 text-[#1f2937]">
              To provide reliable water supply of good quality to consumers
              through expertise and innovation.
            </p>
          </div>

          {/* WATER */}
          <div className="mt-16 text-center">
            <h3 className="text-4xl font-black text-[#005AAA]">
              “Living Our Values”
            </h3>
          </div>

          <div className="mt-10 space-y-4">

            {coreValues.map((value) => (
              <div
                key={value.letter}
                className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,90,170,0.15)]"
              >
                <div className="flex w-20 items-center justify-center bg-[#005AAA] text-4xl font-black text-[#005AAA]">
                  {value.letter}
                </div>

                <div className="flex-1 bg-[#ececec] px-6 py-5">
                  <h4 className="text-lg font-black text-[#111827]">
                    {value.title}
                  </h4>

                  <p className="mt-2 text-[15px] font-medium leading-7 text-slate-700">
                    • {value.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </article>
  );
}

function BoardDirectorsContent() {
  const chairman = {
    name: "Datuk Hj. Faisyal Bin Datuk Yusof Hamdain Diego",
    position: "Chairman",
    label: "Board Chairman",
    image: bodChairman,
    quote:
      "Providing strategic governance and leadership direction for sustainable corporate growth, responsible decision-making and long-term service excellence.",
  };

  const directors = [
    {
      name: "Datuk Mohd Sofian Alfian Nair",
      position: "Director",
      label: "Board Member",
      image: bodSofian,
    },
    {
      name: "Datuk Jino @ Peter Bin Allion @ Alliun, J.P",
      position: "Director",
      label: "Board Member",
      image: bodPeter,
    },
    {
      name: "Dr. Akian Bin Ahkiew",
      position: "Director",
      label: "Board Member",
      image: bodAkian,
    },
  ];

  return (
    <article className="scroll-reveal">
      <section className="relative">
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-12 h-72 w-72 rounded-full bg-[#41B650]/8 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(260px,0.82fr)] lg:items-center">
          <div className="min-w-0 py-3 lg:pr-4">

            <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
              Board Of Directors
            </h2>

            <div className="my-7 flex items-center gap-3">
              <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
              <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
              <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
            </div>

            <div className="max-w-4xl space-y-5 text-justify font-serif text-[15.5px] italic leading-8 text-slate-700 sm:text-[16.5px] sm:leading-9">
              <p className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                The Board of Directors provides strategic direction, corporate governance and oversight to ensure JETAMA operates responsibly and effectively.
              </p>
              <p className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                Their leadership supports business continuity, sustainable planning and transparent decision-making across the organisation.
              </p>
              <p className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-10 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-[#005AAA] before:to-[#41B650]">
                Under the Chairman’s guidance, the board continues to uphold strong governance, accountability and service commitment for the communities served by JETAMA.
              </p>
            </div>

            <div className="mt-9">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">
                Chairman
              </p>
              <h3 className="mt-2 text-2xl font-black leading-tight text-[#052b4f] sm:text-3xl">
                {chairman.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#005AAA]">
                {chairman.label}
              </p>
            </div>
          </div>

          <aside className="relative flex min-h-[470px] items-end justify-center overflow-visible">
            <div className="pointer-events-none absolute bottom-0 h-[72%] w-[88%] rounded-full bg-gradient-to-t from-[#005AAA]/10 via-[#41B650]/7 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full bg-[#F5A623]/12 blur-3xl" />

            <img
              src={chairman.image}
              alt={chairman.name}
              className="relative z-10 h-[470px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_28px_38px_rgba(0,68,130,0.18)] sm:h-[510px] lg:h-[540px]"
            />
          </aside>
        </div>

        <div className="relative mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[3px] w-16 rounded-full bg-[#005AAA]" />
            <span className="h-[3px] w-8 rounded-full bg-[#41B650]" />
            <h3 className="font-serif text-2xl font-normal italic text-[#052b4f]">
              Board Members
            </h3>
          </div>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
            {directors.map((director, index) => (
              <div
                key={director.name}
                className="group text-left"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative flex min-h-[340px] items-end justify-center overflow-visible">
                  <div className="pointer-events-none absolute bottom-0 h-[70%] w-[82%] rounded-full bg-gradient-to-t from-[#005AAA]/10 via-[#41B650]/7 to-transparent blur-2xl transition duration-500 group-hover:scale-110" />
                  <img
                    src={director.image}
                    alt={director.name}
                    className="relative z-10 h-[340px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_35px_rgba(0,68,130,0.18)] transition duration-700 group-hover:-translate-y-2 sm:h-[365px]"
                  />
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#41B650]">
                    {director.position}
                  </p>

                  <h3 className="text-xl font-black leading-tight text-[#052b4f]">
                    {director.name}
                  </h3>

                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#005AAA]">
                    {director.label}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {director.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}


function TopLevelManagementContent() {
  const management = [
    {
      name: "Datuk Ahmad Naim Bin Uddang",
      role: "Chief Executive Officer",
      division: "Executive Office",
      image: ceoImage,
      tag: "CEO",
      level: "chief",
      summary:
        "Provides executive leadership and strategic direction for JETAMA’s corporate growth, operational excellence and long-term service commitment.",
    },
    {
      name: "Ir. Lo Ho Min",
      division: "Water Division",
      image: sgmWaterImage,
      tag: "SGM Water",
      level: "senior",
    },
    {
      name: "Prof. Ts. Jude Abel Logijin",
      division: "Jetama Water Sdn. Bhd.",
      image: sgmJwsbImage,
      tag: "SGM JWSB",
      level: "senior",
    },
    {
      name: "Wah Keng Yang",
      division: "Finance & Procurement Division",
      image: gmFinanceImage,
      tag: "GM Finance",
      level: "general",
    },
    {
      name: "Ag Ahmad Zaki Bin Abu Bakar",
      division: "Human Resource & ESG Division",
      image: gmHrImage,
      tag: "GM HR & ESG",
      level: "general",
    },
    {
      name: "Junidi Doronsoi",
      division: "Jetama Energy Sdn. Bhd.",
      image: gmEnergyImage,
      tag: "GM JESB",
      level: "general",
    },
  ];

  const ceo = management[0];
  const seniorManagers = management.filter((person) => person.level === "senior");
  const generalManagers = management.filter((person) => person.level === "general");

  const renderManager = (person: (typeof management)[number], index: number) => (
    <div key={person.name} className="group" style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="relative flex min-h-[330px] items-end justify-center overflow-visible">
        <div className="pointer-events-none absolute bottom-0 h-[72%] w-[80%] rounded-full bg-gradient-to-t from-[#005AAA]/9 via-[#41B650]/6 to-transparent blur-2xl transition duration-500 group-hover:scale-110" />
        <img
          src={person.image}
          alt={person.name}
          className="relative z-10 h-[330px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_22px_35px_rgba(0,68,130,0.16)] transition duration-700 group-hover:-translate-y-2"
        />
      </div>

      <div className="mt-5">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#41B650]">
          {person.tag}
        </p>
        <h4 className="text-xl font-black leading-tight text-[#052b4f]">
          {person.name}
        </h4>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {person.division}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {person.summary}
        </p>
      </div>
    </div>
  );

  return (
    <article className="scroll-reveal">
      <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
        Top Level Management
      </h2>

      <div className="relative">
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 bottom-10 h-64 w-64 rounded-full bg-[#41B650]/8 blur-3xl" />

        <p className="relative mb-10 max-w-3xl text-base leading-8 text-slate-700">
          JETAMA’s leadership team provides strategic direction, operational
          guidance and corporate governance support across the organisation.
        </p>

        <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative flex min-h-[480px] items-end justify-center overflow-visible">
            <div className="pointer-events-none absolute bottom-0 h-[72%] w-[78%] rounded-full bg-gradient-to-t from-[#005AAA]/10 via-[#41B650]/7 to-transparent blur-2xl" />
            <img
              src={ceo.image}
              alt={ceo.name}
              className="relative z-10 h-[500px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_28px_42px_rgba(0,68,130,0.18)]"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#41B650]">
              {ceo.division}
            </p>
            <h3 className="font-serif text-3xl font-normal italic leading-tight text-[#052b4f] sm:text-4xl">
              {ceo.name}
            </h3>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-[#005AAA]">
              {ceo.role}
            </p>
            <div className="my-6 flex items-center gap-3">
              <span className="h-[3px] w-20 rounded-full bg-[#005AAA]" />
              <span className="h-[3px] w-10 rounded-full bg-[#41B650]" />
              <span className="h-[3px] w-6 rounded-full bg-[#F5A623]" />
            </div>
            <p className="text-[15px] leading-8 text-slate-700">
              {ceo.summary}
            </p>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-12 rounded-full bg-[#005AAA]" />
            <h3 className="text-xl font-black text-[#052b4f]">
              Senior General Managers
            </h3>
          </div>

          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {seniorManagers.map(renderManager)}
          </div>
        </div>

        <div className="relative mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-12 rounded-full bg-[#005AAA]" />
            <h3 className="text-xl font-black text-[#052b4f]">
              General Managers
            </h3>
          </div>

          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
            {generalManagers.map(renderManager)}
          </div>
        </div>
      </div>
    </article>
  );
}


function ShareholdersContent() {
  const shareholders = [
    {
      name: "Sabah State Government",
      type: "Ultimate Shareholder",
      desc: "State ownership and strategic support.",
    },
    {
      name: "Sabah Development Berhad",
      type: "Investment Holding Entity",
      desc: "Corporate investment and development arm.",
    },
    {
      name: "Sedia Usaha Sdn. Bhd.",
      type: "Shareholding Entity",
      desc: "Supporting ownership structure.",
    },
    {
      name: "Kota Kinabalu Water Sdn. Bhd.",
      type: "Water Sector Entity",
      desc: "Key entity within the water supply structure.",
    },
    {
      name: "Jetama Sdn. Bhd.",
      type: "Concessionaire",
      desc: "Responsible concessionaire for treated water supply.",
    },
  ];

  return (
    <article className="scroll-reveal">
      <h2 className="mb-6 text-2xl font-bold text-[#005AAA]">
        Shareholders
      </h2>

      <p className="mb-8 max-w-3xl text-base leading-8 text-slate-700">
        The shareholder structure reflects JETAMA’s corporate ownership and
        operational relationship within Sabah’s water supply ecosystem.
      </p>

      <section className="relative overflow-hidden rounded-[2.3rem] border border-[#dcebf3] bg-gradient-to-br from-white via-[#f8fbff] to-[#effaf3] p-6 shadow-[0_28px_90px_rgba(0,90,170,0.10)] sm:p-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#005AAA]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#41B650]/12 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="space-y-5">
            {shareholders.map((item, index) => (
              <div key={item.name} className="relative">
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1 hover:border-[#41B650]/70 hover:shadow-[0_25px_70px_rgba(0,90,170,0.15)]">
                  <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-[#005AAA] to-[#41B650]" />

                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#005AAA] text-lg font-black text-white shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-black leading-tight text-[#052b4f]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#41B650]">
                        {item.type}
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {index !== shareholders.length - 1 && (
                  <div className="mx-auto flex h-9 w-9 items-center justify-center">
                    <div className="h-full w-[3px] bg-gradient-to-b from-[#005AAA] to-[#41B650]" />
                  </div>
                )}
              </div>
            ))}
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
      x: 42,
      y: 42,
      color: "bg-[#0077ff]",
    },
    {
      name: "Tuaran",
      short: "Northern district coverage supporting surrounding communities.",
      image: tuaranLocationImage,
      x: 58,
      y: 17,
      color: "bg-[#54b948]",
    },
    {
      name: "Telibong",
      short: "Important water supply area near the northern network corridor.",
      image: telibongLocationImage,
      x: 65,
      y: 28,
      color: "bg-[#8cc63f]",
    },
    {
      name: "Tamparuli",
      short: "Service area linked to upstream water supply and distribution routes.",
      image: tamparuliLocationImage,
      x: 75,
      y: 45,
      color: "bg-[#ffd200]",
    },
    {
      name: "Moyog",
      short: "Strategic water treatment area and major production location.",
      image: moyogLocationImage,
      x: 53,
      y: 53,
      color: "bg-[#00aeef]",
    },
    {
      name: "Kasigui",
      short: "Key treatment and operational support area within the network.",
      image: kasiguiLocationImage,
      x: 59,
      y: 66,
      color: "bg-[#92278f]",
    },
    {
      name: "Papar",
      short: "Southern concession coverage area supporting water service continuity.",
      image: paparLocationImage,
      x: 47,
      y: 79,
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
      subtitle: "Concession Area Located",
      image: aiConcessionMap,
      action: "View Here",
    },
    {
      id: "pipeline" as const,
      title: "Pipeline & Reservoir Network",
      subtitle: "Route and water supply network overview",
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
                      <p className="mt-1 text-sm font-semibold text-slate-600">
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

function OceanWaveDivider() {
  return (
    <div className="pointer-events-none relative -mt-8 h-28 overflow-hidden bg-transparent">
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-transparent via-white/80 to-white" />
      <div className="absolute left-[-5%] top-4 h-10 w-[110%] rounded-[50%] bg-white blur-2xl" />
      <div className="absolute left-[-10%] top-8 h-12 w-[120%] rounded-[50%] bg-white/95 blur-xl" />

      <svg className="absolute bottom-0 left-0 h-28 w-full" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z" fill="rgba(255,255,255,1)" />
        <path d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z" fill="rgba(248,255,250,.98)" />
        <path d="M0,105 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z" fill="rgba(103,214,111,.50)" />
        <path d="M0,130 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z" fill="rgba(65,182,80,.72)" />
        <path d="M0,160 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z" fill="rgba(0,84,166,.80)" />
        <path d="M0,190 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z" fill="rgba(0,70,145,.90)" />
        <path d="M0,215 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z" fill="rgba(0,59,122,.96)" />
      </svg>

      <div className="absolute bottom-24 left-[8%] h-8 w-5 animate-bounce rounded-full bg-white/80 blur-[1px]" />
      <div className="absolute bottom-36 left-[10%] h-4 w-4 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute bottom-28 left-[48%] h-10 w-6 animate-bounce rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      <div className="absolute bottom-40 left-[50%] h-4 w-4 animate-ping rounded-full bg-[#41B650]" />
      <div className="absolute bottom-[6.5rem] right-[12%] h-9 w-5 animate-bounce rounded-full bg-white/80" />
      <div className="absolute bottom-[9.5rem] right-[10%] h-5 w-5 animate-ping rounded-full bg-[#67D66F]/90" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />
    </div>
  );
}

export default function AboutDetail() {
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

  if (!slug) {
    return <Navigate to="/about/ceo-message" replace />;
  }

  if (!aboutPages[slug]) {
    return <Navigate to="/about/ceo-message" replace />;
  }

  const page = aboutPages[slug];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_42%,#eefaf3_100%)] text-slate-900 selection:bg-[#fbf234] selection:text-[#062A44]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 animate-pulse rounded-full bg-[#005AAA]/8 blur-3xl" />
        <div className="absolute right-[-9rem] top-36 h-[28rem] w-[28rem] animate-pulse rounded-full bg-[#41B650]/10 blur-3xl" />
        <div className="absolute left-1/3 top-16 h-40 w-40 rounded-full bg-[#F5A623]/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,90,170,0.10),transparent_32%)]" />
      </div>

      <section className="relative z-10 px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DetailBreadcrumb page={page} />
        </div>

        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <main className="min-w-0">
            {slug === "board-of-directors" ? (
              <BoardDirectorsContent />
            ) : slug === "top-level-management" ? (
              <TopLevelManagementContent />
            ) : slug === "vision-mission-core-values" ? (
              <VisionMissionContent />
            ) : slug === "shareholders" ? (
              <ShareholdersContent />
            ) : slug === "concession-area" ? (
              <ConcessionAreaContent />
            ) : (
              <StandardContent page={page} />
            )}
          </main>
        </div>
      </section>
    </div>
  );
}