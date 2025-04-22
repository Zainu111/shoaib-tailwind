// robots.js or robots.ts - Place this file in the app directory (Next.js 13+)
// This generates a robots.txt file automatically

export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: ['/'],        // Pages that are allowed to be crawled
          disallow: [
            '/api/*'
          ]
        }
      ],
      sitemap: 'https://theshoaibshahid.com/sitemaps.xml'  // Link to your sitemap
    }
  }