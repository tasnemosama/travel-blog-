export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  thumbnail: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryResponse {
  categories: Category[];
  page: number;
  pages: number;
  count: number;
} 