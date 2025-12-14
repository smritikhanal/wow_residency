// Utility to create page URLs for routing
export function createPageUrl(page) {
  // Accepts page name and returns a route string
  // e.g. createPageUrl('Home') => '/Home'
  if (!page || typeof page !== 'string') return '/';
  if (page === 'Home') return '/';
  return `/${page}`;
}
