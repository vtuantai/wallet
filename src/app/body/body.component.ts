import { Component } from '@angular/core';
import { SideBarLeftComponent } from "../side-bar-left/side-bar-left.component";
import { ToolBarComponent } from "../tool-bar/tool-bar.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    SideBarLeftComponent,
    ToolBarComponent
],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
