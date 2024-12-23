import { Component } from '@angular/core';
import { SideBarLeftComponent } from "../side-bar-left/side-bar-left.component";
import { ToolBarComponent } from "../tool-bar/tool-bar.component";
import { SearchBoxComponent } from "../search-box/search-box.component";
import { PasswordComponent } from "../list/password/password.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    SideBarLeftComponent,
    ToolBarComponent,
    SearchBoxComponent,
    PasswordComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
