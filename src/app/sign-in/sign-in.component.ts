import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavSignInComponent } from "../navbar/nav-sign-in/nav-sign-in.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule, NavSignInComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {}
