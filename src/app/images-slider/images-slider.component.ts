import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'images-slider',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './images-slider.component.html',
  styleUrl: './images-slider.component.css'
})
export class ImagesSliderComponent {

  hobby=[
    
    {
      "name":"The Beginning After The End",
      "image":"assets/tbate.jpg",
      "price":"19.99"

    },
    {
      "name":"Tbate 2",
      "image":"assets/volume8.jpg",
      "price":"19.99"

    },
    {
      "name":"Tbate 3",
      "image":"assets/volume9.jpg",
      "price":"19.99"

    },
    {
      "name":"ORV 1",
      "image":"assets/orv1.jpg",
      "price":"19.99"

    },
    {
      "name":"ORV 2",
      "image":"assets/orv3.jpg",
      "price":"19.99"

    },
    {
      "name":"ORV 3",
      "image":"assets/orv2.jpg",
      "price":"19.99"

    },
  
  ]
  

}
