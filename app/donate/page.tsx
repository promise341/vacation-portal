"use client";
import Link from "next/link";
import { Home, Utensils, AlertTriangle, Copy, Bitcoin } from "lucide-react";

const donationCauses = [
  {
    icon: <Home className="text-orange-500" size={32} />,
    title: "Shelter",
    description: "Your support can provide shelter to an entire family forced to flee their home due to conflict"
  },
  {
    icon: <Utensils className="text-purple-500" size={32} />,
    title: "Food & Hope", 
    description: "Your gift provides food to eat and the hope needed to continue rebuilding lives after displacement"
  }
];

export default function Donate() {
  const bitcoinAddress = "bc1q4m9quxpdjn7jspvcuxj6ka847wa3kew24pm";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bitcoinAddress);
  };

  return (
    <>
      {/* Page header */}
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <div className="text-xs text-slate-400 mb-3">HOME / DONATE</div>
          <h1 className="text-4xl font-black">Support Our Mission</h1>
          <p className="mt-3 text-slate-300">Your generosity helps the world's most vulnerable people rebuild their lives.</p>
        </div>
      </section>

      {/* Join Donor Family */}
      <section className="bg-white py-16">
        <div className="container text-center">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b8fe0]">— MAKE A DIFFERENCE</div>
          <h2 className="text-4xl font-black text-[#071b3a] mb-6">Join Our Donor Family</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 leading-7">
            When you become a member of our donor family, your kindness helps the world's most 
            vulnerable. You will be joining a network of committed supporters who help provide critical life-
            saving assistance to refugees and forcibly displaced persons across the world.
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {donationCauses.map((cause) => (
              <div key={cause.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-left">
                <div className="mb-4">{cause.icon}</div>
                <h3 className="font-bold text-[#071b3a] text-lg mb-3">{cause.title}</h3>
                <p className="text-sm text-slate-600 leading-6">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bitcoin Donation */}
      <section className="bg-[#071b3a] py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-[#0a2654] rounded-2xl p-8 text-center text-white">
            <div className="mb-6">
              <Bitcoin className="mx-auto mb-4 text-orange-400" size={48} />
              <h2 className="text-2xl font-black mb-2">Bitcoin Donation</h2>
              <p className="text-sm text-slate-400">
                Send only Bitcoin (BTC) to the address below, scan the QR code or copy the wallet address.
              </p>
            </div>

            <div className="mb-6">
              <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">BTC WALLET ADDRESS</div>
              <div className="bg-[#071b3a] rounded-lg p-4 border border-slate-600">
                <div className="font-mono text-sm break-all text-slate-300 mb-3">
                  {bitcoinAddress}
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-xs font-bold transition-colors"
                >
                  <Copy size={14} />
                  Copy Address
                </button>
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 inline-block">
                <div className="w-32 h-32 bg-slate-800 rounded flex items-center justify-center">
                  <div className="text-white text-xs">QR Code</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-yellow-400 flex items-start gap-2">
              <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
              <span>Send only Bitcoin (BTC) to this address. Transactions are irreversible.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice & Contact */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 mt-0.5 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-yellow-800 text-sm mb-1">Important:</h3>
                  <p className="text-sm text-yellow-700">
                    Only send Bitcoin (BTC) to this address. Do not send any other cryptocurrency 
                    or assets — donations sent in other currencies may not be received.
                  </p>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-[#071b3a] text-sm mb-3">Questions About Donating?</h3>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-bold">▲</span>
                <span className="text-sm text-slate-700">Contact us at</span>
                <a href="mailto:help@UNvacation.org" className="text-sm text-blue-600 hover:underline">
                  help@UNvacation.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}