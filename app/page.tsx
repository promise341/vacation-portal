import Link from "next/link";
import Faq from "@/components/Faq";
import { ArrowRight, ShieldCheck, Plane, FileCheck, AlertTriangle } from "lucide-react";

const stats = [
  { value: "193", label: "DESTINATIONS" },
  { value: "75+", label: "YEARS OF SERVICE" },
  { value: "$500K", label: "MAX BENEFIT" },
  { value: "100%", label: "CONFIDENTIAL" },
];

const services = [
  {
    icon: Plane,
    title: "Apply for Vacation",
    text: "Submit a vacation application for our services. Our streamlined process ensures timely review and processing.",
    href: "/apply",
    cta: "APPLY NOW",
  },
  {
    icon: FileCheck,
    title: "Benefit Claims",
    text: "Claim annual vacation benefits ranging from $30,000 to $500,000 based on service terms and entitlement.",
    href: "/benefits",
    cta: "CLAIM BENEFITS",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Compensation",
    text: "Victims of vacation-related fraud can file a compensation claim. We are committed to protecting and compensating affected individuals.",
    href: "/fraud-alert",
    cta: "FILE A CLAIM",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[640px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(135deg, rgba(7, 27, 58, 0.85) 0%, rgba(11, 78, 162, 0.85) 60%, rgba(27, 111, 201, 0.85) 100%), url('/hero.jpg')" 
        }}

      >
        <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 py-2 text-xs font-bold text-white">
              🌐 OFFICIAL UN VACATION PORTAL
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
              Supporting Those Who<br className="hidden sm:block" />
              <span className="sm:hidden">Serve & Travel</span>
              <span className="hidden sm:inline">Serve &amp; Travel</span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
              UN Vacation Portal provides official vacation application services, benefit claims, and support for our clients and their families worldwide.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/apply" className="rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors text-center">
                APPLY FOR VACATION
              </Link>
              <Link href="/about" className="rounded border border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors text-center">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-white">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-8 sm:py-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-black text-[#c9a227]">{s.value}</div>
              <div className="mt-1 text-xs font-semibold tracking-wider text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f5f9ff] py-16 sm:py-20">
        <div className="container">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— OUR SERVICES</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071b3a]">How We Can Help You</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            Access all vacation-related services through this official portal — from applications to benefit claims.
          </p>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-slate-100">
                <div className="mb-5 inline-flex rounded-xl bg-[#eaf4ff] p-3 text-[#0b4ea2]">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-extrabold text-[#071b3a]">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{s.text}</p>
                <Link
                  href={s.href}
                  className="mt-6 inline-block rounded bg-[#0b8fe0] px-5 py-2 text-xs font-bold text-white hover:bg-[#0a7fc9] transition-colors"
                >
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— ABOUT THE PORTAL</div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071b3a]">Dedicated to Service &amp; Reunion</h2>
            <p className="mt-4 sm:mt-5 leading-7 text-slate-600">
              This portal was created solely for the men and women fighting to keep citizens of various countries safe. The United Nations is committed to ensuring that our troops return home to their families and loved ones.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Established on 24 October 1945, the United Nations continues to maintain international peace and security, deliver humanitarian assistance, and uphold international law across 193 member states.
            </p>
            <Link href="/about" className="mt-6 sm:mt-7 inline-block rounded border-2 border-[#071b3a] px-6 py-3 text-sm font-bold text-[#071b3a] hover:bg-[#071b3a] hover:text-white transition-colors">
              LEARN ABOUT US
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
              alt="Beautiful vacation destination"
              className="h-64 sm:h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f9ff] py-16 sm:py-20">
        <div className="container">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— FAQ</div>
          <h2 className="text-center text-3xl sm:text-4xl font-black text-[#071b3a]">Frequently Asked Questions</h2>
          <div className="mt-8 sm:mt-10 max-w-3xl mx-auto">
            <Faq />
          </div>
        </div>
      </section>

      {/* Fraud warning banner */}
      <section className="bg-[#fffbea] border-y border-yellow-200 py-4">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 text-yellow-600 shrink-0" size={20} />
            <div>
              <div className="text-sm font-bold text-yellow-800">Fraud Warning</div>
              <div className="text-xs text-yellow-700">
                UN Vacation will never ask for credit card information. Report scammers to help@UNvacation.com
              </div>
            </div>
          </div>
          <Link href="/fraud-alert" className="rounded border border-yellow-600 px-4 py-2 text-xs font-bold text-yellow-800 hover:bg-yellow-100 transition-colors whitespace-nowrap self-start sm:self-center">
            VIEW FRAUD ALERTS
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071b3a] py-16 sm:py-20 text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl font-black">Ready to Submit Your Application?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Use this official portal to apply for vacation, claim benefits, or report fraud. All applications are processed securely.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/apply" className="rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors">
              APPLY FOR VACATION
            </Link>
            <Link href="/benefits" className="rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors">
              CLAIM BENEFITS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
