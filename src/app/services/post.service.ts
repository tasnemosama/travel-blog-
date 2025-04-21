import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Mock data - replace with actual API calls in a real application
  private posts = [
    {
      id: '1',
      title: 'Capturing the Perfect Sunset',
      category: 'Photography',
      date: 'June 15, 2023',
      author: 'Jane Smith',
      image: '/assets/images/photography-1.jpg',
      excerpt: 'Learn the techniques for capturing stunning sunset photographs with any camera.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
      tags: ['photography', 'sunset', 'techniques']
    },
    // Add more posts as needed
  ];

  constructor() { }

  getPosts(): Observable<any[]> {
    return of(this.posts);
  }

  getPostById(id: string): Observable<any> {
    const post = this.posts.find(p => p.id === id);
    return of(post);
  }
}