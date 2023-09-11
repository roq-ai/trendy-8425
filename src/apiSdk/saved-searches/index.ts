import axios from 'axios';
import queryString from 'query-string';
import { SavedSearchInterface, SavedSearchGetQueryInterface } from 'interfaces/saved-search';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSavedSearches = async (
  query?: SavedSearchGetQueryInterface,
): Promise<PaginatedInterface<SavedSearchInterface>> => {
  const response = await axios.get('/api/saved-searches', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSavedSearch = async (savedSearch: SavedSearchInterface) => {
  const response = await axios.post('/api/saved-searches', savedSearch);
  return response.data;
};

export const updateSavedSearchById = async (id: string, savedSearch: SavedSearchInterface) => {
  const response = await axios.put(`/api/saved-searches/${id}`, savedSearch);
  return response.data;
};

export const getSavedSearchById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/saved-searches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSavedSearchById = async (id: string) => {
  const response = await axios.delete(`/api/saved-searches/${id}`);
  return response.data;
};
