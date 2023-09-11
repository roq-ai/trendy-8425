import { TrendSearchInterface } from 'interfaces/trend-search';
import { GetQueryInterface } from 'interfaces';

export interface TrendInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  trend_search?: TrendSearchInterface[];

  _count?: {
    trend_search?: number;
  };
}

export interface TrendGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
