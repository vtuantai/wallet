import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  selectedLanguage: string = 'vn'; // Set default language to "EN"

  switchLanguage(language: string) {
    this.selectedLanguage = language; // Update selected language
    //Add additional logic here, like calling a language service or refreshing content
  }
}