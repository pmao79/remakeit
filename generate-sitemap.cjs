// --- Generera Sitemap ---
const generate = async () => {
  try {
    const dynamicSlugs = await fetchBlogSlugs(); // Hämta slugs

    dynamicSlugs.forEach(slug => {
      const svUrlPath = `/blog/${slug}`;
      const enUrlPath = `/en/blog/${slug}`;
      // !! VIKTIGT: Fixa lastmod datum !!
      // TODO: Hämta korrekt lastmod för varje post från datakällan.
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

    // Vänta på att datan genereras
    const data = await streamToPromise(stream);
    // Konvertera till sträng EN gång
    const stringData = data.toString();

    // ----> DETALJERAD LOGGNING <----
    console.log("--- Sitemap Content Detailed START ---");
    console.log("Type of data variable:", typeof data); // Är det en Buffer eller String?
    console.log("Type of stringData variable:", typeof stringData);
    console.log("Content that WILL be written to file:");
    console.log(stringData); // Logga exakt den sträng som ska skrivas
    console.log("--- Sitemap Content Detailed END ---");
    // ------------------------------------

    // Skapa build-mappen om den inte finns
    if (!fs.existsSync(buildOutputPath)){
        fs.mkdirSync(buildOutputPath, { recursive: true });
    }

    // Försök skriva till fil med felhantering
    try {
        fs.writeFileSync(sitemapPath, stringData); // Använd den konverterade strängen
        console.log(`Sitemap successfully generated and WRITTEN to ${sitemapPath}! (${sitemapLinks.length} entries)`);
    } catch (writeError) {
        console.error(`!!! FAILED TO WRITE SITEMAP FILE at ${sitemapPath} !!!`, writeError);
        process.exit(1); // Stoppa bygget om skrivningen misslyckas!
    }

  } catch (error) {
    console.error('Error during sitemap generation:', error);
    process.exit(1);
  }
};

// Denna rad ska också vara med utanför funktionen:
generate(); // Kör genereringen