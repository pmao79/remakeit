// generate-sitemap.cjs
const fs = require('fs');
const path = require('path');
// Importera din funktion för att hämta slugs (justera sökvägen om nödvändigt)
// Om denna fil/funktion inte finns, behöver den skapas eller logiken läggas här.
// const { fetchBlogSlugs } = require('./src/utils/WorkspaceBlogSlugs'); // ANTAGANDE om sökväg

// --- Konfiguration ---
const hostname = 'https://www.remakeit.se';
// !! Använd 'dist' som vi såg i loggarna !!
const buildOutputPath = path.resolve(__dirname, 'dist');
const sitemapPath = path.join(buildOutputPath, 'sitemap.json'); // Sparar som .json
// --------------------

// --- Definiera Routes ---
// Statiska sidor (bas-sökvägar utan språkprefix)
const staticRoutes = [
  '/', '/about', '/portfolio', '/contact', '/blog',
  '/services/web-design', '/services/web-redesign',
  '/services/seo-optimization', '/services/conversion-optimization'
];

// Array för att hålla sitemap-objekten
let sitemapLinks = [];

// Hantera statiska routes (TILLBAKA NU!)
staticRoutes.forEach(route => {
  const svUrlPath = route;
  const enUrlPath = route === '/' ? '/en' : `/en${route}`;
  const lastmod = '2025-04-10'; // Exempel - använd faktiskt datum!
  const hreflangLinks = [
    { lang: 'sv', url: `${hostname}${svUrlPath}` },
    { lang: 'en', url: `${hostname}${enUrlPath}` }
  ];
  sitemapLinks.push({
    url: svUrlPath, // Använd svenska som primär URL för JSON-objektet
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: lastmod,
    links: hreflangLinks // Behåll hreflang-info även i JSON för ev. senare bruk
  });
});

// --- Dynamiska Routes (Blogg etc.) ---
const fetchBlogSlugs = async () => {
  // TODO: Implementera riktig hämtning av slugs här!
  console.warn("Dynamisk hämtning av blogg-slugs är inte implementerad i generate-sitemap.cjs");
  return [ // Hardkodade exempel
    'why-seo-is-crucial-for-businesses',
    'modern-website-increases-sales',
    '5-things-business-website-must-have'
  ];
  // OBS: Om importen av fetchBlogSlugs från utils misslyckas, definiera funktionen här istället.
};

// --- Generera och Spara JSON ---
const generate = async () => {
  try {
    const dynamicSlugs = await fetchBlogSlugs();

    dynamicSlugs.forEach(slug => {
      const svUrlPath = `/blog/${slug}`;
      const enUrlPath = `/en/blog/${slug}`;
      const lastmod = '2024-03-10'; // Exempel - använd faktiskt datum!
      const hreflangLinks = [
        { lang: 'sv', url: `${hostname}${svUrlPath}` },
        { lang: 'en', url: `${hostname}${enUrlPath}` }
      ];
      sitemapLinks.push({
        url: svUrlPath,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: lastmod,
        links: hreflangLinks
      });
    });

    // Gör om arrayen till en läsbar JSON-sträng
    const jsonDataString = JSON.stringify(sitemapLinks, null, 2);

    // Logga för felsökning
    console.log("--- Raw Links Array START ---");
    console.log("Content that WILL be written to sitemap.json:");
    console.log(jsonDataString);
    console.log("--- Raw Links Array END ---");

    // Skapa build-mappen om den inte finns
    if (!fs.existsSync(buildOutputPath)){
        fs.mkdirSync(buildOutputPath, { recursive: true });
    }

    // Försök skriva JSON till fil med felhantering
    try {
        fs.writeFileSync(sitemapPath, jsonDataString); // Skriver JSON-strängen
        console.log(`Sitemap JSON successfully generated and WRITTEN to ${sitemapPath}! (${sitemapLinks.length} entries)`);
    } catch (writeError) {
        console.error(`!!! FAILED TO WRITE SITEMAP JSON FILE at ${sitemapPath} !!!`, writeError);
        process.exit(1);
    }

  } catch (error) {
    console.error('Error during sitemap JSON generation:', error);
    process.exit(1);
  }
};

generate();