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
    // Check if current route is home page
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
    // Initial check for home page
    this.isHomePage = this.router.url === '/' || 
                      this.router.url.startsWith('/home/list-layout') || 
                      this.router.url.startsWith('/home/grid-layout') || 
                      this.router.url.startsWith('/home/grid-no-sidebar') || 
                      this.router.url.startsWith('/home/boxed-layout');
  }

  // Optional: Close dropdown when clicking outside
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
      // Focus the search input when overlay is opened
      setTimeout(() => {
        const searchInput = document.querySelector('.search-form input') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }, 100);
    } else {
      // Clear search query when closing
      this.searchQuery = '';
    }
    
    // Prevent scrolling when search is active
    document.body.style.overflow = this.isSearchActive ? 'hidden' : '';
  }

  submitSearch(event: Event): void {
    event.preventDefault();
    const query = this.searchQuery.trim().toLowerCase();

    const validRoutes = [
      'home',
      'photography',
      'sports',
      'travel',
      'business',
      'fashion',
      'features',
      'contact'
    ];

    if (validRoutes.includes(query)) {
      this.router.navigate(['/' + query]);
    } else {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery.trim() } });
    }

    this.toggleSearch(); // Close search overlay after submitting
  }
}