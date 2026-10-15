"use client";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = [
    "English",
    "Français", 
    "Español",
    "العربية",
    "中文",
    "Русский",
    "Deutsch",
    "Português"
  ];

  const links = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Vacation Dept.", "/services"],
    ["Fraud Alert", "/fraud-alert"],
    ["Benefits", "/benefits"],
    ["Apply", "/apply"],
    ["Exit Stamp", "/exit-stamp"],
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#071b3a] text-white shadow-md">
      {/* Top bar */}
      <div className="border-b border-white/10 bg-[#061529] py-1.5 text-xs text-slate-400">
        <div className="container flex items-center justify-between">
          <span className="hidden sm:block">Official UN Vacation Portal — UNvacation.com</span>
          <span className="sm:hidden">Official UN Vacation Portal</span>
          <span className="hidden sm:block">✉ agency@UNvacation.com</span>
          <span className="sm:hidden">✉ Contact</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/un-logo.png" 
            alt="United Nations Vacation Portal" 
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-sm font-medium">
          {links.map(([t, h]) => (
            <Link key={h} href={h} className="hover:text-blue-300 transition-colors whitespace-nowrap">
              {t}
            </Link>
          ))}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 hover:text-blue-300 transition-colors bg-blue-600 px-2 xl:px-3 py-1 rounded text-xs xl:text-sm"
            >
              <Globe size={14} />
              <span className="hidden xl:block">{selectedLang}</span>
              <span className="xl:hidden">EN</span>
              <ChevronDown size={12} />
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[140px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/donate"
            className="ml-2 rounded bg-[#c9a227] px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-white hover:bg-[#b8911f] transition-colors whitespace-nowrap"
          >
            DONATE
          </Link>
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 lg:hidden">
          <nav className="container flex flex-col py-3">
            {links.map(([t, h]) => (
              <Link
                onClick={() => setOpen(false)}
                key={h}
                href={h}
                className="py-3 text-sm hover:text-blue-300 border-b border-white/10 last:border-b-0"
              >
                {t}
              </Link>
            ))}
            <div className="py-3 border-b border-white/10">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm hover:text-blue-300 transition-colors"
              >
                <Globe size={16} />
                <span>{selectedLang}</span>
                <ChevronDown size={14} />
              </button>
              
              {langOpen && (
                <div className="mt-2 ml-6 space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className="block text-left text-sm text-slate-300 hover:text-blue-300 transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              onClick={() => setOpen(false)}
              href="/donate"
              className="mt-3 mb-2 rounded bg-[#c9a227] px-4 py-3 text-center text-sm font-bold text-white"
            >
              DONATE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
