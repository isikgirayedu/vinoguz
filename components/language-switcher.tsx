"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-sans text-sm uppercase tracking-widest">
      <button
        onClick={() => setLocale("tr")}
        className={`relative px-2 py-1 transition-colors duration-300 ${
          locale === "tr" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        TR
        {locale === "tr" && (
          <motion.div
            layoutId="activeLocale"
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLocale("en")}
        className={`relative px-2 py-1 transition-colors duration-300 ${
          locale === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
        {locale === "en" && (
          <motion.div
            layoutId="activeLocale"
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
}
