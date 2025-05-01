import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel',
  standalone: true, // ✅ تأكد من وجود هذا
  imports: [CommonModule], // ✅ حتى يتمكن من استخدام *ngFor وغيره
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent { }
