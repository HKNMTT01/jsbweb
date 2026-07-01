import {
  Building2,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Printer,
  Send,
} from "lucide-react";
import { useState } from "react";
import { insertRow, type ContactInquiryRecord } from "../../lib/adminCms";
import { Link } from "react-router";

import jetamaEnergyLogo from "@/assets/jetama_energy.png";
import jetamaWaterLogo from "@/assets/JETAMA WATER - 2.png";
import jetamaAlpineLogo from "@/assets/jetama_alpine_pipe.png";
import solarLogo from "@/assets/solar_pv_power.png";
import jetamaLogo from "@/assets/jetama-wide-logo-transparent.png";

type Company = {
  name: string;
  shortName: string;
  accent: string;
  logo: string;
  logoLarge?: boolean;
};

type ContactGroup = {
  groupTitle: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  companies: Company[];
};

const contactGroups: ContactGroup[] = [
  {
    groupTitle: "Riverson Suites, Block B - Level 10",
    address:
      "Unit No: B2-10-03, Block B, The Riverson Suites, Coastal Road, 88100 Kota Kinabalu, Sabah.",
    phone: "+6 088 249 521",
    fax: "+6 088 249 517",
    email: "Office@jetama.com.my",
    companies: [
      {
        name: "JETAMA SDN BHD - HQ",
        shortName: "Headquarters",
        accent: "#005AAA",
        logo: jetamaLogo,
        logoLarge: true,
      },
      {
        name: "JETAMA ALPINE PIPE (SABAH) SDN BHD",
        shortName: "Joint Venture",
        accent: "#D62828",
        logo: jetamaAlpineLogo,
      },
    ],
  },
  {
    groupTitle: "Bangunan KWSP, Karamunsing",
    address:
      "Lot B6.2, Block B, 6th Floor, Bangunan KWSP, 49, Jalan Karamunsing, 88000 Kota Kinabalu, Sabah.",
    phone: "+6 088 233 511",
    fax: "+6 088 238 128",
    email: "jwsb@jetama.com.my",
    companies: [
      {
        name: "JETAMA WATER SDN BHD",
        shortName: "Water Operator",
        accent: "#35B24A",
        logo: jetamaWaterLogo,
      },
    ],
  },
  {
    groupTitle: "Riverson Suites, Block B - Level 5",
    address:
      "Lot No: B2-5-02, Block B, Level 5, Riverson Suites, Off Coastal Highway, 88100 Kota Kinabalu, Sabah.",
    phone: "+6 088 205 746",
    fax: "+6 088 278 744",
    email: "jesb@jetama.com.my",
    companies: [
      {
        name: "JETAMA ENERGY SDN BHD",
        shortName: "Energy Division",
        accent: "#F5A623",
        logo: jetamaEnergyLogo,
      },
      {
        name: "SOLAR PV POWER SDN BHD",
        shortName: "Solar PV",
        accent: "#F5A623",
        logo: solarLogo,
      },
    ],
  },
];

