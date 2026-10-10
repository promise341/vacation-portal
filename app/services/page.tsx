import PolicySection from "@/components/PolicySection";
import Link from "next/link";
import { AlertTriangle, Info, Mail, Phone } from "lucide-react";

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <div className="text-xs text-slate-400 mb-3">HOME / VACATION DEPARTMENT</div>
          <h1 className="text-4xl font-black">Vacation Department</h1>
          <p className="mt-3 text-slate-300">Official vacation policies, benefits, and application guidelines.</p>
        </div>
      </section>

      {/* Policy Section */}
      <PolicySection
        leftEyebrow="POLICY OVERVIEW"
        leftTitle="Vacation Act of 1993"
        paragraphs={[
          "The UN Vacation company vacation act, as adopted in 1993 and amended on 3rd July 1996 by constitutional assembly, states that staff members serving at duty stations designated as having very difficult restrictions of life and work may be authorized a home visit — on one condition: their spouse or authorized representative must formally request the vacation.",
          "Not all vacation requests are granted. Applicants are encouraged to reapply if their initial request is not approved. UN will respond in whatever language you use when sending correspondence."
        ]}
        rightEyebrow="HOW TO APPLY"
        rightTitle="Application Methods"
        methods={[
          {
            icon: "✉️",
            title: "Via Email",
            text: "Send a formal vacation letter to the Vacation Department at agency@UNvacation.org. The department will provide guidelines upon receipt."
          },
          {
            icon: "🌐",
            title: "Online Portal",
            text: "Submit your application directly through this portal using the Apply page. Both methods are equally valid."
          }
        ]}
      />

      {/* Benefits & Duration Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          {/* Benefits */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-5 bg-[#0b8fe0]" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b8fe0]">
                BENEFITS
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#071b3a] mb-6">
              Vacation Benefit Range
            </h2>
            <p className="text-sm leading-7 text-slate-600 mb-6">
              Annual vacation benefits range from $30,000 to $500,000, determined by the 
              officer's monthly salary and the terms of their contract with UN Vacation. 
              Benefits are paid to the beneficiary and applicant after the vacation certificate 
              is issued and departure is confirmed.
            </p>
            <Link href="/benefits" className="inline-block rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors">
              APPLY FOR BENEFITS
            </Link>
          </div>

          {/* Duration */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-5 bg-[#0b8fe0]" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b8fe0]">
                DURATION
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#071b3a] mb-6">
              Vacation Certificate Validity
            </h2>
            <p className="text-sm leading-7 text-slate-600 mb-6">
              The vacation certificate is valid for 7 to 4 months, depending on how long the 
              staff member chooses to stay away from camp. The maximum duration is 4 
              months.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-[#071b3a] text-sm mb-2">Security Notice</h3>
              <p className="text-xs text-slate-600">
                All information concerning the vacation process must remain confidential — 
                between the Vacation Department, the official, and their trusted spouse. 
                This protects personnel from targeted threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Termination Causes */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-5 bg-[#0b8fe0]" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b8fe0]">
                IMPORTANT
              </span>
            </div>
            <h2 className="text-3xl font-black text-[#071b3a] mb-4">
              Causes of Vacation Termination
            </h2>
            <p className="text-sm text-slate-600 mb-8">
              The following may result in termination of the vacation process:
            </p>

            <div className="grid gap-4">
              {[
                "Delay in procedures of the vacation requirement",
                "Failure to confirm identity — a valid ID, passport, or driver's license must be submitted",
                "Delay in payment without prior written notice to the vacation department", 
                "Failure to provide a concrete payment date when requesting a timeline extension"
              ].map((cause, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <AlertTriangle className="text-yellow-600 mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-sm text-slate-700">{cause}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Notice & Contact */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Email Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <h3 className="font-bold text-blue-800 text-sm">Check Your Spam Folder:</h3>
                  <p className="text-xs text-blue-700 mt-1">
                    Not all emails appear in your inbox. When expecting a reply from UN Vacation, also check your spam/junk folder due to high email traffic volumes.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-[#071b3a] text-lg mb-4">Contact the Vacation Department</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={16} />
                  <div>
                    <div className="text-sm font-semibold text-[#071b3a]">Applications & Inquiries:</div>
                    <a href="mailto:agency@UNvacation.org" className="text-sm text-blue-600 hover:underline">
                      agency@UNvacation.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-pink-600" size={16} />
                  <div>
                    <div className="text-sm font-semibold text-[#071b3a]">General Help:</div>
                    <a href="mailto:help@UNvacation.org" className="text-sm text-pink-600 hover:underline">
                      help@UNvacation.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#071b3a] py-20 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Apply?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Submit your vacation application or benefit claim through this official portal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/apply" className="rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors">
              APPLY FOR VACATION
            </Link>
            <Link href="/benefits" className="rounded border-2 border-[#0b8fe0] px-6 py-3 text-sm font-bold text-[#0b8fe0] hover:bg-[#0b8fe0] hover:text-white transition-colors">
              CLAIM BENEFITS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}