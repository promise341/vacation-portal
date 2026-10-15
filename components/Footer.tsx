import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071b3a] text-white">
      <div className="container grid gap-8 py-10 sm:py-14 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/un-logo.png" 
              alt="United Nations Vacation Portal" 
              className="h-10 w-auto"
            />
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            The official UN Vacation Portal — providing comprehensive information about vacation processes, benefits, and support for our clients and their families worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Navigation</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-white transition-colors">Vacation Dept.</Link>
            <Link href="/fraud-alert" className="hover:text-white transition-colors">Fraud Alert</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            <Link href="/apply" className="hover:text-white transition-colors">Apply for Vacation</Link>
            <Link href="/benefits" className="hover:text-white transition-colors">Benefit Claims</Link>
            <Link href="/fraud-alert" className="hover:text-white transition-colors">Fraud Compensation</Link>
            <Link href="/exit-stamp" className="hover:text-white transition-colors">Exit Stamp</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Contact</h3>
          <div className="grid gap-3 text-sm text-slate-400">
            <p className="break-all">✉ agency@UNvacation.com</p>
            <p className="break-all">✉ help@UNvacation.com</p>
            <p className="text-xs text-slate-500">🔒 All data is encrypted and confidential</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span className="text-center sm:text-left">© 2026 UN Vacation Portal. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/fraud-alert" className="hover:text-white transition-colors">Fraud Alert</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
