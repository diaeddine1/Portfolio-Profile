import { Component, EventEmitter, Output } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'language-toggle',
  standalone: true,
  imports: [],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.css'
})
export class LanguageToggleComponent {
  constructor(public languageService: LanguageService) {}

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
