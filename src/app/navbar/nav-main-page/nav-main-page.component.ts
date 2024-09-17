import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageComponent } from "../../language/language.component";
import { NotificationComponent } from "../../notification/notification.component";
import { PersonalInfoComponent } from "../../list/personal-info/personal-info.component";
import { ProfileComponent } from "../../profile/profile.component";

@Component({
  selector: 'app-nav-main-page',
  standalone: true,
  imports: [
    RouterModule,
    LanguageComponent,
    NotificationComponent,
    ProfileComponent
],
  templateUrl: './nav-main-page.component.html',
  styleUrl: './nav-main-page.component.css'
})
export class NavMainPageComponent {

}
