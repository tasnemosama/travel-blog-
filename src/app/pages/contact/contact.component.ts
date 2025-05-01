import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form Submitted', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
    alert('Message Sent Successfully!');
  }
}
