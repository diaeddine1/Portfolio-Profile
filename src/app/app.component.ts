import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BiographieComponent } from './biographie/biographie.component';
import { HoveredImageComponent } from './hovered-image/hovered-image.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';
import { SocialsComponent } from './socials/socials.component';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { LaptopComponent } from './laptop/laptop.component';
import { MailComponent } from './mail/mail.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    NavigationBarComponent,
    BiographieComponent,
    HobbiesComponent,
    ImagesSliderComponent,
    ProjectsComponent,
    StudiesComponent,
    ExperienceComponent,
    SocialsComponent,
    LaptopComponent,
    MailComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})


export class AppComponent  {
 
  constructor() { }

  scrollTo(Id: string): void {
  console.log("scrolling to", Id);
  const element = document.getElementById(Id);
  console.log("clicked on", element);
  
  if (element) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start = 0;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const ease = this.easeInOutCubic(progressPercentage);
      
      window.scrollTo(0, startPosition + (distance * ease));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }
}

private easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
}