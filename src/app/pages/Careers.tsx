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
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { listRows, type CareerRecord } from "../../lib/adminCms";

type Job = {
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  application_email?: string;
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

const applicationEmail = "hr@jetama.com.my";

function mapBackendCareer(item: CareerRecord): Job {
  return {
    title: item.title,
    type: item.type,
    location: item.location,
    department: item.department,
    description: item.description,
    responsibilities: item.responsibilities || [],
    requirements: item.requirements || [],
    application_email: item.application_email,
  };
}

function getApplicationMailto(job: Job) {
  const subject = encodeURIComponent(`Application for ${job.title}`);
  const body = encodeURIComponent(
    `Dear JETAMA HR Team,\n\nI would like to apply for the ${job.title} position.\n\nPlease find my application documents attached.\n\nThank you.\n\nRegards,`,
  );

  return `mailto:${job.application_email || applicationEmail}?subject=${subject}&body=${body}`;
}

function PageStyles() {
  return (
    <style>{`
      @keyframes careerFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .56; }
        50% { transform: translate3d(18px,-16px,0) rotate(2deg); opacity: .82; }
      }
      @keyframes careerFadeUp {
        from { opacity: 0; transform: translateY(24px); filter: blur(7px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      @keyframes careerShine {
        0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
        35% { opacity: .45; }
        100% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
      }
      .career-soft-in { animation: careerFadeUp .85s cubic-bezier(.2,.8,.2,1) both; }
      .career-float-a { animation: careerFloat 13s ease-in-out infinite; }
      .career-float-b { animation: careerFloat 16s ease-in-out infinite reverse; }
      .career-shine::before {
        content: "";
        position: absolute;
        top: -60%;
        bottom: -60%;
        left: -40%;
        width: 30%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
        transform: translateX(-140%) skewX(-18deg);
        pointer-events: none;
      }
      .career-shine:hover::before { animation: careerShine 1.8s ease; }
    `}</style>
  );
}

function Hero({ activeJobs }: { activeJobs: Job[] }) {
  const fullTime = activeJobs.filter((job) => job.type !== "Internship").length;
  const internship = activeJobs.filter((job) => job.type === "Internship").length;

  return (
    <section className="relative isolate overflow-hidden pt-36">
      <PageStyles />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_46%,#f8fff6_100%)]" />
      <div className="career-float-a absolute left-[-160px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="career-float-b absolute right-[-160px] top-28 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5" />
      <div className="absolute bottom-4 left-[24%] -z-10 h-28 w-[520px] rotate-[-8deg] bg-[#F5A623]/[.075] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#f7fbff] via-white/70 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-[1fr_430px] lg:items-end lg:px-8">
        <div className="career-soft-in">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Link to="/" className="transition hover:text-[#005AAA]">
              Home
            </Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="font-bold text-[#005AAA]">Careers</span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
            Career Opportunities
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.96] tracking-tight text-[#005AAA] md:text-7xl">
            Build Your Future
            <span className="block text-[#35B24A]">With Jetama</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Join a growing organisation committed to water, energy, innovation and sustainable development in Sabah.
          </p>
        </div>

        <div className="career-soft-in relative overflow-hidden rounded-[34px] bg-white/85 p-7 shadow-[0_28px_80px_rgba(15,60,110,.14)] backdrop-blur-xl [animation-delay:.12s]">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F6A623]" />
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#005AAA]/10 blur-2xl" />
          <Users className="text-[#F6A623]" size={34} />
          <p className="mt-5 text-sm font-black uppercase tracking-[0.24em] text-[#35B24A]">
            Talent Growth
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#005AAA]">
            Grow your career through meaningful corporate and operational work.
          </h2>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {[
              [activeJobs.length, "Openings"],
              [fullTime, "Full Time"],
              [internship, "Internship"],
            ].map(([value, label]) => (
              <div key={label as string} className="rounded-2xl bg-[#f8fbff] px-4 py-5 text-center shadow-sm">
                <p className="text-3xl font-black text-[#005AAA]">{value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  const [backendJobs, setBackendJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    listRows<CareerRecord>("careers", []).then((rows) => {
      setBackendJobs(rows.filter((item) => item.is_active !== false).map(mapBackendCareer));
    });
  }, []);

  const activeJobs = backendJobs.length ? backendJobs : jobs;

  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#062f4e]">
      <Hero activeJobs={activeJobs} />

      <section className="relative pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_48%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">
                Current Vacancies
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#005AAA] md:text-5xl">
                Join Our Team
              </h2>
            </div>

            <p className="max-w-xl text-sm font-semibold leading-7 text-slate-500">
              Choose the role that fits your background. Each card opens a clean detail panel with responsibilities, requirements and application information.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {activeJobs.map((job, index) => {
              const isInternship = job.type === "Internship";

              return (
                <button
                  key={job.title}
                  onClick={() => setSelectedJob(job)}
                  className="career-shine group relative overflow-hidden rounded-[34px] bg-white/90 p-7 text-left shadow-[0_22px_70px_rgba(0,90,170,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_95px_rgba(0,90,170,0.16)]"
                  style={{ animation: "careerFadeUp .75s ease both", animationDelay: `${index * 90}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#005AAA]/8 blur-2xl transition group-hover:scale-125" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef8ff] text-[#005AAA] shadow-sm">
                      {isInternship ? <GraduationCap size={31} /> : <Briefcase size={31} />}
                    </div>

                    <span className="rounded-full bg-[#ecfbef] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#12813b]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-2xl font-black leading-tight text-[#062f4e]">
                    {job.title}
                  </h3>

                  <div className="relative mt-4 space-y-2 text-sm font-bold text-slate-500">
                    <p className="flex items-center gap-2">
                      <Building2 size={15} className="text-[#35B24A]" />
                      {job.department}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={15} className="text-[#35B24A]" />
                      {job.location}
                    </p>
                  </div>

                  <p className="relative mt-5 min-h-[118px] leading-7 text-slate-600">
                    {job.description}
                  </p>

                  <div className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] transition group-hover:bg-[#005AAA] group-hover:text-white">
                    View Details
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#021727]/80 px-4 py-8 backdrop-blur-md" onClick={() => setSelectedJob(null)}>
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[34px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#052b4f] shadow-lg transition hover:bg-[#fbf234]"
              aria-label="Close job details"
            >
              <X size={22} />
            </button>

            <div className="relative overflow-hidden bg-gradient-to-r from-[#052b4f] via-[#005AAA] to-[#35B24A] px-7 py-8 text-white sm:px-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 left-12 h-52 w-52 rounded-full bg-[#F5A623]/20 blur-3xl" />

              <div className="relative">
                <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#fbf234] backdrop-blur">
                  {selectedJob.type}
                </p>

                <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                  {selectedJob.title}
                </h2>

                <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-white/90">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur">
                    <Building2 size={16} />
                    {selectedJob.department}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur">
                    <MapPin size={16} />
                    {selectedJob.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 sm:p-10">
                <p className="text-base leading-8 text-slate-700">
                  {selectedJob.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-black text-[#005AAA]">Key Responsibilities</h3>
                  <div className="mt-4 space-y-3">
                    {selectedJob.responsibilities.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#35B24A]" size={18} />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-black text-[#005AAA]">Requirements</h3>
                  <div className="mt-4 space-y-3">
                    {selectedJob.requirements.map((item) => (
                      <div key={item} className="flex gap-3">
                        <Sparkles className="mt-1 shrink-0 text-[#F5A623]" size={18} />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="bg-[#f8fbfd] p-7 sm:p-10">
                <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_55px_rgba(0,90,170,0.10)]">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ecfbef] text-[#12813b]">
                    <Mail size={31} />
                  </div>

                  <h3 className="text-2xl font-black text-[#062f4e]">Submit Application</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Click the email button below. Your email app will open with the application subject prepared.
                  </p>

                  <a
                    href={getApplicationMailto(selectedJob)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-[#005AAA]/20 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Send size={18} />
                    Apply via Email
                  </a>

                  <p className="mt-4 text-center text-xs font-bold text-slate-500">Send to: {applicationEmail}</p>
                </div>

                <div className="mt-6 rounded-[30px] bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-black text-[#005AAA]">Required Documents</h4>
                  <div className="mt-4 space-y-3">
                    {documents.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#35B24A]" size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
