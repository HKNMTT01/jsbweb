import { Link } from "react-router";
import {
  ArrowRight,
  ChevronRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

type Job = {
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

const jobs: Job[] = [
  {
    title: "Software Engineer",
    type: "Full Time",
    location: "Kota Kinabalu, Sabah",
    department: "Information Technology",
    description:
      "Develop, enhance and maintain internal systems, dashboards and digital solutions that support JETAMA Group operations.",
    responsibilities: [
      "Develop and maintain company web-based systems.",
      "Support system enhancement, bug fixing and user requirements.",
      "Manage database structure, reporting dashboards and internal tools.",
      "Coordinate with departments for digitalisation initiatives.",
    ],
    requirements: [
      "Degree or Diploma in Computer Science, Software Engineering, IT or related field.",
      "Knowledge in React, TypeScript, database and system integration.",
      "Good problem-solving and documentation skills.",
      "Able to work independently and in a team.",
    ],
  },
  {
    title: "Civil Engineer",
    type: "Full Time",
    location: "Kota Kinabalu, Sabah",
    department: "Engineering / Operations",
    description:
      "Support water infrastructure planning, technical coordination, project monitoring and operational improvement initiatives.",
    responsibilities: [
      "Assist in infrastructure planning and technical site coordination.",
      "Monitor project progress, reports and operational requirements.",
      "Support water treatment and distribution-related engineering works.",
      "Coordinate with consultants, contractors and internal teams.",
    ],
    requirements: [
      "Degree in Civil Engineering or related field.",
      "Good technical reporting and communication skills.",
      "Knowledge in infrastructure or water-related projects is an advantage.",
      "Able to perform site coordination when required.",
    ],
  },
  {
    title: "Internship Programme",
    type: "Internship",
    location: "Sabah",
    department: "Various Departments",
    description:
      "Open for university students seeking industrial training in IT, Engineering, Business, Finance, Administration and Creative fields.",
    responsibilities: [
      "Support daily departmental tasks and assigned projects.",
      "Assist with documentation, reporting and administrative coordination.",
      "Participate in learning activities and workplace exposure.",
      "Complete assigned tasks under supervisor guidance.",
    ],
    requirements: [
      "University or college placement letter.",
      "Relevant academic background.",
      "Resume, transcript and supporting documents.",
      "Positive attitude and willingness to learn.",
    ],
  },
];

const documents = [
  "Resume / CV",
  "Cover Letter",
  "Academic Transcript",
  "Relevant Certificates",
  "Industrial Training Placement Letter for internship applicants",
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
        {/* White Foam */}
        <path
          d="M0,45 C180,10 320,90 520,55 C720,20 900,95 1100,45 C1280,10 1360,25 1440,20 L1440,260 L0,260 Z"
          fill="rgba(255,255,255,1)"
        />

        {/* Soft White Layer */}
        <path
          d="M0,70 C220,30 420,105 620,65 C820,30 1020,100 1220,60 C1320,40 1390,48 1440,42 L1440,260 L0,260 Z"
          fill="rgba(248,255,250,.98)"
        />

        {/* Light Green */}
        <path
          d="M0,100 C220,65 420,130 650,95 C870,60 1060,130 1260,95 C1360,78 1410,85 1440,82 L1440,260 L0,260 Z"
          fill="rgba(103,214,111,.55)"
        />

        {/* JETAMA Green */}
        <path
          d="M0,125 C240,90 460,155 690,120 C910,90 1120,155 1320,118 C1390,105 1420,108 1440,105 L1440,260 L0,260 Z"
          fill="rgba(65,182,80,.75)"
        />

        {/* Corporate Blue */}
        <path
          d="M0,155 C250,115 500,175 740,145 C950,120 1160,175 1360,145 C1400,140 1425,138 1440,136 L1440,260 L0,260 Z"
          fill="rgba(0,84,166,.78)"
        />

        {/* Main Blue */}
        <path
          d="M0,182 C260,140 530,205 770,175 C990,145 1190,205 1380,175 C1410,170 1430,168 1440,166 L1440,260 L0,260 Z"
          fill="rgba(0,70,145,.88)"
        />

        {/* Deep JETAMA Blue */}
        <path
          d="M0,210 C300,170 560,225 820,200 C1080,175 1260,220 1440,195 L1440,260 L0,260 Z"
          fill="rgba(0,59,122,.96)"
        />
      </svg>

      {/* Left Splash */}
      <div className="absolute bottom-24 left-[8%]">
        <div className="h-8 w-5 animate-bounce rounded-full bg-white/80 blur-[1px]" />
      </div>

      <div className="absolute bottom-36 left-[10%]">
        <div className="h-4 w-4 animate-ping rounded-full bg-[#67D66F]/90" />
      </div>

      <div className="absolute bottom-30 left-[12%]">
        <div className="h-3 w-3 animate-bounce rounded-full bg-white/70" />
      </div>

      {/* Center Splash */}
      <div className="absolute bottom-28 left-[48%]">
        <div className="h-10 w-6 animate-bounce rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,.8)]" />
      </div>

      <div className="absolute bottom-40 left-[50%]">
        <div className="h-4 w-4 animate-ping rounded-full bg-[#41B650]" />
      </div>

      <div className="absolute bottom-34 left-[52%]">
        <div className="h-3 w-3 animate-bounce rounded-full bg-white/90" />
      </div>

      {/* Right Splash */}
      <div className="absolute bottom-26 right-[12%]">
        <div className="h-9 w-5 animate-bounce rounded-full bg-white/80" />
      </div>

      <div className="absolute bottom-38 right-[10%]">
        <div className="h-5 w-5 animate-ping rounded-full bg-[#67D66F]/90" />
      </div>

      <div className="absolute bottom-30 right-[8%]">
        <div className="h-3 w-3 animate-bounce rounded-full bg-white/70" />
      </div>

      {/* Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/45 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-[#41B650]/20 via-white/50 to-[#0054A6]/20 blur-xl" />

      {/* Floating Drops */}
      <div className="absolute left-[20%] bottom-20 h-2 w-2 animate-ping rounded-full bg-white" />
      <div className="absolute left-[35%] bottom-32 h-3 w-3 animate-bounce rounded-full bg-[#67D66F]" />
      <div className="absolute left-[65%] bottom-24 h-2 w-2 animate-ping rounded-full bg-white" />
      <div className="absolute left-[80%] bottom-36 h-4 w-4 animate-bounce rounded-full bg-[#41B650]" />
      <div className="absolute bottom-20 left-[55%] h-5 w-5 animate-bounce rounded-full bg-white/70" />
      <div className="absolute bottom-28 left-[72%] h-2 w-2 animate-ping rounded-full bg-[#0054A6]" />
      <div className="absolute bottom-18 left-[90%] h-4 w-4 animate-pulse rounded-full bg-white/70" />

      {/* Glow */}
      <div className="absolute bottom-10 left-0 right-0 h-10 bg-[#0054A6]/20 blur-3xl" />
      <div className="absolute bottom-19 left-0 right-0 h-6 bg-white/40 blur-2xl" />
    </div>
  );
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <main className="overflow-hidden bg-[#f6fafc] text-[#062f4e]">
      <section className="relative overflow-hidden bg-[#052b4f] px-4 pb-28 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(65,182,80,0.35),transparent_34%),radial-gradient(circle_at_86%_25%,rgba(245,166,35,0.22),transparent_30%),linear-gradient(135deg,#052b4f,#005aaa)]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute left-10 top-36 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl animate-[fadeInUp_.8s_ease_both]">
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/75">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-white">
                Careers
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Build Your Future With JETAMA
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-blue-50">
              Join a growing organisation committed to water, energy,
              innovation and sustainable development in Sabah.
            </p>
          </div>
        </div>
      </section>

      <OceanWaveDivider />

      <section className="relative -mt-32 z-10 bg-transparent px-4 pb-20 pt-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mt-3 text-4xl font-black text-[#062f4e]">
                Join Our Team
              </h2>
            </div>

          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {jobs.map((job, index) => {
              const isInternship = job.type === "Internship";

              return (
                <button
                  key={job.title}
                  onClick={() => setSelectedJob(job)}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#dcebf3] bg-[#f8fbfd] p-7 text-left shadow-[0_18px_60px_rgba(0,90,170,0.08)] transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_85px_rgba(0,90,170,0.16)]"
                  style={{
                    animation: "fadeInUp .7s ease both",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
                  <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#005AAA]/8 transition group-hover:scale-150" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#005AAA] shadow-sm">
                      {isInternship ? (
                        <GraduationCap size={31} />
                      ) : (
                        <Briefcase size={31} />
                      )}
                    </div>

                    <span className="rounded-full bg-[#eef8f1] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#12813b]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black leading-tight text-[#062f4e]">
                    {job.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-sm font-bold text-slate-500">
                    <p className="flex items-center gap-2">
                      <Building2 size={15} className="text-[#35B24A]" />
                      {job.department}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={15} className="text-[#35B24A]" />
                      {job.location}
                    </p>
                  </div>

                  <p className="mt-5 min-h-[96px] leading-7 text-slate-600">
                    {job.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#005AAA]">
                    View Details
                    <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}