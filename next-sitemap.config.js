/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nanowindowsfilm.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  // Agrega esto para desbloquear a Google:
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}