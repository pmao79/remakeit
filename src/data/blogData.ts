
// Blog posts data structure
export interface BlogPost {
  id: number;
  slug: string;
  title: {
    sv: string;
    en: string;
  };
  excerpt: {
    sv: string;
    en: string;
  };
  content?: {
    sv: string;
    en: string;
  };
  date: string;
  category: {
    sv: string;
    en: string;
  };
  keywords?: {
    sv: string;
    en: string;
  };
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'why-seo-is-crucial-for-businesses',
    title: {
      sv: 'Varför SEO är avgörande för företag',
      en: 'Why SEO is crucial for businesses'
    },
    excerpt: {
      sv: 'En hemsida utan SEO är som en butik utan skylt. Optimera din sida för Google och nå fler kunder!',
      en: 'A website without SEO is like a store without a sign. Optimize your site for Google and reach more customers!'
    },
    date: '2023-09-15',
    category: {
      sv: 'SEO',
      en: 'SEO'
    },
    keywords: {
      sv: 'sökmotoroptimering, google rankning, organisk trafik, SEO-optimerad webbsida',
      en: 'search engine optimization, google ranking, organic traffic, SEO-optimized website'
    }
  },
  {
    id: 2,
    slug: 'modern-website-increases-sales',
    title: {
      sv: 'Hur en modern hemsida ökar försäljningen',
      en: 'How a modern website increases sales'
    },
    excerpt: {
      sv: '75 % av kunder litar mer på företag med professionella hemsidor. Är din uppdaterad?',
      en: '75% of customers trust companies with professional websites more. Is yours updated?'
    },
    date: '2023-09-28',
    category: {
      sv: 'Webbutveckling',
      en: 'Web Development'
    },
    keywords: {
      sv: 'modern webbsida, digital närvaro, webbdesign, kundförtroende',
      en: 'modern website, digital presence, web design, customer trust'
    }
  },
  {
    id: 3,
    slug: '5-things-business-website-must-have',
    title: {
      sv: '5 saker varje företagshemsida måste ha',
      en: '5 things every business website must have'
    },
    excerpt: {
      sv: 'Mobilvänlig design, snabb laddning, tydlig CTA, SEO-optimering och kontaktuppgifter. Har du allt?',
      en: 'Mobile-friendly design, fast loading, clear CTA, SEO optimization and contact details. Do you have it all?'
    },
    date: '2023-10-10',
    category: {
      sv: 'Webbutveckling',
      en: 'Web Development'
    },
    keywords: {
      sv: 'mobilvänlig design, laddningstid, CTA, sökoptimering, webbdesign',
      en: 'mobile-friendly design, load time, CTA, search optimization, web design'
    }
  },
  {
    id: 4,
    slug: 'ai-and-web-design',
    title: {
      sv: 'AI och webbdesign – framtiden är här',
      en: 'AI and web design – the future is here'
    },
    excerpt: {
      sv: 'AI kan skapa snabbare, smartare och mer användarvänliga hemsidor. Är ditt företag redo?',
      en: 'AI can create faster, smarter and more user-friendly websites. Is your business ready?'
    },
    date: '2023-10-25',
    category: {
      sv: 'AI',
      en: 'AI'
    },
    keywords: {
      sv: 'AI för företag, AI webbdesign, framtidssäkrad hemsida, digital transformation',
      en: 'AI for business, AI web design, future-proof website, digital transformation'
    }
  },
  {
    id: 5,
    slug: 'improve-google-ranking',
    title: {
      sv: 'Så förbättrar du din hemsidas Google-rankning',
      en: 'How to improve your website\'s Google ranking'
    },
    excerpt: {
      sv: 'Snabba sidor, bra SEO-texter och mobilvänlighet – tre nycklar för en topposition på Google.',
      en: 'Fast pages, good SEO texts and mobile friendliness – three keys for a top position on Google.'
    },
    date: '2023-11-05',
    category: {
      sv: 'SEO',
      en: 'SEO'
    },
    keywords: {
      sv: 'Google rankning, SEO-optimering, sökmotorer, sök ranking, digital marknadsföring',
      en: 'Google ranking, SEO optimization, search engines, search ranking, digital marketing'
    }
  },
  {
    id: 6,
    slug: 'small-businesses-invest-ai',
    title: {
      sv: 'Därför ska småföretag satsa på AI',
      en: 'Why small businesses should invest in AI'
    },
    excerpt: {
      sv: 'AI effektiviserar marknadsföring, kundservice och hemsideutveckling. Missa inte den digitala revolutionen!',
      en: 'AI streamlines marketing, customer service and website development. Don\'t miss the digital revolution!'
    },
    date: '2023-11-18',
    category: {
      sv: 'AI',
      en: 'AI'
    },
    keywords: {
      sv: 'AI för småföretag, digital revolution, AI marknadsföring, automatisering',
      en: 'AI for small businesses, digital revolution, AI marketing, automation'
    }
  },
  {
    id: 7,
    slug: 'how-often-update-website',
    title: {
      sv: 'Hur ofta ska du uppdatera din hemsida?',
      en: 'How often should you update your website?'
    },
    excerpt: {
      sv: 'Minst vartannat år! Teknik, SEO och design utvecklas snabbt – håll din sida aktuell.',
      en: 'At least every two years! Technology, SEO and design develop quickly – keep your site up to date.'
    },
    date: '2023-12-02',
    category: {
      sv: 'Webbutveckling',
      en: 'Web Development'
    },
    keywords: {
      sv: 'webbuppdatering, hemsida underhåll, webbutveckling, webbdesign trender',
      en: 'website update, website maintenance, web development, web design trends'
    }
  },
  {
    id: 8,
    slug: 'common-mistakes-business-websites',
    title: {
      sv: 'Vanliga misstag företag gör med sina hemsidor',
      en: 'Common mistakes businesses make with their websites'
    },
    excerpt: {
      sv: 'Saknar SEO, långsam laddning, dålig mobilanpassning. Gör inte dessa misstag!',
      en: 'Lacks SEO, slow loading, poor mobile adaptation. Don\'t make these mistakes!'
    },
    date: '2023-12-15',
    category: {
      sv: 'Webbutveckling',
      en: 'Web Development'
    },
    keywords: {
      sv: 'vanliga webbmisstag, webbdesign fel, hemsidautveckling, webbplatsoptimering',
      en: 'common web mistakes, web design errors, website development, website optimization'
    }
  },
  {
    id: 9,
    slug: 'cheap-website-can-be-expensive',
    title: {
      sv: 'Varför en billig hemsida kan bli dyr',
      en: 'Why a cheap website can become expensive'
    },
    excerpt: {
      sv: 'Billiga lösningar saknar ofta SEO och support – välj kvalitet och få fler kunder.',
      en: 'Cheap solutions often lack SEO and support – choose quality and get more customers.'
    },
    date: '2024-01-08',
    category: {
      sv: 'Webbutveckling',
      en: 'Web Development'
    },
    keywords: {
      sv: 'billig hemsida, kvalitetshemsida, webbkostnad, hemsidainvestering',
      en: 'cheap website, quality website, web cost, website investment'
    }
  },
  {
    id: 10,
    slug: 'website-needs-upgrade',
    title: {
      sv: 'Så vet du att din hemsida behöver en uppgradering',
      en: 'How to know your website needs an upgrade'
    },
    excerpt: {
      sv: 'Om den är långsam, gammal eller svår att hitta på Google är det dags för en ny hemsida!',
      en: 'If it\'s slow, old or hard to find on Google, it\'s time for a new website!'
    },
    date: '2024-01-22',
    category: {
      sv: 'Webbutveckling',
      en: 'Web Development'
    },
    keywords: {
      sv: 'uppgradera hemsida, hemsida förnyelse, modernisera webbplats, webbplatsoptimering',
      en: 'upgrade website, website renewal, modernize website, website optimization'
    }
  }
];
