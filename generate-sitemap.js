
// generate-sitemap.js
const fs = require('fs');
const path = require('path'); // Använd path-modulen för sökvägar
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// --- Konfiguration ---
const hostname = 'https://www.remakeit.se';
// !! VIKTIGT: Specificera korrekt sökväg till din build output-mapp !!
const buildOutputPath = path.resolve(__dirname, 'dist'); // Exempel: 'dist', kan vara 'build'
const sitemapPath = path.join(buildOutputPath, 'sitemap.xml');
// --------------------

// --- Definiera Routes ---
// Statiska sidor (lägg till ALLA som finns)
const staticRoutes = [
  '/', '/about', '/portfolio', '/contact', '/blog',
  '/services/web-design', '/services/web-redesign',
  '/services/seo-optimization', '/services/conversion-optimization'
];

// Skapa både svenska och engelska versioner av statiska routes
let links = [];
staticRoutes.forEach(route => {
  const lastmod = new Date().toISOString(); // Använd dagens datum som exempel
  // Svensk version
  links.push({ 
    url: route, 
    changefreq: route === '/' ? 'daily' : 'weekly', 
    priority: route === '/' ? 1.0 : 0.8, 
    lastmod: lastmod 
  });
  
  // Engelsk version
  if (route === '/') {
    links.push({ 
      url: '/en', 
      changefreq: 'daily', 
      priority: 0.9, 
      lastmod: lastmod, 
      links: [
        { lang: 'sv', url: `${hostname}/` }, 
        { lang: 'en', url: `${hostname}/en` }
      ] 
    });
    
    // Uppdatera svenska roten med hreflang också
    const rootIndex = links.findIndex(link => link.url === '/');
    links[rootIndex].links = [
      { lang: 'sv', url: `${hostname}/` }, 
      { lang: 'en', url: `${hostname}/en` }
    ];
  } else {
    const enUrl = `/en${route}`;
    links.push({ 
      url: enUrl, 
      changefreq: 'weekly', 
      priority: 0.7, 
      lastmod: lastmod, 
      links: [
        { lang: 'sv', url: `${hostname}${route}` }, 
        { lang: 'en', url: `${hostname}${enUrl}` }
      ] 
    });
    
    // Uppdatera svenska versionen med hreflang
    const svIndex = links.findIndex(link => link.url === route);
    links[svIndex].links = [
      { lang: 'sv', url: `${hostname}${route}` }, 
      { lang: 'en', url: `${hostname}${enUrl}` }
    ];
  }
});

// --- Dynamiska Routes (Blogg etc.) ---
// !! VIKTIGT: Denna del KRÄVER anpassad logik !!
// TODO: Implementera logik här för att hämta alla publicerade blogg-slugs
//       (och ev. andra dynamiska sidor) från er datakälla (Lovable API?).
//       För varje slug, lägg till BÅDE svensk och engelsk URL i 'links'-arrayen
//       med korrekta lastmod-datum och hreflang-länkar.

const fetchBlogSlugs = async () => {
  // Exempel på hur det KAN se ut (MÅSTE ANPASSAS):
  // const response = await fetch('URL_TILL_LOVABLE_API_FÖR_SLUGS');
  // const slugs = await response.json();
  // return slugs; // T.ex. ['post-1', 'post-2']
  console.warn("Dynamisk hämtning av blogg-slugs är inte implementerad i generate-sitemap.js");
  
  // För nu, returnerar vi hardkodade värden baserade på de som finns i sitemap.xml
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
      const svUrl = `/blog/${slug}`;
      const enUrl = `/en/blog/${slug}`;
      // TODO: Hämta korrekt lastmod för varje post om möjligt
      const lastmod = new Date().toISOString();
      
      links.push({ 
        url: svUrl, 
        changefreq: 'monthly', 
        priority: 0.6, 
        lastmod, 
        links: [
          { lang: 'sv', url: `${hostname}${svUrl}` }, 
          { lang: 'en', url: `${hostname}${enUrl}` }
        ] 
      });
      
      links.push({ 
        url: enUrl, 
        changefreq: 'monthly', 
        priority: 0.5, 
        lastmod, 
        links: [
          { lang: 'sv', url: `${hostname}${svUrl}` }, 
          { lang: 'en', url: `${hostname}${enUrl}` }
        ] 
      });
    });

    const stream = new SitemapStream({ hostname });
    const readableStream = Readable.from(links);
    readableStream.pipe(stream);

    const data = await streamToPromise(stream);

    // Skapa build-mappen om den inte finns (bra för lokal körning/test)
    if (!fs.existsSync(buildOutputPath)){
      fs.mkdirSync(buildOutputPath, { recursive: true });
    }
    
    // Skriv till fil
    fs.writeFileSync(sitemapPath, data.toString());
    console.log(`Sitemap successfully generated at ${sitemapPath}! (${links.length} URLs)`);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1); // Avsluta med felkod
  }
};

generate(); // Kör genereringen
