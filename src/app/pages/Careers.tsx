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


      {selectedJob && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#021727]/80 px-4 py-8 backdrop-blur-md"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2.2rem] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
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
                <p className="rounded-[1.4rem] border border-[#dcebf3] bg-[#f8fbff] p-5 text-base leading-8 text-slate-700">
                  {selectedJob.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-black text-[#062f4e]">
                    Key Responsibilities
                  </h3>

                  <div className="mt-4 space-y-3">
                    {selectedJob.responsibilities.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#35B24A]" size={18} />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-black text-[#062f4e]">
                    Requirements
                  </h3>

                  <div className="mt-4 space-y-3">
                    {selectedJob.requirements.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl bg-[#f8fbff] p-3">
                        <Sparkles className="mt-1 shrink-0 text-[#F5A623]" size={18} />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="border-t border-slate-200 bg-[#f8fbfd] p-7 sm:p-10 lg:border-l lg:border-t-0">
                <div className="rounded-[2rem] border border-[#dcebf3] bg-white p-6 shadow-[0_18px_55px_rgba(0,90,170,0.10)]">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef8f1] text-[#12813b]">
                    <Mail size={31} />
                  </div>

                  <h3 className="text-2xl font-black text-[#062f4e]">
                    Submit Application
                  </h3>

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

                  <p className="mt-4 text-center text-xs font-bold text-slate-500">
                    Send to: {applicationEmail}
                  </p>
                </div>

                <div className="mt-6 rounded-[2rem] border border-[#dcebf3] bg-white p-6">
                  <h4 className="text-lg font-black text-[#062f4e]">
                    Required Documents
                  </h4>

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