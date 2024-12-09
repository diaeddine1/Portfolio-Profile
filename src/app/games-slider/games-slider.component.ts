import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'games-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './games-slider.component.html',
  styleUrl: './games-slider.component.css'
})
export class GamesSliderComponent {

  hobby=[
    {
      "name":"Volley-Ball",
      "image":"assets/Volleyball.jpg",
    },
    {
      "name":"League",
      "image":"assets/League.jpg",
    },
    {
      "name":"Albion",
      "image":"assets/albion.jpg",
    },
    {
      "name":"Dofus",
      "image":"assets/skin.png",
    }
    
    
  ]

}
