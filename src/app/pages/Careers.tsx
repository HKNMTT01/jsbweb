import { Link } from "react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  insertRow,
  listRows,
  loadCmsBlocks,
  type CareerApplicationRecord,
  type CareerRecord,
  type CmsBlock,
} from "../../lib/adminCms";

type Job = CareerRecord;

const applicationEmail = "hr@jetama.com.my";
const documents = [
  "Resume / CV",
  "Cover Letter",
  "Academic Transcript",
  "Relevant Certificates",
  "Industrial Training Placement Letter for internship applicants",
];

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

function blockValue(blocks: CmsBlock[], id: string, fallback: string) {
  return blocks.find((block) => block.id === id && block.is_published !== false)?.value || fallback;
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
            <Link to="/" className="transition hover:text-[#005AAA]">Home</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="font-bold text-[#005AAA]">Careers</span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Career Opportunities</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.96] tracking-tight text-[#005AAA] md:text-7xl">
            Build Your Future
            <span className="block text-[#35B24A]">With Jetama</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Join a growing organisation committed to water, energy, innovation and sustainable development in Sabah.
          </p>
        </div>

        <div className="career-soft-in grid grid-cols-3 gap-3 rounded-[32px] border border-white/80 bg-white/80 p-4 shadow-[0_24px_70px_rgba(0,90,170,.10)] backdrop-blur-xl">
          <div className="rounded-2xl bg-[#eef8ff] p-4 text-center">
            <p className="text-3xl font-black text-[#005AAA]">{activeJobs.length}</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Openings</p>
          </div>
          <div className="rounded-2xl bg-[#ecfbef] p-4 text-center">
            <p className="text-3xl font-black text-[#35B24A]">{fullTime}</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Jobs</p>
          </div>
          <div className="rounded-2xl bg-[#fff8e8] p-4 text-center">
            <p className="text-3xl font-black text-[#F5A623]">{internship}</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Intern</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job, index, onSelect }: { job: Job; index: number; onSelect: (job: Job) => void }) {
  const isInternship = job.type === "Internship";

  return (
    <button
      onClick={() => onSelect(job)}
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
          {job.type || "Open"}
        </span>
      </div>

      <h3 className="relative mt-7 text-2xl font-black leading-tight text-[#062f4e]">{job.title}</h3>
      <div className="relative mt-4 space-y-2 text-sm font-bold text-slate-500">
        <p className="flex items-center gap-2"><Building2 size={15} className="text-[#35B24A]" />{job.department || "General"}</p>
        <p className="flex items-center gap-2"><MapPin size={15} className="text-[#35B24A]" />{job.location || "Sabah"}</p>
      </div>
      <p className="relative mt-5 min-h-[118px] leading-7 text-slate-600">{job.description}</p>
      <div className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-[#eef8ff] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#005AAA] transition group-hover:bg-[#005AAA] group-hover:text-white">
        View Details <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </div>
    </button>
  );
}

function NoOpeningCard({ message }: { message: string }) {
  return (
    <div className="mx-auto max-w-4xl rounded-[36px] border border-[#005AAA]/10 bg-white/90 p-10 text-center shadow-[0_24px_80px_rgba(0,90,170,.10)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#eef8ff] text-[#005AAA]">
        <Briefcase size={38} />
      </div>
      <p className="mt-7 text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Career Updates</p>
      <h3 className="mt-4 text-3xl font-black text-[#005AAA]">No Available Opening Position At The Moment</h3>
      <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">{message}</p>
    </div>
  );
}

function ApplicationForm({ job, onSuccess }: { job: Job; onSuccess: () => void }) {
  const [form, setForm] = useState({ applicant_name: "", applicant_email: "", applicant_phone: "", cover_message: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      await insertRow<CareerApplicationRecord>("career_applications", {
        career_id: job.id,
        career_title: job.title,
        applicant_name: form.applicant_name,
        applicant_email: form.applicant_email,
        applicant_phone: form.applicant_phone,
        cover_message: form.cover_message,
        status: "new",
      });
      setForm({ applicant_name: "", applicant_email: "", applicant_phone: "", cover_message: "" });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit application.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 space-y-3">
      {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600">{error}</p>}
      <input required value={form.applicant_name} onChange={(e) => setForm({ ...form, applicant_name: e.target.value })} placeholder="Full name *" className="h-12 w-full rounded-2xl bg-[#f8fbfd] px-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#35B24A]/15" />
      <input required type="email" value={form.applicant_email} onChange={(e) => setForm({ ...form, applicant_email: e.target.value })} placeholder="Email address *" className="h-12 w-full rounded-2xl bg-[#f8fbfd] px-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#35B24A]/15" />
      <input value={form.applicant_phone} onChange={(e) => setForm({ ...form, applicant_phone: e.target.value })} placeholder="Phone number" className="h-12 w-full rounded-2xl bg-[#f8fbfd] px-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#35B24A]/15" />
      <textarea required rows={4} value={form.cover_message} onChange={(e) => setForm({ ...form, cover_message: e.target.value })} placeholder="Short message / cover note *" className="w-full resize-none rounded-2xl bg-[#f8fbfd] px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#35B24A]/15" />
      <button disabled={saving} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-lg transition hover:-translate-y-1 disabled:opacity-60">
        <Send size={18} /> {saving ? "Submitting..." : "Submit Online"}
      </button>
    </form>
  );
}

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [cmsBlocks, setCmsBlocks] = useState<CmsBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    Promise.all([
      listRows<CareerRecord>("careers", []),
      loadCmsBlocks(),
    ]).then(([rows, blocks]) => {
      setJobs(rows.filter((item) => item.is_active !== false).sort((a, b) => (a.sort_order || 10) - (b.sort_order || 10)));
      setCmsBlocks(blocks);
    }).finally(() => setLoading(false));
  }, []);

  const noOpeningMessage = useMemo(
    () => blockValue(cmsBlocks, "careers.empty.message", "There are no available opening positions at the moment. Please check back soon for future opportunities."),
    [cmsBlocks],
  );

  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#062f4e]">
      <Hero activeJobs={jobs} />
      <section className="relative pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_48%,#f8fff7_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Current Vacancies</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#005AAA] md:text-5xl">Join Our Team</h2>
            </div>
          </div>

          {loading ? (
            <div className="rounded-[30px] bg-white/80 p-10 text-center font-black text-[#005AAA] shadow-sm">Loading careers...</div>
          ) : jobs.length ? (
            <div className="grid gap-7 lg:grid-cols-3">
              {jobs.map((job, index) => <JobCard key={job.id || job.title} job={job} index={index} onSelect={setSelectedJob} />)}
            </div>
          ) : (
            <NoOpeningCard message={noOpeningMessage} />
          )}
        </div>
      </section>

      {selectedJob && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#021727]/80 px-4 py-8 backdrop-blur-md" onClick={() => setSelectedJob(null)}>
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[34px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)]" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedJob(null)} className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#052b4f] shadow-lg transition hover:bg-[#fbf234]" aria-label="Close job details"><X size={22} /></button>

            <div className="relative overflow-hidden bg-gradient-to-r from-[#052b4f] via-[#005AAA] to-[#35B24A] px-7 py-8 text-white sm:px-10">
              <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#fbf234] backdrop-blur">{selectedJob.type}</p>
              <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{selectedJob.title}</h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-white/90">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur"><Building2 size={16} />{selectedJob.department}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur"><MapPin size={16} />{selectedJob.location}</span>
              </div>
            </div>

            {submitted && <div className="mx-7 mt-7 rounded-2xl bg-[#ecfbef] px-6 py-4 font-bold text-[#168A46] sm:mx-10">Application submitted. Admin can view it in the dashboard.</div>}

            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-7 sm:p-10">
                <p className="text-base leading-8 text-slate-700">{selectedJob.description}</p>
                <div className="mt-8">
                  <h3 className="text-xl font-black text-[#005AAA]">Key Responsibilities</h3>
                  <div className="mt-4 space-y-3">{selectedJob.responsibilities.map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-[#35B24A]" size={18} /><p className="text-sm leading-7 text-slate-700">{item}</p></div>)}</div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-black text-[#005AAA]">Requirements</h3>
                  <div className="mt-4 space-y-3">{selectedJob.requirements.map((item) => <div key={item} className="flex gap-3"><Sparkles className="mt-1 shrink-0 text-[#F5A623]" size={18} /><p className="text-sm leading-7 text-slate-700">{item}</p></div>)}</div>
                </div>
              </div>

              <aside className="bg-[#f8fbfd] p-7 sm:p-10">
                <div className="rounded-[30px] bg-white p-6 shadow-[0_18px_55px_rgba(0,90,170,0.10)]">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ecfbef] text-[#12813b]"><Mail size={31} /></div>
                  <h3 className="text-2xl font-black text-[#062f4e]">Submit Application</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Submit online so admin can view it in real time. You may still email documents to HR after submitting.</p>
                  <ApplicationForm job={selectedJob} onSuccess={() => setSubmitted(true)} />
                  <p className="mt-4 text-center text-xs font-bold text-slate-500">Documents can be emailed to: {selectedJob.application_email || applicationEmail}</p>
                </div>

                <div className="mt-6 rounded-[30px] bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-black text-[#005AAA]">Required Documents</h4>
                  <div className="mt-4 space-y-3">{documents.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-1 shrink-0 text-[#35B24A]" size={16} /><span>{item}</span></div>)}</div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
