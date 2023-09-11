import axios from 'axios';
import queryString from 'query-string';
import { TrendInterface, TrendGetQueryInterface } from 'interfaces/trend';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrends = async (query?: TrendGetQueryInterface): Promise<PaginatedInterface<TrendInterface>> => {
  const response = await axios.get('/api/trends', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTrend = async (trend: TrendInterface) => {
  const response = await axios.post('/api/trends', trend);
  return response.data;
};

export const updateTrendById = async (id: string, trend: TrendInterface) => {
  const response = await axios.put(`/api/trends/${id}`, trend);
  return response.data;
};

export const getTrendById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trends/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTrendById = async (id: string) => {
  const response = await axios.delete(`/api/trends/${id}`);
  return response.data;
};
