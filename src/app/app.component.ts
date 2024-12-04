import { Component,ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BiographieComponent } from './biographie/biographie.component';
import { HoveredImageComponent } from './hovered-image/hovered-image.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { ProjectsComponent } from './projects/projects.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationBarComponent,BiographieComponent,HobbiesComponent,ImagesSliderComponent,ProjectsComponent,StudiesComponent,ExperienceComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Portfolio';
  scrollToId(Id:string):void{
    const href = document.getElementById(Id);
    if (href){
      href.scrollIntoView({behavior:'smooth',block:"start"});
    }

  }
}
