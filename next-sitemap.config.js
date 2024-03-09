const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
    siteUrl: siteMetadata.siteUrl,
    generateRobotsTxt: true,
    async exportPathMap() {
        // Fetch all dynamic routes and static pages
        const dynamicRoutes = await fetchDynamicRoutes(); // Implement this function to fetch your dynamic routes
        const staticPages = {
            '/': { page: '/' }, // Add your homepage
            // Add other static pages here
        };

        // Combine dynamic routes and static pages
        const pathMap = { ...staticPages, ...dynamicRoutes };

        // Convert pathMap to an array of URLs
        const urls = Object.values(pathMap).map(route => route.page);

        // Return sitemap XML string
        const sitemapXml = generateSitemapXml(urls);

        return { '/sitemap.xml': { page: '/sitemap', query: { xmlContent: sitemapXml } } };
    },
};
