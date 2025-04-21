import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fashion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
  showMorePosts = false;
  
  // You can add more properties and methods here as needed
}
