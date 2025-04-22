import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.component.html',
  styleUrls: ['./video-post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class VideoPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
