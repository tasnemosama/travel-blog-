import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Remove standalone: true and add imports to the component
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'travel-blog';
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
}
