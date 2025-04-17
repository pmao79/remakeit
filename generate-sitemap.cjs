// generate-sitemap.cjs
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
// Importera din funktion för att hämta slugs (justera sökvägen om nödvändigt)
// Om denna fil/funktion inte finns, behöver den skapas eller logiken läggas här.
// const { fetchBlogSlugs } = require('./src/utils/WorkspaceBlogSlugs'); // ANTAGANDE om sökväg

// --- Konfiguration ---
const hostname = 'https://www.remakeit.se';
// !! Använd 'dist' som vi såg i loggarna !!
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
const sitemapLinks = [];

// Hantera statiska routes (TILLBAKA NU!)
staticRoutes.forEach(route => {
  const svUrlPath = route;
  const enUrlPath = route === '/' ? '/en' : `/en${route}`;
  const lastmod = '2024-04-15'; // PLACEHOLDER - Replace with actual last modified date
  const hreflangLinks = [
    { lang: 'sv', url: `${hostname}${svUrlPath}` },
    { lang: 'en', url: `${hostname}${enUrlPath}` }
  ];
  sitemapLinks.push({
    url: svUrlPath,
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1.0 : 0.8,
    lastmod: lastmod,
    links: hreflangLinks
  });
});

// --- Dynamiska Routes (Blogg etc.) ---
const WorkspaceBlogSlugs = async () => {
  console.warn('Dynamic blog slug fetching is not implemented. Using hardcoded values.');
  return [
    'why-seo-is-crucial-for-businesses',
    'modern-website-increases-sales',
    '5-things-business-website-must-have'
  ];
};

// --- Generera och Spara JSON ---
const generate = async () => {
  try {
    const dynamicSlugs = await WorkspaceBlogSlugs();

    // Handle dynamic blog routes
    dynamicSlugs.forEach(slug => {
      const svUrlPath = `/blog/${slug}`;
      const enUrlPath = `/en/blog/${slug}`;
      const lastmod = '2024-04-01'; // PLACEHOLDER - Replace with actual last modified date
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

    // Create XML stream
    const stream = new SitemapStream({ hostname });
    const readableStream = Readable.from(sitemapLinks);
    readableStream.pipe(stream);

    // Generate XML with explicit UTF-8 encoding
    const data = await streamToPromise(stream);
    const xmlString = data.toString('utf8');

    // Ensure build directory exists
    if (!fs.existsSync(buildOutputPath)){
        fs.mkdirSync(buildOutputPath, { recursive: true });
    }

    // Write XML file with verification
    try {
        fs.writeFileSync(sitemapPath, xmlString, { encoding: 'utf8' });
        const writtenContent = fs.readFileSync(sitemapPath, 'utf8');
        if (writtenContent !== xmlString) {
            throw new Error('Verification failed: Written file content does not match generated XML string');
        }
        console.log('File content successfully verified after write.');
        console.log(`Sitemap successfully generated and written to ${sitemapPath}! (${sitemapLinks.length} entries)`);
    } catch (writeError) {
        console.error(`Failed to write or verify sitemap file at ${sitemapPath}:`, writeError);
        process.exit(1);
    }

  } catch (error) {
    console.error('Error during sitemap generation:', error);
    process.exit(1);
  }
};

generate();