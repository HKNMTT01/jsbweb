import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import {
  Award,
  Building2,
  ChevronRight,
  Eye,
  Factory,
  FlaskConical,
  HardHat,
  Landmark,
  Network,
  ShieldCheck,
  SunMedium,
  Target,
  X,
} from "lucide-react";

import energyHero from "@/assets/DJI_0298.jpg";
import jesbLogo from "@/assets/LOGO-JESB.png";
import waterLogo from "@/assets/JETAMA WATER - 2.png";
import solarLogo from "@/assets/solarpvlogo.png";
import waterHero from "@/assets/jetama-dam-hero.jpg";

import moyogPlant from "@/assets/MOYOG.jpg";
import telibongPlant from "@/assets/TELIBONG.jpg";
import kasiguiPlant from "@/assets/KASIGUI.jpg";
import paparPlant from "@/assets/PAPAR.jpg";
import tamparuliPlant from "@/assets/TAMPARULI.jpg";
import tuaranPlant from "@/assets/TUARAN.jpg";

import cert01 from "@/assets/cert01.png";
import cert02 from "@/assets/cert02.png";
import cert03 from "@/assets/cert03.png";
import cert04 from "@/assets/cert04.png";
import cert05 from "@/assets/cert05.png";
import cert06 from "@/assets/cert06.png";
import cert07 from "@/assets/cert07.png";

import solarPlantImage from "@/assets/pvplant.png";
import solarBabagonImage from "@/assets/pvterapung.png";
import solarLaunchImage from "@/assets/solarlaunching.png";

type SubsidiaryKey = "water" | "energy" | "solar-pv";

const logoClass =
  "mx-auto h-auto max-h-44 w-auto object-contain mix-blend-multiply drop-shadow-[0_20px_55px_rgba(0,44,85,0.35)] transition duration-500 hover:scale-105";

const waterStats = [
  { value: "209", label: "Staffs" },
  { value: "6", label: "Water Treatment Plants" },
  { value: "80 km", label: "Concession Area" },
  { value: "200 km", label: "Transmission Mains" },
  { value: "30", label: "Service Reservoirs" },
  { value: "1", label: "Babagon Dam" },
];

const waterPlants = [
  { title: "Moyog Water Treatment Plant", design: "Design 165MLD", image: moyogPlant },
  { title: "Kasigui Water Treatment Plant", design: "Design 50MLD", image: kasiguiPlant },
  { title: "Papar Water Treatment Plant", design: "Design 9MLD", image: paparPlant },
  { title: "Telibong Water Treatment Plant", design: "Design 64MLD", image: telibongPlant },
  { title: "Tamparuli Water Treatment Plant", design: "Design 2.5MLD", image: tamparuliPlant },
  { title: "Tuaran Water Treatment Plant", design: "Design 1MLD", image: tuaranPlant },
];

const waterDepartments = [
  {
    title: "Plant Operation & Maintenance",
    icon: Factory,
    text: "Operates and maintains the water treatment and transmission facilities supplying potable water to Kota Kinabalu and the West Coast District.",
  },
  {
    title: "Laboratory, Quality & Environment",
    icon: FlaskConical,
    text: "Monitors and controls the treatment process through in-house laboratories, ISO systems and environmental programmes.",
  },
  {
    title: "Safety, Health & Security",
    icon: ShieldCheck,
    text: "Promotes safety, health, security and well-being through audits, training, risk assessment and teamwork.",
  },
  {
    title: "Finance & Procurement",
    icon: Landmark,
    text: "Supports financial reporting, procurement, ERP, e-procurement and warehousing functions.",
  },
  {
    title: "Technical & Transmission",
    icon: HardHat,
    text: "Manages engineering, technical maintenance, transmission mains, reservoirs and network reliability.",
  },
];

const certificates = [
  { title: "Certificate 01", image: cert01 },
  { title: "Certificate 02", image: cert02 },
  { title: "Certificate 03", image: cert03 },
  { title: "Certificate 04", image: cert04 },
  { title: "Certificate 05", image: cert05 },
  { title: "Certificate 06", image: cert06 },
  { title: "Certificate 07", image: cert07 },
];

const energyMission = [
  "Generate sustainable renewable energy solutions to enable Sabah to reduce its carbon footprint.",
  "Deliver economical, innovative solutions to the highest expectations of customers and partners.",
  "Build a culture of excellence through integrity and competency.",
  "Foster trust, collaboration and performance to achieve business goals and become an employer of choice.",
];

