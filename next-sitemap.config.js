/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nanowindowsfilm.com',
  generateRobotsTxt: true, // Esto te genera el robots.txt automáticamente
  generateIndexSitemap: false, // Útil si tienes menos de 50,000 URLs
  exclude: ['/server-sitemap.xml'], // Opcional: para páginas protegidas si las tuvieras
}