import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-standard-post',
  templateUrl: './standard-post.component.html',
  styleUrls: ['./standard-post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class StandardPostComponent implements OnInit {
  // Copy all properties and methods from features component
  
  constructor() { }

  ngOnInit(): void {
  }
}
