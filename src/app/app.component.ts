import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
 
  scrollToId(Id: string): void {
    const element = document.getElementById(Id);
  
    if (element) {
      if (Id === "Milestones") {
        console.log("milestones");
        const yOffset = 0; // Offset by 30 pixels for Milestones
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        const yOffset = -80; // Offset by -80 pixels for other elements
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
}
