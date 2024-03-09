const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000, // Optional: Adjust the sitemap size as per your need
  sitemapRoutes: [
    {
      path: '/sitemap.xml',
      routes: async () => {
        return [
          { url: '/', changefreq: 'daily', priority: 1.0 }, // Homepage
          { url: '/sitemap-categories.xml', changefreq: 'daily', priority: 0.8 }, // Categories
          { url: '/sitemap-blogs.xml', changefreq: 'daily', priority: 0.8 }, // Blogs
        ];
      },
    },
    {
      path: '/sitemap-categories.xml',
      routes: async () => {
        const categoryRoutes = await fetchCategoryRoutes(); // Implement this function to fetch category routes
        return categoryRoutes.map(route => ({
          url: route,
          changefreq: 'daily',
          priority: 0.7,
        }));
      },
    },
    {
      path: '/sitemap-blogs.xml',
      routes: async () => {
        const blogRoutes = await fetchBlogRoutes(); // Implement this function to fetch blog routes
        return blogRoutes.map(route => ({
          url: route,
          changefreq: 'daily',
          priority: 0.7,
        }));
      },
    },
  ],
};
