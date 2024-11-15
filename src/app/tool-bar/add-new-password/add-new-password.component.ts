import { Component } from '@angular/core';
import { AddPasswordDialogComponent } from './add-password-dialog/add-password-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new-password',
  standalone: true,
  imports: [
    AddPasswordDialogComponent,
    CommonModule
  ],
  templateUrl: './add-new-password.component.html',
  styleUrl: './add-new-password.component.css'
})
export class AddNewPasswordComponent {
  showDialog: boolean = false;

  openDialog(): void {
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
  }

  savePassword(data: { weburi_appname:string; username: string; password: string }): void {
    console.log('Password Saved:', data);
    this.showDialog = false;
  }
}
