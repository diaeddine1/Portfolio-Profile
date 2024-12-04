import { Component } from '@angular/core';
import { ImagesSliderComponent } from '../images-slider/images-slider.component';
import { GamesSliderComponent } from '../games-slider/games-slider.component';

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [ImagesSliderComponent,GamesSliderComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {

}