function PageStyles() {
  return (
    <style>{`
      @keyframes contactFloat {
        0%, 100% { transform: translate3d(0,0,0) rotate(0deg); opacity: .56; }
        50% { transform: translate3d(18px,-16px,0) rotate(2deg); opacity: .82; }
      }
      @keyframes contactFadeUp {
        from { opacity: 0; transform: translateY(24px); filter: blur(7px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      @keyframes softShine {
        0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
        35% { opacity: .45; }
        100% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
      }
      .jetama-soft-in { animation: contactFadeUp .85s cubic-bezier(.2,.8,.2,1) both; }
      .jetama-float-a { animation: contactFloat 13s ease-in-out infinite; }
      .jetama-float-b { animation: contactFloat 16s ease-in-out infinite reverse; }
      .shine-hover::before {
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
      .shine-hover:hover::before { animation: softShine 1.8s ease; }
    `}</style>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36">
      <PageStyles />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#eef8ff_46%,#f8fff6_100%)]" />
      <div className="jetama-float-a absolute left-[-160px] top-8 -z-10 h-[420px] w-[420px] rotate-45 rounded-[72px] border border-[#005AAA]/10 bg-[#005AAA]/5 blur-sm" />
      <div className="jetama-float-b absolute right-[-160px] top-28 -z-10 h-[420px] w-[420px] rotate-12 rounded-[72px] border border-[#35B24A]/15 bg-[#35B24A]/5" />
      <div className="absolute bottom-4 left-[24%] -z-10 h-28 w-[520px] rotate-[-8deg] bg-[#F5A623]/[.075] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#f7fbff] via-white/70 to-transparent" />

      <div className="mx-auto max-w-[90rem] px-6 pb-14 lg:px-8">
        <div className="jetama-soft-in">
          <div className="mb-7 flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Link to="/" className="transition hover:text-[#005AAA]">Home</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="font-bold text-[#005AAA]">Contact Us</span>
          </div>

          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Get In Touch</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.96] tracking-tight text-[#005AAA] md:text-7xl">
            Connect With
            <span className="block text-[#35B24A]">Jetama Group</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

function ContactInfoLine({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5">
      <Icon size={16} className="mt-1 shrink-0 text-[#005AAA]" />
      <div className="min-w-0 text-xs font-semibold leading-5 text-slate-600 sm:text-[13px]">{children}</div>
    </div>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-[#005AAA]/10 bg-white p-4 shadow-[0_12px_30px_rgba(0,90,170,0.06)]">
      <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: company.accent }} />

      <div className="grid gap-3 sm:grid-cols-[128px_1fr] sm:items-center xl:grid-cols-1">
        <div className="flex h-[82px] items-center justify-center rounded-[18px] bg-[#f8fbff] p-3">
          <img
            src={company.logo}
            alt={company.name}
            className={`w-full object-contain ${company.logoLarge ? "max-h-[58px]" : "max-h-[52px]"}`}
          />
        </div>

        <div className="min-w-0">
          <span
            className="inline-flex max-w-full rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-white"
            style={{ backgroundColor: company.accent }}
          >
            {company.shortName}
          </span>

          <h3 className="mt-3 break-words text-sm font-black uppercase leading-snug text-[#073e63]">
            {company.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

function OfficeCard({ group, index }: { group: ContactGroup; index: number }) {
  return (
    <article
      className="shine-hover group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#005AAA]/10 bg-white/92 p-5 shadow-[0_22px_70px_rgba(0,90,170,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_95px_rgba(0,90,170,0.16)]"
      style={{ animation: "contactFadeUp .75s ease both", animationDelay: `${index * 90}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#005AAA]/8 blur-2xl transition group-hover:scale-125" />

      <div className="relative grid gap-4">
        <div className="grid gap-3">
          {group.companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

        <div className="mt-auto rounded-[26px] border border-[#005AAA]/10 bg-[#f8fbff] p-5">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#005AAA] shadow-sm">
              <Building2 size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#35B24A]">Office Location</p>
              <h4 className="mt-1.5 break-words text-lg font-black leading-tight text-[#005AAA]">{group.groupTitle}</h4>
            </div>
          </div>

          <div className="grid gap-3">
            <ContactInfoLine icon={MapPin}>{group.address}</ContactInfoLine>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <ContactInfoLine icon={Phone}><span className="font-black text-slate-700">{group.phone}</span></ContactInfoLine>
              <ContactInfoLine icon={Printer}><span className="font-black text-slate-700">{group.fax}</span></ContactInfoLine>
            </div>

            <ContactInfoLine icon={Mail}>
              <a href={`mailto:${group.email}`} className="break-all font-black text-slate-700 transition hover:text-[#35B24A]">
                {group.email}
              </a>
            </ContactInfoLine>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSubmitted(false);
    setError("");

    try {
      await insertRow<ContactInquiryRecord>("contact_inquiries", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || "Website Inquiry",
        message: formData.message,
        status: "new",
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send inquiry. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="overflow-hidden bg-[#f7fbff] text-[#062f4e]">
      <Hero />

      <section className="relative pb-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_48%,#f8fff7_100%)]" />
        <div className="absolute left-[-10%] top-20 -z-10 h-72 w-72 rounded-full bg-[#005AAA]/5 blur-3xl" />
        <div className="absolute right-[-8%] top-80 -z-10 h-80 w-80 rounded-full bg-[#35B24A]/7 blur-3xl" />


          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {contactGroups.map((group, index) => (
              <OfficeCard key={group.groupTitle} group={group} index={index} />
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="rounded-[34px] bg-gradient-to-br from-[#005AAA] via-[#0077bd] to-[#35B24A] p-7 text-white shadow-[0_24px_75px_rgba(0,90,170,0.20)]">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#fbf234]">Send Message</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Send Inquiry</h2>
              <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-white">
                Submit your inquiry here. Our team will respond to your message as soon as possible. Alternatively, you can reach us directly via email or phone.
              </p>

              <div className="mt-8 rounded-[28px] border border-white/25 bg-white/20 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.25)] backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white p-4 text-[#F5A623] shadow-lg"><Clock size={24} /></div>
                  <div>
                    <h3 className="text-xl font-black text-white">Office Hours</h3>
                    <p className="mt-3 text-base font-bold text-white">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="mt-1 text-base font-bold text-white">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitted && (
                <div className="mb-5 rounded-2xl bg-[#ecfbef] px-6 py-4 font-bold text-[#168A46] shadow-sm">
                  Thank you for your inquiry. Our team will get back to you soon.
                </div>
              )}

              {error && (
                <div className="mb-5 rounded-2xl bg-red-50 px-6 py-4 font-bold text-red-600 shadow-sm">{error}</div>
              )}

              <form onSubmit={handleSubmit} className="rounded-[34px] bg-white/92 p-6 shadow-[0_24px_80px_rgba(0,90,170,0.12)] backdrop-blur-xl md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["name", "Full Name *", "text", true],
                    ["email", "Email Address *", "email", true],
                    ["phone", "Phone Number", "tel", false],
                    ["subject", "Subject", "text", false],
                  ].map(([name, placeholder, type, required]) => (
                    <input
                      key={name as string}
                      type={type as string}
                      name={name as string}
                      required={required as boolean}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={placeholder as string}
                      className="h-14 rounded-2xl bg-[#f8fbfd] px-5 text-sm font-semibold outline-none transition focus:bg-white focus:ring-4 focus:ring-[#35B24A]/15"
                    />
                  ))}

                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    className="md:col-span-2 resize-none rounded-2xl bg-[#f8fbfd] px-5 py-4 text-sm font-semibold outline-none transition focus:bg-white focus:ring-4 focus:ring-[#35B24A]/15"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-[#005AAA]/20 transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Inquiry"}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
