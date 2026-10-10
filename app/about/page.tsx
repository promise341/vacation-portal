import Link from "next/link";
import { Globe, Heart, Users, Leaf } from "lucide-react";

const pillars = [
  {
    icon: "✈️",
    title: "International Peace",
    text: "Maintaining international peace and security across all member states.",
  },
  {
    icon: "🏨",
    title: "Premium Stays",
    text: "Partnering with top-rated hotels and resorts to deliver exceptional accommodation experiences.",
  },
  {
    icon: "🤝",
    title: "Client Support",
    text: "Providing dedicated support for every client from booking through to safe return home.",
  },
  {
    icon: "🌱",
    title: "Sustainable Travel",
    text: "Working toward responsible and sustainable travel practices for a better future.",
  },
];

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#071b3a] text-white py-12 border-b-4 border-[#c9a227]">
        <div className="container">
          <div className="text-xs text-slate-400 mb-3">HOME / ABOUT US</div>
          <h1 className="text-4xl font-black">About UN Vacation</h1>
          <p className="mt-3 text-slate-300">Our history, mission, and commitment to exceptional vacation experiences.</p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="bg-white py-16">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— OUR HISTORY</div>
            <h2 className="text-3xl font-black text-[#071b3a]">Founded on Peace</h2>
            <p className="mt-5 leading-7 text-slate-600">
         The United Nations officially began on 24 October 1945, after its Charter was ratified by China, France, the Soviet Union, the United Kingdom, the United States, and a majority of other signatories — four months after the San Francisco Conference ended.   </p>
            <p className="mt-4 leading-7 text-slate-600">
           Now, more than 75 years later, the United Nations continues to maintain international peace and security, provide humanitarian assistance, protect human rights, and uphold international law — with 193 member states representing the vast majority of the world's sovereign states.
            </p>
          </div>

          <div>
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— OUR MISSION</div>
            <h2 className="text-3xl font-black text-[#071b3a]">This Portal's Purpose</h2>
            <p className="mt-5 leading-7 text-slate-600">
              This portal was created solely for the men and women fighting to keep citizens of various countries safe. The United Nations is committed to ensuring that our troops return home to their families and loved ones.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We provide vacation application processing, benefit claim assistance, fraud compensation claims, and comprehensive information about vacation policies for UN personnel and their families.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-[#f5f9ff] py-16">
        <div className="container">
          <div className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— CORE PILLARS</div>
          <h2 className="text-center text-4xl font-black text-[#071b3a]">What UN Vacation Stands For</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-xl bg-[#eaf4ff] p-3 text-2xl">
                  {p.icon}
                </div>
                <h3 className="font-extrabold text-[#071b3a]">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization & Portal Access */}
<section className="bg-white py-16">
  <div className="container grid gap-10 lg:grid-cols-2 items-start">
    <div>
      <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[#0b4ea2]">— THE ORGANIZATION</div>
      <h2 className="text-3xl font-black text-[#071b3a]">Six Service Areas</h2>
      <p className="mt-4 leading-7 text-slate-600">
        The UN has six principal organs: the General Assembly, the Security Council, the Economic and Social Council, the Trusteeship Council, the International Court of Justice, and the UN Secretariat. The UN System also includes specialized agencies such as the World Bank Group, WHO, World Food Programme, UNESCO, and UNICEF.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-100 bg-[#f5f9ff] p-6">
        <h3 className="font-extrabold text-[#071b3a] mb-4">Who Can Use This Portal</h3>
        <ul className="grid gap-3 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <span className="text-[#0b4ea2] font-bold">—</span>
            Premium service subscribers
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#0b4ea2] font-bold">—</span>
            Corporate travel clients
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#0b4ea2] font-bold">—</span>
            Group booking representatives
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#0b4ea2] font-bold">—</span>
            Authorized travel partners
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/apply" className="rounded bg-[#0b8fe0] px-6 py-3 text-sm font-bold text-white hover:bg-[#0a7fc9] transition-colors">
          APPLY FOR VACATION
        </Link>
        <Link href="/services" className="rounded border-2 border-[#0b8fe0] px-6 py-3 text-sm font-bold text-[#0b8fe0] hover:bg-[#0b8fe0] hover:text-white transition-colors">
          VACATION POLICIES
        </Link>
      </div>
    </div>

    <div className="overflow-hidden rounded-2xl shadow-lg">
      <img
        src="/IMG_2571-1.jpg"
        alt="Company Logo"
        className="h-96 w-full object-cover"
      />
    </div>
  </div>
</section>

    </>
  );
}
