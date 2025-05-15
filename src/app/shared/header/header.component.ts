import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class HeaderComponent implements OnInit {
  isHomePage: boolean = false;
  isSearchActive: boolean = false;
  searchQuery: string = '';
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.url === '/' || 
                        event.url.startsWith('/home/list-layout') || 
                        event.url.startsWith('/home/grid-layout') || 
                        event.url.startsWith('/home/grid-no-sidebar') || 
                        event.url.startsWith('/home/boxed-layout');
    });
  }

  ngOnInit(): void {
    this.isHomePage = this.router.url === '/' || 
                      this.router.url.startsWith('/home/list-layout') || 
                      this.router.url.startsWith('/home/grid-layout') || 
                      this.router.url.startsWith('/home/grid-no-sidebar') || 
                      this.router.url.startsWith('/home/boxed-layout');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    if (!event.target || !(event.target as Element).closest('.nav-item.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  }

  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
    if (this.isSearchActive) {
      setTimeout(() => {
        const searchInput = document.querySelector('.search-form input') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }, 100);
    } else {
      this.searchQuery = '';
    }

    document.body.style.overflow = this.isSearchActive ? 'hidden' : '';
  }

  submitSearch(event: Event): void {
    event.preventDefault();
    this.searchQuery = this.searchQuery.trim().toLowerCase();

    const posts = document.querySelectorAll('.post-card, .featured-post');
    
    posts.forEach((post: Element) => {
      const title = post.querySelector('.post-title')?.textContent?.toLowerCase() || '';
      const category = post.querySelector('.category-tag')?.textContent?.toLowerCase() || '';

      if (title.includes(this.searchQuery) || category.includes(this.searchQuery)) {
        (post as HTMLElement).style.display = '';
      } else {
        (post as HTMLElement).style.display = 'none';
      }
    });

    this.toggleSearch(); // أغلق نافذة البحث بعد التصفية
  }
}
