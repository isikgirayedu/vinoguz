export type Locale = "tr" | "en";

export const translations = {
  tr: {
    // Navigation
    nav: {
      about: "Hakkımızda",
      gallery: "Galeri",
      experience: "Deneyim",
      contact: "İletişim",
      reserve: "Rezervasyon",
      reserveTable: "Masa Ayırt",
    },
    // Hero
    hero: {
      subtitle: "Pizzeria İtalyan Mutfağı",
      tagline: "Geleneğin tutku ile buluştuğu, her pizzanın bir hikaye anlattığı yer",
      reserveButton: "Masa Ayırt",
      scroll: "Kaydır",
    },
    // About
    about: {
      label: "Hikayemiz",
      title1: "Tanışmaya",
      title2: "Bekliyoruz",
      paragraph1: "Mutfakta derinliği, tarihsel esintileri tecrübe ve sabırla yoğuruyoruz. Burası kendimizden biri, kendimiz kadar sıcak ve yakın…",
      paragraph2: "Bu tanışma yıllar öncesinden gelmiş gibi, hep varmış gibi… Bambaşka bir dünyaya da açılmış gibi…",
      years: "Yıl",
      fermentation: "Mayalanma",
      celsius: "Santigrat",
    },
    // Experience
    experience: {
      label: "Deneyim",
      title1: "Bir Yemekten",
      title2: "Çok Daha Fazlası",
      description: "VINOGUZ'da yemeğin bir sanat formu olduğuna inanıyoruz. Odun ateşi fırınımızın sıcaklığından özenle hazırlanmış ambiyansa kadar her detay, sizi İtalya'nın kalbine taşımak için tasarlandı.",
      features: [
        {
          title: "Zanaatkar Ustalığı",
          description: "Her pizza el ile açılır ve otantik odun ateşi fırınımızda mükemmelliğe pişirilir.",
        },
        {
          title: "Premium Malzemeler",
          description: "Yemeklerimiz için yalnızca en kaliteli İtalyan ithalatçılarını ve taze yerel ürünleri kullanıyoruz.",
        },
        {
          title: "Samimi Atmosfer",
          description: "Mum ışıklı masalar ve seçkin müzikler, unutulmaz akşamlar için mükemmel ortamı yaratır.",
        },
      ],
    },
    // Gallery
    gallery: {
      label: "Galeri",
      title1: "Duyular İçin",
      title2: "Bir Şölen",
      view: "Görüntüle",
      images: [
        { alt: "Otantik Margherita Pizza" },
        { alt: "Trüflü Taze Makarna" },
        { alt: "Şık Yemek Alanı" },
        { alt: "İtalyan Antipasto Seçkisi" },
        { alt: "Odun Ateşi Fırını" },
        { alt: "Klasik Tiramisu" },
      ],
    },
    // Contact
    contact: {
      label: "Bizi Bulun",
      title: "Ziyaret Edin",
      address: "Adres",
      addressLines: ["Yeşilbayır Mahallesi, Atatürk Caddesi No:117", "Döşemealtı, Antalya"],
      reservations: "Rezervasyon",
      phone: "0 (543) 506 74 07",
      hours: "Çalışma Saatleri",
      hoursLines: ["Salı – Pazar: 11:30 – 23:30", "Pazartesi: Kapalı"],
      followUs: "Bizi Takip Edin",
    },
    // Footer
    footer: {
      subtitle: "Pizzeria İtalyan Mutfağı",
      rights: "Tüm hakları saklıdır.",
    },
    // Floating button
    floating: {
      reserveNow: "Hemen Rezervasyon",
    },
  },
  en: {
    // Navigation
    nav: {
      about: "About",
      gallery: "Gallery",
      experience: "Experience",
      contact: "Contact",
      reserve: "Reserve",
      reserveTable: "Reserve a Table",
    },
    // Hero
    hero: {
      subtitle: "Pizzeria Italian Cuisine",
      tagline: "Where tradition meets passion, and every pizza tells a story",
      reserveButton: "Reserve a Table",
      scroll: "Scroll",
    },
    // About
    about: {
      label: "Our Story",
      title1: "We Are Waiting",
      title2: "To Meet You",
      paragraph1: "In our kitchen, we blend depth and historical inspirations with experience and patience. This place is one of our own, as warm and close as we are…",
      paragraph2: "This meeting feels like it came from years ago, as if it was always here… As if it opens to a completely different world…",
      years: "Years",
      fermentation: "Fermentation",
      celsius: "Celsius",
    },
    // Experience
    experience: {
      label: "The Experience",
      title1: "More Than",
      title2: "Just a Meal",
      description: "At VINOGUZ, we believe dining is an art form. Every detail—from the warmth of our wood-fired oven to the carefully curated ambiance—is designed to transport you to the heart of Italy.",
      features: [
        {
          title: "Artisan Craft",
          description: "Every pizza is hand-stretched and baked to perfection in our authentic wood-fired oven.",
        },
        {
          title: "Premium Ingredients",
          description: "We source only the finest Italian imports and fresh local produce for our dishes.",
        },
        {
          title: "Intimate Atmosphere",
          description: "Candlelit tables and curated music create the perfect setting for memorable evenings.",
        },
      ],
    },
    // Gallery
    gallery: {
      label: "Gallery",
      title1: "A Feast for the",
      title2: "Senses",
      view: "View",
      images: [
        { alt: "Authentic Margherita Pizza" },
        { alt: "Fresh Pasta with Truffle" },
        { alt: "Elegant Dining Area" },
        { alt: "Italian Antipasto Selection" },
        { alt: "Wood-Fired Oven" },
        { alt: "Classic Tiramisu" },
      ],
    },
    // Contact
    contact: {
      label: "Find Us",
      title: "Visit",
      address: "Address",
      addressLines: ["Yeşilbayır Mahallesi, Atatürk Caddesi No:117", "Döşemealtı, Antalya"],
      reservations: "Reservations",
      phone: "0 (543) 506 74 07",
      hours: "Opening Hours",
      hoursLines: ["Tue – Sun: 11:30 AM – 11:30 PM", "Monday: Closed"],
      followUs: "Follow Us",
    },
    // Footer
    footer: {
      subtitle: "Pizzeria Italian Cuisine",
      rights: "All rights reserved.",
    },
    // Floating button
    floating: {
      reserveNow: "Reserve Now",
    },
  },
} as const;

export type Translations = typeof translations.tr;
