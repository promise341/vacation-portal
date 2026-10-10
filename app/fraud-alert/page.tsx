import Link from "next/link";
import { AlertTriangle, Globe, Mail, Phone, Share2, CreditCard, Gift, CheckCircle } from "lucide-react";

const scamTypes = [
  {
    icon: <Globe className="text-blue-500" size={32} />,
    title: "Fake Websites",
    description: "Scammers create websites that mimic the official UN Vacation Portal to steal personal information and money. Always verify you are on UNvacation.org"
  },
  {
    icon: <Mail className="text-blue-500" size={32} />,
    title: "Email Phishing", 
    description: "Phishing emails claiming to be from UN requesting payment or personal details. Official emails end with @UNvacation.org only"
  },
  {
    icon: <Phone className="text-red-500" size={32} />,
    title: "Phone Scams",
    description: "Unsolicited calls claiming you have won a vacation benefit or need to pay fees to receive benefits. UN does not make unsolicited calls."
  },
  {
    icon: <Share2 className="text-purple-500" size={32} />,
    title: "Social Media Fraud",
    description: "Fake social media accounts promoting vacation benefits or compensation programs. UN does not operate through social media DMs."
  },
  {
    icon: <CreditCard className="text-orange-500" size={32} />,
    title: "Payment Requests",
    description: "Any request for credit card information, wire transfer, or gift card payments claiming to be from UN is fraudulent."
  },
  {
    icon: <Gift className="text-green-500" size={32} />,
    title: "Lottery / Prize Scams", 
    description: "Messages claiming you have been selected for a vacation prize or lottery. UN does not run lotteries or prize draws."
  }
];

const protectionTips = [
  "Only use the official portal: UNvacation.org",
  "Never send money, gift cards, or cryptocurrency to claim benefits",
  "Never share personal information with unverified sources", 
  "Verify all communications through official email channels",
  "Check the email addresses end with @UNvacation.org",
  "Report suspicious activity immediately to help@UNvacation.org",
  "Do not click links in unsolicited emails — navigate directly to this site"
];

export default function FraudAlert() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <div className="text-xs text-slate-400 mb-3">HOME / FRAUD ALERT</div>
          <h1 className="text-4xl font-black">Fraud Alert</h1>
          <p className="mt-3 text-slate-300">Stay informed and protect yourself from scams impersonating UN Vacation.</p>
        </div>
      </section>

      {/* Critical Security Warning */}
      <section className="bg-white py-8">
        <div className="container">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-bold text-red-800 text-sm mb-1">Critical Security Warning:</h3>
                <p className="text-sm text-red-700">
                  UN Vacation will NEVER ask for your credit card information, wire transfer, or cryptocurrency payment. Please disregard any such requests and report them immediately to help@UNvacation.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scam Types */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b8fe0]">— THREATS TO WATCH FOR</div>
          <h2 className="text-3xl font-black text-[#071b3a] mb-4">Common Scam Types</h2>
          <p className="text-sm text-slate-600 mb-10 max-w-2xl">
            Be aware of these fraudulent tactics used by scammers impersonating UN Vacation.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scamTypes.map((scam) => (
              <div key={scam.title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="mb-4">{scam.icon}</div>
                <h3 className="font-bold text-[#071b3a] mb-3">{scam.title}</h3>
                <p className="text-sm text-slate-600 leading-6">{scam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection & Reporting */}
      <section className="bg-gray-50 py-16">
        <div className="container grid gap-12 lg:grid-cols-2">
          {/* How to Protect Yourself */}
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b8fe0]">— STAY SAFE</div>
            <h2 className="text-3xl font-black text-[#071b3a] mb-6">How to Protect Yourself</h2>
            
            <div className="space-y-3">
              {protectionTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-sm text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Reporting */}
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b8fe0]">— REPORT FRAUD</div>
            <h2 className="text-3xl font-black text-[#071b3a] mb-6">Contact Us Immediately</h2>
            
            <p className="text-sm text-slate-600 mb-6">
              If you have been contacted by a scammer, visited a fraudulent website, or lost 
              money to a vacation-related scam, report it immediately. You may also be eligible for 
              fraud compensation.
            </p>

            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-[#071b3a] text-sm mb-4">Official Contact Channels</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">▲</span>
                  <div>
                    <span className="text-sm font-semibold text-[#071b3a]">Report Scammers:</span>
                    <span className="text-sm text-blue-600 ml-2">help@UNvacation.org</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">▲</span>
                  <div>
                    <span className="text-sm font-semibold text-[#071b3a]">Official Applications:</span>
                    <span className="text-sm text-blue-600 ml-2">agency@UNvacation.org</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <AlertTriangle className="text-yellow-600 mt-0.5 flex-shrink-0" size={16} />
                <div>
                  <h4 className="text-sm font-bold text-yellow-800">Holiday Applications:</h4>
                  <p className="text-xs text-yellow-700 mt-1">
                    Holiday applications must be done online via this portal or through the official email address only. Do not use any other email addresses.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/benefits" className="inline-block rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors">
              FILE A COMPENSATION CLAIM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}