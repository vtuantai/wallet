import { Component } from '@angular/core';
import { NavMainPageComponent } from '../navbar/nav-main-page/nav-main-page.component';
import { BodyComponent } from "../body/body.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavMainPageComponent, 
    BodyComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