const energyValueDetails = [
  {
    title: "PEOPLE",
    text: "Empowering and caring for each other to create a safe and respectful working environment where our people can grow, perform and succeed.",
  },
  {
    title: "CLIENT",
    text: "The success of our clients radiates our success in delivery.",
  },
  {
    title: "INTEGRITY",
    text: "Performing with high professional and ethical standards through trust, honesty, fairness, respect and safety.",
  },
  {
    title: "COMMITMENT",
    text: "Engaging, loyal and accountable to stakeholders in achieving common goals and excellence.",
  },
  {
    title: "INNOVATION & CHANGE",
    text: "Remaining ahead of change by being entrepreneurial, passionate, open, innovative and smart.",
  },
  {
    title: "EXCELLENCE",
    text: "Leading through excellence and innovative solutions to support a sustainable low carbon state.",
  },
];

const energyOrgMain = [
  {
    title: "Chief Executive Officer",
    name: "Datuk Ahmad Naim Bin Uddang",
  },
  {
    title: "General Manager",
    name: "Junidi Doronsoi",
  },
];

const energyOrgSide = [
  {
    title: "Executive Secretary",
    name: "Zulila Ghazalli",
  },
  {
    title: "Deputy General Manager - Operations",
    name: "Calum W. Mogindol",
  },
  {
    title: "Executive Secretary",
    name: "Cheryl Suminundu W Majinbon",
  },
  {
    title: "Senior Electrical Engineer",
    name: "Lionel Joslin",
  },
  {
    title: "Project Development Manager",
    name: "Tang Yang Cheng",
  },
  {
    title: "Accountant",
    name: "Angeline Chan Chew Yit",
  },
  {
    title: "Senior Engineer - Project",
    name: "Tan Lik Len",
  },
  {
    title: "Electrical Engineer",
    name: "Mohd Fadzir Muhitam",
  },
  {
    title: "Electrical Engineer",
    name: "Mohamad Shafiee Bin Mohamad Ghazali",
  },
];

