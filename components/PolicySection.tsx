// components/PolicySection.tsx

// Next.js (App Router) + Tailwind. Server component, no client JS needed.

type Method = {
  icon: string;
  title: string;
  text: string;
};

type PolicySectionProps = {
  leftEyebrow?: string;
  leftTitle?: string;
  paragraphs?: string[];
  rightEyebrow?: string;
  rightTitle?: string;
  methods?: Method[];
};

// Placeholder content: replace with your own real copy.
const defaultParagraphs = [
  "Replace this paragraph with the overview of your policy. Keep it short and plain so visitors can understand it at a glance.",
  "Use the second paragraph for conditions, exceptions, or what happens after someone applies.",
];

const defaultMethods: Method[] = [
  {
    icon: "✉️",
    title: "Via Email",
    text: "Describe how to apply by email here, including the address and what happens after the message is sent.",
  },
  {
    icon: "🌐",
    title: "Online Portal",
    text: "Describe how to apply through the website here. Both methods can be listed as equally valid.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="h-px w-5 bg-[#0b8fe0]" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b8fe0]">
        {children}
      </span>
    </div>
  );
}

export default function PolicySection({
  leftEyebrow = "Policy Overview",
  leftTitle = "Policy Title Here",
  paragraphs = defaultParagraphs,
  rightEyebrow = "How to Apply",
  rightTitle = "Application Methods",
  methods = defaultMethods,
}: PolicySectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <div>
          <Eyebrow>{leftEyebrow}</Eyebrow>
          <h2 className="text-3xl font-black text-[#071b3a] mb-6">
            {leftTitle}
          </h2>
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-7 text-slate-600">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <Eyebrow>{rightEyebrow}</Eyebrow>
          <h2 className="text-3xl font-black text-[#071b3a] mb-6">
            {rightTitle}
          </h2>
          <div className="space-y-4">
            {methods.map((m) => (
              <div
                key={m.title}
                className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-200"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded bg-[#0b8fe0] flex items-center justify-center text-white text-xs">
                  {m.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#071b3a] text-sm mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs leading-6 text-slate-600">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}