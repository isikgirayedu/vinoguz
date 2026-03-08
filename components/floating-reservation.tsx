"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const PHONE_NUMBER = "+905435067407";

export function FloatingReservation() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [100, 0]);
  const { t } = useLanguage();

  return (
    <motion.a
      href={`tel:${PHONE_NUMBER}`}
      style={{ opacity, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary px-6 py-4 font-sans text-sm uppercase tracking-widest text-primary-foreground shadow-2xl shadow-primary/30 transition-shadow duration-300 hover:shadow-primary/50 md:bottom-8 md:right-8"
    >
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">{t.floating.reserveNow}</span>
    </motion.a>
  );
}