const projectMilestones = [
  "28 November 2017 : Letter of Acceptance of Offer from ST.",
  "16 November 2020 : Letter of Notification from ST for acceptance of price revision.",
  "15 December 2021 : Power Purchase Agreement Signed.",
  "Scheduled Commercial Operations Date : 30th June 2023.",
];
function EnergyOrganizationChart() {
  const Box = ({
    title,
    name,
    filled = false,
    className = "",
  }: {
    title: string;
    name: string;
    filled?: boolean;
    className?: string;
  }) => (
    <div
      className={`relative z-10 rounded-2xl px-5 py-4 text-center shadow-[0_18px_45px_rgba(0,44,85,0.12)] ${
        filled
          ? "border-2 border-[#061b46] bg-[#0b56a5] text-white"
          : "border-2 border-slate-900 bg-white text-slate-900"
      } ${className}`}
    >
      <h3 className="text-sm font-black uppercase leading-5">{name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase leading-5">{title}</p>
    </div>
  );

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Network className="mx-auto mb-5 text-[#f9a51a]" size={42} />
          <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#f9a51a] decoration-4 underline-offset-8">
            Organizational Chart
          </h2>
        </div>

        <div className="relative mt-16 overflow-x-auto rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#fff8ea] to-white p-10 shadow-[0_24px_80px_rgba(0,44,85,0.08)]">
          <div className="relative mx-auto min-w-[1000px]">
            <div className="absolute left-1/2 top-[78px] h-[580px] w-[6px] -translate-x-1/2 bg-[#f9a51a]" />
            <div className="absolute left-[50%] top-[235px] h-[6px] w-[210px] bg-[#f9a51a]" />
            <div className="absolute left-[50%] top-[405px] h-[6px] w-[320px] bg-[#f9a51a]" />
            <div className="absolute left-[25%] top-[355px] h-[6px] w-[25%] bg-[#f9a51a]" />
            <div className="absolute left-[25%] top-[355px] h-[120px] w-[6px] bg-[#f9a51a]" />

            <div className="mx-auto w-[300px]">
              <Box
                filled
                name="Datuk Ahmad Naim Bin Uddang"
                title="Chief Executive Officer"
              />
            </div>

            <div className="mx-auto mt-14 w-[300px]">
              <Box filled name="Junidi Doronsoi" title="General Manager" />
            </div>

            <div className="absolute left-[655px] top-[220px] w-[245px]">
              <Box name="Zulila Ghazalli" title="Executive Secretary" />
            </div>

            <div className="absolute left-[250px] top-[310px] w-[270px]">
              <Box
                name="Calum W. Mogindol"
                title="Deputy General Manager - Operations"
              />
            </div>

            <div className="absolute left-[110px] top-[430px] w-[230px]">
              <Box name="Cheryl Suminundu W Majinbon" title="Executive Secretary" />
            </div>

            <div className="absolute left-[270px] top-[565px] w-[230px]">
              <Box name="Lionel Joslin" title="Senior Electrical Engineer" />
            </div>

            <div className="absolute left-[555px] top-[395px] w-[230px]">
              <Box name="Tang Yang Cheng" title="Project Development Manager" />
            </div>

            <div className="absolute left-[805px] top-[395px] w-[230px]">
              <Box name="Angeline Chan Chew Yit" title="Accountant" />
            </div>

            <div className="absolute left-[555px] top-[545px] w-[230px]">
              <Box name="Tan Lik Len" title="Senior Engineer - Project" />
            </div>

            <div className="absolute left-[555px] top-[695px] w-[230px]">
              <Box name="Mohd Fadzir Muhitam" title="Electrical Engineer" />
            </div>

            <div className="absolute left-[555px] top-[845px] w-[230px]">
              <Box
                name="Mohamad Shafiee Bin Mohamad Ghazali"
                title="Electrical Engineer"
              />
            </div>

            <div className="h-[970px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SubsidiaryDetails() {
  const { type } = useParams();
  const selected = type as SubsidiaryKey | undefined;

  if (!selected || !["water", "energy", "solar-pv"].includes(selected)) {
    return <Navigate to="/subsidiary" replace />;
  }

  return (
    <main className="overflow-hidden bg-white pt-32 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#005AAA]">Home</Link>
          <ChevronRight size={15} />
          <Link to="/subsidiary" className="hover:text-[#005AAA]">Subsidiaries</Link>
          <ChevronRight size={15} />
          <span className="font-bold text-[#005AAA]">
            {selected === "water"
              ? "Jetama Water Sdn. Bhd."
              : selected === "energy"
                ? "Jetama Energy Sdn. Bhd."
                : "Solar PV Power Sdn. Bhd."}
          </span>
        </div>
      </div>

      {selected === "water" && <JetamaWaterDetail />}
      {selected === "energy" && <JetamaEnergyDetail />}
      {selected === "solar-pv" && <SolarPVDetail />}
    </main>
  );
}

function JetamaWaterDetail() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-white">
        <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden">
          <img src={waterHero} alt="Jetama Water" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061b46]/75 via-[#0b2f7f]/45 to-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <img src={waterLogo} alt="Jetama Water" className={logoClass} />

            <h1 className="mt-10 text-4xl font-black text-[#102f83] sm:text-5xl">
              Jetama Water Sdn. Bhd.
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Formerly known as Corporate Dynamics Sdn. Bhd., Jetama Water is involved in the Kota Kinabalu Water
              Privatization Project, providing potable drinking water for consumers on the West Coast of Sabah.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {waterStats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,44,85,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,44,85,0.13)]"
              >
                <div className="text-3xl font-black text-[#102f83]">{item.value}</div>
                <div className="mt-2 text-sm font-bold text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#102f83] decoration-2 underline-offset-4">
              Company Background
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-6xl space-y-7 text-justify text-lg leading-9 text-slate-700">
            <p>
              <span className="font-black text-slate-900">JETAMA WATER SDN. BHD. (JWSB)</span>, formerly known as
              Corporate Dynamics Sdn. Bhd., is a subsidiary of JETAMA SDN. BHD. and a locally incorporated company
              currently involved in the Kota Kinabalu Water Privatization Project. The company provides potable drinking
              water for consumers on the West Coast of Sabah. Its parent company is Sabah Development Berhad.
            </p>

            <p>
              JWSB operates and maintains existing water treatment facilities within the region of Kota Kinabalu. The
              service area is approximately 80 km by 25 km, stretching from Tuaran in the North to Papar in the South.
              The company runs six water treatment plants at Tuaran, Tamparuli, Telibong, Kasigui, Papar and Moyog, with
              Moyog Water Treatment Plant being the largest treatment plant in Sabah.
            </p>

            <p>
              JWSB is also responsible for operating and maintaining the primary network consisting of approximately
              200 km of transmission mains, 30 service reservoirs and the Babagon Dam.
            </p>

            <p>
              Its mission is to provide quality service where the production and quality of potable water meets
              internationally recognized standards. The company emphasizes technology transfer and advanced systems such
              as Telemetry, Automation and Supervisory Control and Data Acquisition System (SCADA) to provide a better
              and more reliable service.
            </p>

            <p>
              With in-house laboratories to monitor and control the treatment process, together with diverse training
              programmes, JWSB endeavours to meet its contract requirements through a well-trained, committed and
              professional workforce.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#0b56a5] p-8 text-white shadow-[0_24px_70px_rgba(0,44,85,0.15)]">
              <div className="mx-auto mb-6 w-fit bg-[#35b24a] px-10 py-2 text-2xl font-black">
                Vision
              </div>
              <p className="text-lg leading-8">
                To be recognized as a trusted and technically competent partner for life in the management of potable
                water in terms of Quality, Quantity, Reliability, Economy, Safety and Environment.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#0b56a5] p-8 text-white shadow-[0_24px_70px_rgba(0,44,85,0.15)]">
              <div className="mx-auto mb-6 w-fit bg-[#35b24a] px-10 py-2 text-2xl font-black">
                Mission
              </div>
              <p className="text-lg leading-8">
                To provide clean, high quality and uninterrupted potable water to our client supported by the efforts of
                a committed and competent workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OrganizationChart />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <Award className="mx-auto mb-5 text-[#35b24a]" size={40} />
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#102f83] decoration-2 underline-offset-4">
              Certifications
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.map((cert) => (
              <button
                key={cert.title}
                onClick={() => setPreview(cert.image)}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.15)]"
              >
                <div className="relative h-64 overflow-hidden bg-[#f8fbff]">
                  <img src={cert.image} alt={cert.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#061b46]/0 opacity-0 transition group-hover:bg-[#061b46]/45 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#102f83]">
                      <Eye size={18} />
                      Preview
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black uppercase text-[#102f83]">{cert.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">Jetama Water Certification</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {preview && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <button
            onClick={() => setPreview(null)}
            className="absolute right-6 top-6 rounded-full bg-white p-3 text-[#102f83] shadow-xl transition hover:scale-105"
          >
            <X size={24} />
          </button>

          <div className="max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl">
            <img src={preview} alt="Certificate Preview" className="max-h-[86vh] w-full object-contain" />
          </div>
        </div>
      )}

      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#102f83] decoration-2 underline-offset-4">
              Core Operational Divisions
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {waterDepartments.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-[#edf8ff] p-4 text-[#102f83]">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-[#102f83]">{item.title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#102f83] decoration-2 underline-offset-4">
              6 Water Treatment Plants
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Jetama Water operates and maintains six water treatment plants, 30 service reservoirs, approximately
              200 km transmission mains and Babagon Dam.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {waterPlants.map((plant) => (
              <article
                key={plant.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
              >
                <div className="h-56 overflow-hidden">
                  <img src={plant.image} alt={plant.title} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-[#68bd00]" size={22} />
                    <h3 className="font-black uppercase tracking-wide text-[#102f83]">{plant.title}</h3>
                  </div>
                  <p className="mt-3 font-bold text-[#35b24a]">{plant.design}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function OrganizationChart() {
  const Box = ({
    title,
    name,
    filled = false,
    className = "",
  }: {
    title: string;
    name?: string;
    filled?: boolean;
    className?: string;
  }) => (
    <div
      className={`relative z-10 rounded-2xl px-6 py-5 text-center shadow-[0_18px_45px_rgba(0,44,85,0.10)] ${
        filled
          ? "bg-[#0b56a5] text-white"
          : "border-2 border-[#0b56a5] bg-white text-[#0b56a5]"
      } ${className}`}
    >
      <h3 className="text-sm font-black uppercase tracking-wide">{title}</h3>
      {name && <p className="mt-2 text-sm font-bold uppercase">{name}</p>}
    </div>
  );

  return (
    <section className="bg-[#f8fbff] py-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Network className="mx-auto mb-5 text-[#35b24a]" size={42} />
          <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#102f83] decoration-2 underline-offset-4">
            Organization Chart
          </h2>
        </div>

        <div className="relative mt-16 overflow-x-auto rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_24px_80px_rgba(0,44,85,0.08)]">
          <div className="relative mx-auto min-w-[1250px]">
            <div className="absolute left-[50%] top-[95px] h-[315px] w-[6px] -translate-x-1/2 bg-[#35b24a]" />
            <div className="absolute left-[18%] top-[80px] h-[185px] w-[6px] border-l-[6px] border-dashed border-[#35b24a]" />
            <div className="absolute left-[18%] top-[80px] h-[6px] w-[32%] bg-[#35b24a]" />
            <div className="absolute left-[50%] top-[410px] h-[6px] w-[42%] bg-[#35b24a]" />
            <div className="absolute left-[8%] top-[410px] h-[6px] w-[42%] bg-[#35b24a]" />

            <div className="mx-auto w-[330px]">
              <Box title="Chief Executive Officer" name="Datuk Ahmad Naim Bin Uddang" filled />
            </div>

            <div className="mt-8 grid grid-cols-3 items-start gap-8">
              <div className="pt-8">
                <Box
                  title="Human Resource & Environmental, Social & Governance (ESG) Division"
                  filled
                />
                <div className="mx-auto mt-8 w-[300px]">
                  <Box title="General Manager" name="Ag Ahmad Zaki Bin Abu Bakar" />
                </div>
              </div>

              <div>
                <Box title="Senior General Manager" name="Prof. Ts. Jude Abel Logijin" />
              </div>

              <div className="pt-28">
                <Box title="Senior Office Manager" name="Florence Jaini" />
              </div>
            </div>

            <div className="mt-32 grid grid-cols-6 gap-7">
              {[
                ["Safety, Health & Environment", "Deputy General Manager", "Ferdinand Kigis"],
                ["Operations", "Assistant General Manager", "Debbie Annabell Peter"],
                ["Finance & Procurement", "Assistant General Manager", "Lydia Liaw Fui Shiang"],
                ["Engineering", "Assistant General Manager", "Khartini Musbi"],
                ["Laboratory", "Assistant General Manager", "Joyce Kristy Primus"],
                ["Administration", "Senior Manager", "Adrian Roy Siponong"],
              ].map(([division, role, name]) => (
                <div key={division} className="relative">
                  <div className="absolute left-1/2 top-[-76px] h-[76px] w-[6px] -translate-x-1/2 bg-[#35b24a]" />
                  <Box title={division} filled className="rounded-none" />
                  <div className="mt-7">
                    <Box title={role} name={name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JetamaEnergyDetail() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fff8ea] via-white to-white">
        <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden">
          <img src={energyHero} alt="Jetama Energy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061b46]/75 via-[#f9a51a]/35 to-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <img src={jesbLogo} alt="Jetama Energy" className={logoClass} />

            <h1 className="mt-10 text-4xl font-black text-[#102f83] sm:text-5xl">
              Jetama Energy Sdn. Bhd.
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Delivering economical, innovative and sustainable renewable energy
              solutions to support Sabah’s transition towards a sustainable and
              low carbon environment.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#f9a51a] decoration-4 underline-offset-8">
              Vision & Mission
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff8ea] to-white p-8 shadow-sm">
              <div className="mb-5 w-fit rounded-md bg-[#f9a51a] px-6 py-2 text-lg font-black text-slate-900">
                Vision
              </div>
              <p className="text-lg leading-8 text-slate-700">
                Our vision is to energize Sabah towards a sustainable and low
                carbon environment.
              </p>
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-gradient-to-br from-[#fff8ea] to-white p-8 shadow-sm">
              <div className="mb-5 w-fit rounded-md bg-[#f9a51a] px-6 py-2 text-lg font-black text-slate-900">
                Mission
              </div>
              <ul className="space-y-4 text-lg leading-8 text-slate-700">
                {energyMission.map((item) => (
                  <li key={item} className="flex gap-3">
                    <SunMedium className="mt-1 shrink-0 text-[#f9a51a]" size={22} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#f9a51a] decoration-4 underline-offset-8">
              Our Values
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {energyValueDetails.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,44,85,0.12)]"
              >
                <div className="mb-4 w-fit rounded-md bg-[#f9a51a] px-4 py-2 text-sm font-black text-slate-900">
                  {item.title}
                </div>
                <p className="text-sm font-semibold leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EnergyOrganizationChart />

      <SolarProjectSection />
    </section>
  );
}

function SolarPVDetail() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fff8ea] via-white to-white">
        <div className="absolute inset-x-0 top-0 h-[320px] overflow-hidden">
          <img src={energyHero} alt="Solar PV Power" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061b46]/70 via-[#f9a51a]/35 to-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <img src={solarLogo} alt="Solar PV Power" className={logoClass} />

            <h1 className="mt-10 text-4xl font-black text-[#102f83] sm:text-5xl">
              Solar PV Power Sdn. Bhd.
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Solar PV Power Sdn. Bhd. is a special purpose vehicle established
              for the joint venture between Jetama Energy Sdn. Bhd. and Symbior
              Solar Siam Ltd for the development of large scale solar projects.
            </p>
          </div>
        </div>
      </div>

      <SolarProjectSection />
      <SolarFutureProjects />
    </section>
  );
}

function SolarProjectSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#f9a51a] decoration-4 underline-offset-8">
            10MWac LSS PV Project
          </h2>

          <h3 className="mt-10 text-3xl font-black leading-tight text-[#102f83]">
            Large Scale Solar Photovoltaic Plant at Kg Bukit Kalam, Federal Territory Labuan
          </h3>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6 text-lg leading-9 text-slate-600">
            <p>
              <span className="font-black text-slate-900">Solar PV Power Sdn. Bhd.</span>{" "}
              is a special purpose vehicle for the joint venture between Jetama
              Energy Sdn. Bhd. and Symbior Solar Siam Ltd for the development of
              a 10MW large scale solar project at Kg Bukit Kalam, Federal
              Territory Labuan. Jetama Energy holds 70% equity.
            </p>

            <p>
              The RM48 million solar plant generates approximately 23 Gigawatt
              hours of power per year while reducing carbon dioxide generation
              of 11,000 tons per year compared with existing power generation
              mix in Sabah and Labuan.
            </p>

            <p>
              The Power Purchase Agreement with Sabah Electricity is for a
              period of 21 years commencing after the scheduled commercial
              operations date.
            </p>

            <p className="font-bold text-[#102f83]">
              The power plant successfully achieved commercial operations on
              9th February 2024.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-[0_24px_70px_rgba(0,44,85,0.12)]">
            <img
              src={solarPlantImage}
              alt="10MWac Large Scale Solar PV Plant"
              className="h-[360px] w-full object-cover"
            />
            <div className="bg-[#102f83] px-6 py-4 text-sm font-black uppercase text-white">
              10MWac Large Scale Solar PV Plant - F.T. Labuan
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <ul className="space-y-4 rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 text-lg leading-8 text-slate-600">
            {projectMilestones.map((item) => (
              <li key={item} className="flex gap-4">
                <SunMedium className="mt-1 shrink-0 text-[#f9a51a]" size={22} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SolarFutureProjects() {
  return (
    <section className="bg-[#f8fbff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black uppercase text-[#102f83] underline decoration-[#f9a51a] decoration-4 underline-offset-8">
            Development of Two LSS Projects Through LSS Sabah 2024
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-7 text-lg leading-9 text-slate-600">
          <p>
            Jetama Energy, through the bidding exercise carried out by the Energy
            Commission of Sabah in 2024, secured two Large Scale Solar projects.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#102f83]">
                13.21 MWac Floating Solar PV
              </h3>
              <p className="mt-4 leading-8">
                Proposed development of 13.21 MWac Floating Solar PV at Babagon
                Dam, Penampang.
              </p>
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black text-[#102f83]">
                15 MWac Ground Mounted Solar PV
              </h3>
              <p className="mt-4 leading-8">
                Proposed development of 15 MWac fixed-tilt ground mounted Solar
                PV at Batu Sapi, Sandakan.
              </p>
            </div>
          </div>

          <p>
            Power Purchase Agreements for both projects have been signed and are
            scheduled for commercial operations in December 2026. The PPAs with
            Sabah Electricity will be for a period of 25 years respectively.
          </p>

          <p>
            The floating solar PV power plant on the water body of Babagon Dam
            is a first-of-its-kind in Sabah, with solar panels installed across
            approximately 40 acres of its surface. The floating solar system
            helps reduce water evaporation and increases solar panel efficiency
            due to the cooling effect from water.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              src={solarLaunchImage}
              alt="Launching of solar PV projects"
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <img
              src={solarBabagonImage}
              alt="Floating Solar PV at Babagon Dam"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-5xl text-center text-sm font-semibold italic text-slate-500">
          Launching of the Babagon Dam floating solar PV and Batu Sapi
          ground-mounted Solar PV projects.
        </p>
      </div>
    </section>
  );
}