import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-post',
  templateUrl: './link-post.component.html',
  styleUrls: ['./link-post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class LinkPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
