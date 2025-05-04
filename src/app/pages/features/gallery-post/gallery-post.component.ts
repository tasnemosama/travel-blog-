import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery-post',
  templateUrl: './gallery-post.component.html',
  styleUrls: ['./gallery-post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class GalleryPostComponent implements OnInit {
  galleryImages: string[] = [
    'travel-7.jpeg',
    'travel-8.jpeg',
    'sport3.jpeg',
    'travel-6.jpg',
  ];
  
  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Auto-rotate gallery images every 5 seconds
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  prevImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 ? 
      this.galleryImages.length - 1 : this.currentImageIndex - 1;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
  }
}
