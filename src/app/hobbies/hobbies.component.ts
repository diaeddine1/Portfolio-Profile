import { Component } from '@angular/core';
import { ImagesSliderComponent } from '../images-slider/images-slider.component';

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [ImagesSliderComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {

}
