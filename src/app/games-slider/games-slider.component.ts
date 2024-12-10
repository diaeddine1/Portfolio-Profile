import { Component, HostListener } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'games-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './games-slider.component.html',
  styleUrl: './games-slider.component.css',
})
export class GamesSliderComponent {
  hobby = [
    {
      name: 'Volley-Ball',
      image: 'assets/Volleyball.jpg',
    },
    {
      name: 'League',
      image: 'assets/League.jpg',
    },
    {
      name: 'Albion',
      image: 'assets/albion.jpg',
    },
    {
      name: 'Dofus',
      image: 'assets/dofus.jpg',
    },
  ];
  numVisible:number=3
  numScroll:number = 3
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth>1000){
      this.numVisible = 3
      this.numScroll = 3
    }
    
    else if (window.innerWidth < 1000 && window.innerWidth>768) {
      this.numVisible = 2;
      this.numScroll = 2
    } else {
      this.numVisible = 1;  
      this.numScroll = 1;
    }
  }

  // Initialize the correct numVisible value on component load
  ngOnInit() {
    if(window.innerWidth>1000){
      this.numVisible = 3
      this.numScroll = 3
    }
    
    else if (window.innerWidth < 1000 && window.innerWidth>768) {
      this.numVisible = 2;
      this.numScroll = 2
    } else {
      this.numVisible = 1;  
      this.numScroll = 1;
    }
  }
}
