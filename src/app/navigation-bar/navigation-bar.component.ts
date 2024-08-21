import { Component } from '@angular/core';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
@Component({
  selector: 'navigation-bar',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
