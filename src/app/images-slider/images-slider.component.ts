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
      

    },
    // {
    //   "name":"Tbate 2",
    //   "image":"assets/volume8.jpg",
    

    // },
    {
      "name":"Tbate 3",
      "image":"assets/volume9.jpg",
      

    },
   
    {
      "name":"Omniscient Reader's Viewpoint",
      "image":"assets/orv3.jpg",


    },
    {
      "name":"Omniscient Reader's Viewpoint",
      "image":"assets/ORV.jpeg",
   

    },
    {
      "name":"Omniscient Reader's Viewpoint",
      "image":"assets/orv2.jpg",
    

    },
    {
      "name":"Lord of Mysteries",
      "image":"assets/LOTM.jpg",
      
    },
    {
      "name":"Lord of Mysteries",
      "image":"assets/LOTM2 (1).jpg",
      
    },
    {
      "name":"Lord of Mysteries",
      "image":"assets/LOM (1).jpg",
      
    },
    
  ]
  

}
