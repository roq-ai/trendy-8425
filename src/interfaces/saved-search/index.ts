import { SearchInterface } from 'interfaces/search';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SavedSearchInterface {
  id?: string;
  search_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  search?: SearchInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SavedSearchGetQueryInterface extends GetQueryInterface {
  id?: string;
  search_id?: string;
  user_id?: string;
}
