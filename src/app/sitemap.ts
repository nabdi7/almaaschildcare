import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.almaaschildcare.com/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.almaaschildcare.com/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.almaaschildcare.com/programs',
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: 'https://www.almaaschildcare.com/contact',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}