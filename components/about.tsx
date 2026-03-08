"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/about-chef.jpg"
              alt="Chef preparing artisan pizza"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 h-32 w-32 border border-primary/30"
            />
          </motion.div>

          {/* Content */}
          <div className="lg:pl-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-sm uppercase tracking-[0.3em] text-primary"
            >
              {t.about.label}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {t.about.title1}
              <br />
              <span className="text-primary">{t.about.title2}</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 space-y-6 font-sans text-lg font-light leading-relaxed text-muted-foreground"
            >
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex items-center gap-8"
            >
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">72h</span>
                <span className="mt-1 block font-sans text-sm uppercase tracking-wider text-muted-foreground">
                  {t.about.fermentation}
                </span>
              </div>
              <div className="h-12 w-[1px] bg-border" />
              <div className="text-center">
                <span className="block font-serif text-4xl font-bold text-primary">485°</span>
                <span className="mt-1 block font-sans text-sm uppercase tracking-wider text-muted-foreground">
                  {t.about.celsius}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
