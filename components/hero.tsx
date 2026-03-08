"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

const PHONE_NUMBER = "+905435067407";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-restaurant.jpg"
          alt="VINOGUZ Restaurant Interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="font-sans text-sm uppercase tracking-[0.3em] text-primary">
            {t.hero.subtitle}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-6xl font-bold tracking-wide text-foreground md:text-8xl lg:text-9xl"
        >
          VIN
          <span className="text-primary">O</span>
          GUZ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-6 max-w-xl font-sans text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.a
          href={`tel:${PHONE_NUMBER}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center gap-3 border border-primary bg-primary/10 px-8 py-4 font-sans text-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <Phone className="h-4 w-4" />
          {t.hero.reserveButton}
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              {t.hero.scroll}
            </span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
