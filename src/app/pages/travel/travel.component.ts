import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TravelComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}