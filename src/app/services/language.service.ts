import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This ensures the service is available globally.
})
export class LanguageService {
  selectedLanguage: 'English' | 'French' = 'English'; // Default language

  toggleLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 'English' ? 'French' : 'English';
  }
}
