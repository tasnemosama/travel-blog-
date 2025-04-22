import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-audio-post',
  templateUrl: './audio-post.component.html',
  styleUrls: ['./audio-post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AudioPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
