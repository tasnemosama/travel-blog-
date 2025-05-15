import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog, BlogDetailsResponse, BlogResponse } from '../models/blog.model';
import { Category, CategoryResponse } from '../models/category.model';
import { SearchResponse } from '../models/search.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBlogs(page: number = 1): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(`${this.apiUrl}/blogs?page=${page}`);
  }

  getFeaturedBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}/blogs/featured`);
  }

  getBlogsByCategory(categoryId: string, page: number = 1): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(`${this.apiUrl}/blogs/category/${categoryId}?page=${page}`);
  }

  getBlogBySlug(slug: string): Observable<BlogDetailsResponse> {
    return this.http.get<BlogDetailsResponse>(`${this.apiUrl}/blogs/slug/${slug}`);
  }

  getCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.apiUrl}/categories`);
  }

  getFeaturedCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/featured`);
  }

  getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/slug/${slug}`);
  }

  searchBlogs(query: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.apiUrl}/blogs/search?q=${encodeURIComponent(query)}`);
  }

  getImageUrl(imagePath: string): string {
    if (!imagePath) {
      return '';
    }
    
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    const normalizedPath = imagePath.replace(/\\/g, '/');
    
    const cleanPath = normalizedPath.startsWith('/') 
      ? normalizedPath.substring(1) 
      : normalizedPath;
    
    return `${this.baseUrl}/${cleanPath}`;
  }
} 