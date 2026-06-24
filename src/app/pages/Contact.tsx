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
import { Link } from "react-router";

import jetamaEnergyLogo from "@/assets/LOGO-JESB.png";
import jetamaWaterLogo from "@/assets/logo-jetamawater.png";
import jetamaAlpineLogo from "@/assets/jetamaAlpine.png";
import solarLogo from "@/assets/solarpvlogo.png";
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
    email: "jesb@jetama.com.my",
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
    email: "Office@jetama.com.my",
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="overflow-hidden bg-[#f6fafc] text-[#062f4e]">
      <section className="relative overflow-hidden bg-[#052b4f] px-4 pb-24 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(65,182,80,0.35),transparent_34%),radial-gradient(circle_at_85%_30%,rgba(245,166,35,0.24),transparent_30%),linear-gradient(135deg,#052b4f,#005aaa)]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute left-10 top-32 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl animate-[fadeInUp_.8s_ease_both]">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/75">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight size={16} />
              <span className="text-white">Contact Us</span>
            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight md:text-7xl">
              Connect With Us
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-blue-50">
              Reach JETAMA Group through shared office locations and dedicated
              contact channels.
            </p>
          </div>
        </div>
      </section>

      <section className="relative -mt-32 z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-24 pt-0 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-8">
            <h2 className="mt-3 text-4xl font-black text-[#062f4e]">
              Company Contact Directory
            </h2>
          </div>

          <div className="grid gap-6">
            {contactGroups.map((group, index) => (
              <article
                key={group.groupTitle}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#dcebf3] bg-white p-5 shadow-[0_16px_50px_rgba(0,90,170,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,90,170,0.16)]"
                style={{
                  animation: "fadeInUp .7s ease both",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#005AAA] via-[#35B24A] to-[#F5A623]" />
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#005AAA]/8 transition group-hover:scale-150" />

                <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="grid gap-3">
                    {group.companies.map((company) => (
                      <div
                        key={company.name}
                        className="rounded-[1.3rem] border border-[#edf4f7] bg-[#f8fbfd] p-4"
                      >
                        <div className="flex h-24 items-center justify-center rounded-2xl bg-white p-3 shadow-sm">
                          <img
                            src={company.logo}
                            alt={company.name}
                            className={`w-full object-contain transition duration-500 group-hover:scale-105 ${
                              company.logoLarge ? "max-h-20" : "max-h-16"
                            }`}
                          />
                        </div>

                        <span
                          className="mt-4 inline-flex rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white"
                          style={{ backgroundColor: company.accent }}
                        >
                          {company.shortName}
                        </span>

                        <h3 className="mt-3 text-[15px] font-black leading-snug text-[#073e63]">
                          {company.name}
                        </h3>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center rounded-[1.4rem] bg-white p-2">
                    <h4 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#35B24A]">
                      {group.groupTitle}
                    </h4>

                    <div className="space-y-4 text-sm">
                      <div className="flex gap-3">
                        <MapPin
                          size={18}
                          className="mt-1 shrink-0 text-[#005AAA]"
                        />
                        <p className="leading-6 text-slate-600">
                          {group.address}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone size={17} className="text-[#005AAA]" />
                        <p className="font-bold text-slate-700">
                          {group.phone}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Printer size={17} className="text-[#005AAA]" />
                        <p className="font-bold text-slate-700">{group.fax}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail size={17} className="text-[#005AAA]" />
                        <a
                          href={`mailto:${group.email}`}
                          className="break-all font-bold text-slate-700 transition hover:text-[#35B24A]"
                        >
                          {group.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-8">
            <h2 className="mt-3 text-4xl font-black text-[#062f4e]">
              Send Inquiry
            </h2>
          </div>

          <div className="mb-6 rounded-[1.6rem] bg-[#eef8f1] p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-[#005AAA] p-4 text-white">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#062f4e]">
                  Office Hours
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
                <p className="text-sm text-slate-600">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {submitted && (
            <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-6 py-4 font-bold text-green-700">
              Thank you for your inquiry. Our team will get back to you soon.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#dcebf3] bg-white p-6 shadow-[0_20px_70px_rgba(0,90,170,0.10)]"
          >
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="h-13 rounded-2xl border border-[#d9e7ee] bg-[#f8fbfd] px-5 py-4 text-sm font-semibold outline-none transition focus:border-[#35B24A] focus:ring-4 focus:ring-[#35B24A]/10"
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="h-13 rounded-2xl border border-[#d9e7ee] bg-[#f8fbfd] px-5 py-4 text-sm font-semibold outline-none transition focus:border-[#35B24A] focus:ring-4 focus:ring-[#35B24A]/10"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="h-13 rounded-2xl border border-[#d9e7ee] bg-[#f8fbfd] px-5 py-4 text-sm font-semibold outline-none transition focus:border-[#35B24A] focus:ring-4 focus:ring-[#35B24A]/10"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="h-13 rounded-2xl border border-[#d9e7ee] bg-[#f8fbfd] px-5 py-4 text-sm font-semibold outline-none transition focus:border-[#35B24A] focus:ring-4 focus:ring-[#35B24A]/10"
              />

              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide details about your inquiry..."
                className="resize-none rounded-2xl border border-[#d9e7ee] bg-[#f8fbfd] px-5 py-4 text-sm font-semibold outline-none transition focus:border-[#35B24A] focus:ring-4 focus:ring-[#35B24A]/10"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#005AAA] to-[#35B24A] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-[#005AAA]/20 transition hover:-translate-y-1"
            >
              Send Inquiry
              <Send size={18} />
            </button>
          </form>
        </aside>
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