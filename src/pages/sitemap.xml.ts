import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const baseUrl = 'https://miraclehandspa.com'
  const currentDate = new Date().toISOString()

  const pages = [
    {
      url: '/',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: '/booking',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: '/service',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/faq',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: '/thank-you',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3',
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
