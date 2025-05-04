import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-business',
  standalone: true,
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  imports: [CommonModule, RouterModule],

})
export class BusinessComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
