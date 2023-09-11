import axios from 'axios';
import queryString from 'query-string';
import { TrendSearchInterface, TrendSearchGetQueryInterface } from 'interfaces/trend-search';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrendSearches = async (
  query?: TrendSearchGetQueryInterface,
): Promise<PaginatedInterface<TrendSearchInterface>> => {
  const response = await axios.get('/api/trend-searches', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTrendSearch = async (trendSearch: TrendSearchInterface) => {
  const response = await axios.post('/api/trend-searches', trendSearch);
  return response.data;
};

export const updateTrendSearchById = async (id: string, trendSearch: TrendSearchInterface) => {
  const response = await axios.put(`/api/trend-searches/${id}`, trendSearch);
  return response.data;
};

export const getTrendSearchById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trend-searches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTrendSearchById = async (id: string) => {
  const response = await axios.delete(`/api/trend-searches/${id}`);
  return response.data;
};
