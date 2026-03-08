"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/lib/language-context";

export function Experience() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/experience.jpg"
          alt="VINOGUZ Dining Experience"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div ref={textRef} className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-sans text-sm uppercase tracking-[0.3em] text-primary"
          >
            {t.experience.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {t.experience.title1}
            <br />
            <span className="text-primary">{t.experience.title2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 font-sans text-xl font-light leading-relaxed text-muted-foreground"
          >
            {t.experience.description}
          </motion.p>
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {t.experience.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group relative border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/50"
            >
              <div className="mb-4 font-serif text-6xl font-bold text-primary/20 transition-colors duration-500 group-hover:text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
