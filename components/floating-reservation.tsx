"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

const PHONE_NUMBER = "+905435067407";

export function FloatingReservation() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href={`tel:${PHONE_NUMBER}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary px-6 py-4 font-sans text-sm uppercase tracking-widest text-primary-foreground shadow-2xl shadow-primary/30 transition-shadow duration-300 hover:shadow-primary/50 md:bottom-8 md:right-8"
    >
      <Phone className="h-4 w-4" />
      <span className="hidden sm:inline">{t.floating.reserveNow}</span>
    </motion.a>
  );
}
