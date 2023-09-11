import { SavedSearchInterface } from 'interfaces/saved-search';
import { TrendSearchInterface } from 'interfaces/trend-search';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SearchInterface {
  id?: string;
  query: string;
  filter?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  saved_search?: SavedSearchInterface[];
  trend_search?: TrendSearchInterface[];
  user?: UserInterface;
  _count?: {
    saved_search?: number;
    trend_search?: number;
  };
}

export interface SearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  query?: string;
  filter?: string;
  user_id?: string;
}
