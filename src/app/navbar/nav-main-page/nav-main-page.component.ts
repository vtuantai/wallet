import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageComponent } from "../../language/language.component";

@Component({
  selector: 'app-nav-main-page',
  standalone: true,
  imports: [RouterModule, LanguageComponent],
  templateUrl: './nav-main-page.component.html',
  styleUrl: './nav-main-page.component.css'
})
export class NavMainPageComponent {

}
