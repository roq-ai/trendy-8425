const mapping: Record<string, string> = {
  companies: 'company',
  'saved-searches': 'saved_search',
  searches: 'search',
  trends: 'trend',
  'trend-searches': 'trend_search',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
