"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-3xl font-bold tracking-wide text-foreground">
              VIN<span className="text-primary">O</span>GUZ
            </span>
            <p className="mt-2 font-sans text-sm uppercase tracking-widest text-muted-foreground">
              {t.footer.subtitle}
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} VINOGUZ. {t.footer.rights}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
