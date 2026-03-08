"use client";

import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./language-switcher";

const PHONE_NUMBER = "+905435067407";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div
          className={`absolute inset-0 border-b border-border/50 bg-background/80 backdrop-blur-md transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
        />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl font-bold tracking-wide text-foreground">
            VIN<span className="text-primary">O</span>GUZ
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 border border-primary bg-primary/10 px-5 py-2 font-sans text-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-3 w-3" />
              {t.nav.reserve}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-background p-8 md:hidden"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 p-2 text-foreground"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mt-16 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl font-bold text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={() => setIsOpen(false)}
            className="mt-8 flex items-center justify-center gap-3 bg-primary px-6 py-4 font-sans text-sm uppercase tracking-widest text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            {t.nav.reserveTable}
          </a>
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
}
