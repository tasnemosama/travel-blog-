import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  isHomePage: boolean = true;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHomePage = event.url === '/' || event.url === '/home';
    });
    
    // Set initial value
    this.isHomePage = this.router.url === '/' || this.router.url === '/home';
  }
  
  toggleMobileMenu(): void {
    const navContainer = document.getElementById('navbarContent');
    if (navContainer) {
      navContainer.classList.toggle('active');
    }
  }

  closeMobileMenu(): void {
    const navContainer = document.getElementById('navbarContent');
    if (navContainer) {
      navContainer.classList.remove('active');
    }
  }
}