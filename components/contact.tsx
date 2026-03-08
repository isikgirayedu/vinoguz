"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const PHONE_NUMBER = "+905435067407";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.addressLines,
    },
    {
      icon: Phone,
      title: t.contact.reservations,
      content: [t.contact.phone],
      href: `tel:${PHONE_NUMBER}`,
    },
    {
      icon: Clock,
      title: t.contact.hours,
      content: t.contact.hoursLines,
    },
  ];

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-sans text-sm uppercase tracking-[0.3em] text-primary"
          >
            {t.contact.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
          >
            {t.contact.title} <span className="text-primary">VINOGUZ</span>
          </motion.h2>
        </div>

        <div ref={ref} className="grid gap-12 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.5!2d30.6!3d36.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zWWXFn2lsYmF5xLFyIE1haGFsbGVzaSwgQXRhdMO8cmsgQ2FkZGVzaSwgRMO2xZ9lbWVhbHTEsSwgQW50YWx5YQ!5e0!3m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VINOGUZ Location"
              className="absolute inset-0"
            />
            <div className="pointer-events-none absolute inset-0 border border-primary/20" />
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-6"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-primary/30 bg-primary/5 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-sm uppercase tracking-widest text-muted-foreground">
                    {item.title}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {item.content.map((line, i) =>
                      item.href ? (
                        <a
                          key={i}
                          href={item.href}
                          className="block font-serif text-xl font-bold text-foreground transition-colors hover:text-primary"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="font-sans text-lg text-foreground">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <h3 className="font-sans text-sm uppercase tracking-widest text-muted-foreground">
                {t.contact.followUs}
              </h3>
              <a
                href="https://instagram.com/vinoguz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 font-sans text-lg text-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
                @vinoguz
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
