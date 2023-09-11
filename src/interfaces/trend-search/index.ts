import { TrendInterface } from 'interfaces/trend';
import { SearchInterface } from 'interfaces/search';
import { GetQueryInterface } from 'interfaces';

export interface TrendSearchInterface {
  id?: string;
  trend_id: string;
  search_id: string;
  created_at?: any;
  updated_at?: any;

  trend?: TrendInterface;
  search?: SearchInterface;
  _count?: {};
}

export interface TrendSearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  trend_id?: string;
  search_id?: string;
}
