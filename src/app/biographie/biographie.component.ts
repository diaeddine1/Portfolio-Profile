import { Component } from '@angular/core';
import { HoveredImageComponent } from '../hovered-image/hovered-image.component';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'biographie',
  standalone: true,
  imports: [HoveredImageComponent],
  templateUrl: './biographie.component.html',
  styleUrl: './biographie.component.css'
})
export class BiographieComponent {
  constructor(public languageService: LanguageService){}

  Biographie = {
    English: {
      intro: `Hi, My Name is Dia Eddine Aberane, and I am a passionate Software Engineer 
              with a strong background in developing scalable and efficient applications.`,
      specialization: `I specialize in full-stack development, with expertise in technologies related to JAVA & JAVASCRIPT.`,
      degree: `I also hold a Master's degree in Artificial Intelligence, where I gained 
              deep insights into advanced machine/deep learning techniques.`,
    },
    French: {
      intro: `Salut, je m'appelle Dia Eddine Aberane, et je suis un ingénieur logiciel passionné 
              avec une solide expérience dans le développement d'applications évolutives et efficaces.`,
      specialization: `Je me spécialise dans le développement full-stack, avec une expertise dans les technologies liées à JAVA et JAVASCRIPT.`,
      degree: `Je suis également titulaire d'un Master en Intelligence Artificielle, où j'ai acquis 
              une compréhension approfondie des techniques avancées du machine/deep learning.`,
    },
  };

  get displayedBio() {
    return this.Biographie[this.languageService.selectedLanguage];
  }

}
