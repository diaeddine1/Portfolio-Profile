import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
   constructor(public languageService: LanguageService) {}

   skills = [{
    bigTitle : "Some of My Skills are",
    language : "English",
    description : "As a Junior Developer, I possess an impressive arsenal of skills in my toolkit. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces by writing clean and optimized code, utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications. In addition to web development, I have a strong foundation in Machine Learning and Computer Vision. I am passionate about leveraging these technologies to develop innovative solutions, such as automating processes, analyzing images, and extracting meaningful insights from data."
   },
   {
    bigTitle : "Parmi Mes Compétences",
    language : "French",
    description :"En tant que Développeur Junior, je possède un arsenal impressionnant de compétences dans mon ensemble d'outils. J'excelle dans la conception et la maintenance de sites web réactifs offrant une expérience utilisateur fluide. Mon expertise réside dans la création d'interfaces dynamiques et engageantes en écrivant un code propre et optimisé, tout en utilisant des outils et techniques de développement à la pointe de la technologie. Je suis également un joueur d'équipe qui s'épanouit en collaborant avec des équipes pluridisciplinaires pour produire des applications web remarquables. En plus du développement web, je dispose d\'une solide expertise en Apprentissage Automatique et Computer Vision. Je suis passionné par l\'exploitation de ces technologies pour développer des solutions innovantes, telles que l\'automatisation de processus, l\'analyse d\'images et l\'extraction d\'informations pertinentes à partir des données."
   }
  
  ]

  get Skills(){
    return this.skills.find(
      (skill)=>skill.language === this.languageService.selectedLanguage);}

  

}
