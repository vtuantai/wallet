import { Component } from '@angular/core';
import { SideBarLeftComponent } from "../side-bar-left/side-bar-left.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    SideBarLeftComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
