import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  isDropdownVisible: boolean = false;
  unreadCount: number = 3;

  notifications = [
    { message: 'You have a new message' },
    { message: 'New friend request' },
    { message: 'Update available' }
  ];

  constructor(private elementRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Listen for document clicks
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isDropdownVisible = false; // Close the dropdown if the click is outside
    }
  }
}
