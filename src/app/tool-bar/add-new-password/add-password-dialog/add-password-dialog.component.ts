import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-password-dialog',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-password-dialog.component.html',
  styleUrl: './add-password-dialog.component.css'
})
export class AddPasswordDialogComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() savePassword = new EventEmitter<{ 
    weburi_appname: string;
    username: string; 
    password: string;
    note: string
  }>();

  weburi_appname: string = '';
  username: string = '';
  password: string = '';
  note: string = '';

  showPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  save(): void {
    this.savePassword.emit({ 
      weburi_appname: this.weburi_appname,
      username: this.username, 
      password: this.password,
      note: this.note
    });
  }

  close(): void {
    this.closeDialog.emit();
  }
}
