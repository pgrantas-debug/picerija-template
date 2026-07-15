// ============================================================
// KONFIGŪRACIJA — čia keičiami VISI kliento duomenys naujam projektui
// ============================================================
export const siteConfig = {
  business: {
    name: "Pizzería El Gordo",
    logo: "/images/logo.png",
    phone: "+34622596197",
    whatsapp: "34622596197",
  },
  address: {
    street: "Avenida Los Canos, Local 4",
    city: "Guadiaro",
    region: "Cádiz",
    postalCode: "11311",
    country: "ES",
    mapsQuery: "Pizzeria+el+Gordo+Guadiaro",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6431.149110148677!2d-5.309121006420889!3d36.29837159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cc58f7d561061%3A0xa9bae44a62761dce!2sPizzeria%20el%20Gordo!5e0!3m2!1sen!2ses!4v1783960213284!5m2!1sen!2ses",
  },
  hours: {
    openHour: 19,
    closeHour: 23,
    closedDays: [2], // 0=domingo ... 2=martes
    display: {
      es: "Todos los días · 19:00–23:00",
      en: "Every day · 7:00pm–11:00pm",
    },
    closedDayLabel: {
      es: "Martes",
      en: "Tuesday",
    },
  },
  rating: {
    value: "4.9",
    count: "16",
  },
  hero: {
    image: "/images/hero-pizza.jpg",
    imageAlt: {
      es: "Pizza recién horneada",
      en: "Freshly baked pizza",
    },
  },
  seo: {
    titleSuffix: "Guadiaro — Pizza al Horno, Reparto y Recogida",
  },
  reviews: [
    {
      stars: 5,
      text: {
        es: "La mejor pizza para llevar de la zona, y encima reparten rapidísimo. El equipo es un encanto.",
        en: "The best takeaway pizza in the area, and they deliver super fast. The team is lovely.",
      },
      author: "Natalie P., Local Guide",
    },
    {
      stars: 5,
      text: {
        es: "Pizzas de una calidad excelente, servicio rápido y amable — y el calzone es espectacular.",
        en: "Excellent quality pizzas, fast and friendly service — and the calzone is spectacular.",
      },
      author: "José Antonio T.",
    },
    {
      stars: 5,
      text: {
        es: "Una pizza napolitana impresionante. Sencillamente la mejor de toda la zona de Guadiaro.",
        en: "An impressive Neapolitan pizza. Simply the best in the whole Guadiaro area.",
      },
      author: "Kristina M., Local Guide",
    },
    {
      stars: 5,
      text: {
        es: "Siempre deliciosa y casera. El trato no puede ser más atento y cercano.",
        en: "Always delicious and homemade. The service couldn't be more attentive.",
      },
      author: "Oliver M.",
    },
    {
      stars: 5,
      text: {
        es: "Comida excelente, muy recomendable — volvemos siempre que podemos.",
        en: "Excellent food, highly recommended — we come back whenever we can.",
      },
      author: "Samuel B., Local Guide",
    },
    {
      stars: 5,
      text: {
        es: "Venimos desde Sevilla y siempre pedimos aquí en Torreguadiaro — la masa es de otro nivel.",
        en: "We come from Seville and always order here in Torreguadiaro — the dough is next level.",
      },
      author: "Estefanía Z.",
    },
  ],
} as const;