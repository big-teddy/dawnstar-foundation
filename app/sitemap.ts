import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dawnstarfoundation.org';

  // 정적 페이지들
  const routes = [
    '',
    '/about/mission',
    '/about/story',
    '/about/manifesto',
    '/about/commitments',
    '/get-involved',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
