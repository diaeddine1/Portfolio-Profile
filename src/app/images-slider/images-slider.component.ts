import { Component, HostListener } from '@angular/core';
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
      "name":"Mythologie Greece",
      "image":"assets/Greece.png"
    },
    {
      "name":"Mythologie Egypyt",
      "image":"assets/Egypt.jpg"
    },
    {
      "name":"Mythologie Christian",
      "image":"assets/Christians.jpg"
    },
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

  numVisible: number = 3; // Default value for larger screens

  // Adjust numVisible based on screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 768) {
      this.numVisible = 2;  // Set numVisible to 2 for smaller screens
    } else {
      this.numVisible = 3;  // Set numVisible to 3 for larger screens
    }
  }

  // Initialize the correct numVisible value on component load
  ngOnInit() {
    if (window.innerWidth < 768) {
      this.numVisible = 2;
    } else {
      this.numVisible = 3;
    }
  }
  

}
