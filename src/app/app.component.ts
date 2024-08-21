import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BiographieComponent } from './biographie/biographie.component';
import { HoveredImageComponent } from './hovered-image/hovered-image.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationBarComponent,BiographieComponent,HobbiesComponent,ImagesSliderComponent],
  styleUrl: './app.component.css',
  template:`
 
    <navigation-bar></navigation-bar>
    <biographie></biographie>
   
    <images-slider><images-slider/>
  `,
})
export class AppComponent {
  title = 'Portfolio';
}
