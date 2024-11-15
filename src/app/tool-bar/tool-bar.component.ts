import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OtherToolsMenuComponent } from "./other-tools-menu/other-tools-menu.component";
import { AddNewPasswordComponent } from "./add-new-password/add-new-password.component";

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    CommonModule,
    OtherToolsMenuComponent,
    AddNewPasswordComponent
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

}
