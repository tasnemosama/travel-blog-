export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  thumbnail: string;
  featured: boolean;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  author: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BlogResponse {
  blogs: Blog[];
  page: number;
  pages: number;
  count: number;
}

export interface BlogDetailsResponse {
  blog: Blog;
  relatedBlogs: Blog[];
} 