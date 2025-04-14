// generate-sitemap.cjs
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// --- Konfiguration ---
const hostname = 'https://www.remakeit.se';
// !! ANTAGANDE: Din build-mapp heter 'dist'. ÄNDRA OM DEN HETER NÅGOT ANNAT (t.ex. 'build') !!
const buildOutputPath = path.resolve(__dirname, 'dist');
const sitemapPath = path.join(buildOutputPath, 'sitemap.xml');
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

// Hantera statiska routes
staticRoutes.forEach(route => {
  const svUrlPath = route;
  // Korrekt hantering för roten '/' -> '/en', annars '/en/...'
  const enUrlPath = route === '/' ? '/en' : `/en${route}`;

  // !! VIKTIGT: Fixa lastmod datum !!
  // const lastmod = new Date().toISOString(); // ANVÄND INTE DETTA! Ger byggdatum/framtida datum.
  // Ersätt med faktiskt ändringsdatum om möjligt, annars kanske ett fixerat datum eller ta bort lastmod helt.
  // Exempel med fixerat datum (ändra till något rimligt):
  const lastmod = '2025-04-10'; // Exempel - sätt ett relevant datum eller ta bort raden

  const hreflangLinks = [
    { lang: 'sv', url: `${hostname}${svUrlPath}` },
    { lang: 'en', url: `${hostname}${enUrlPath}` }
  ];

  sitemapLinks.push({
    url: svUrlPath, // Använd svenska som primär i <loc>
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: lastmod, // Använd fixat eller korrekt datum
    links: hreflangLinks // Lägg till hreflang-länkarna HÄR
  });
  // Lägg INTE till en separat post för enUrlPath här!
});

// --- Dynamiska Routes (Blogg etc.) ---
// !! VIKTIGT: Denna del KRÄVER fortfarande anpassad logik !!
const fetchBlogSlugs = async () => {
  // TODO: Implementera logik här för att hämta alla publicerade blogg-slugs
  //       från er datakälla (Lovable API?).
  console.warn("Dynamisk hämtning av blogg-slugs är inte implementerad i generate-sitemap.cjs");
  // Returnerar hardkodade värden som exempel
  return [
    'why-seo-is-crucial-for-businesses',
    'modern-website-increases-sales',
    '5-things-business-website-must-have'
  ];
};

// --- Generera Sitemap ---
const generate = async () => {
  try {
    const dynamicSlugs = await fetchBlogSlugs(); // Hämta slugs

    dynamicSlugs.forEach(slug => {
      const svUrlPath = `/blog/${slug}`;
      const enUrlPath = `/en/blog/${slug}`;

      // !! VIKTIGT: Fixa lastmod datum !!
      // TODO: Hämta korrekt lastmod för varje post från datakällan.
      // const lastmod = hämtat_datum_för_posten;
      const lastmod = '2024-03-10'; // Exempel - använd faktiskt publicerings-/ändringsdatum

      const hreflangLinks = [
        { lang: 'sv', url: `${hostname}${svUrlPath}` },
        { lang: 'en', url: `${hostname}${enUrlPath}` }
      ];

      sitemapLinks.push({
        url: svUrlPath, // Använd svenska som primär i <loc>
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: lastmod, // Använd korrekt datum
        links: hreflangLinks // Lägg till hreflang-länkarna HÄR
      });
       // Lägg INTE till en separat post för enUrlPath här!
    });

    // Skapa XML-strömmen
    const stream = new SitemapStream({ hostname });
    const readableStream = Readable.from(sitemapLinks); // Använd den korrekt byggda arrayen
    readableStream.pipe(stream);

    const data = await streamToPromise(stream);
    console.log("--- Sitemap Content START ---");
    console.log(data.toString()); // Logga XML-datan som ska skrivas
    console.log("--- Sitemap Content END ---");

    // Skapa build-mappen om den inte finns
    if (!fs.existsSync(buildOutputPath)){
        fs.mkdirSync(buildOutputPath, { recursive: true });
    }
    // Skriv till fil
    fs.writeFileSync(sitemapPath, data.toString());
    console.log(`Sitemap successfully generated at ${sitemapPath}! (${sitemapLinks.length} entries)`);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
};

generate(); // Kör genereringen
