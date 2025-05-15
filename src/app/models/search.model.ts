import { Blog } from './blog.model';

export interface SearchResponse {
  results: Blog[];
  count: number;
  query: string;
} 