import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor(public languageService: LanguageService) {}

  Experiences = [
    {
      language: 'French',
      exp: [
        { year: "MARS - JUILLET 2024", title: ' Stage de Fin d\'étude', description: 'Création d\'une plateforme d\'automatisation des décisions reposant sur un modèle de machine learning, destinée à remplacer IBM ODM Decision Center, et à être hébergée sur AWS Cloud.' },
        { year: "JUILLET - SEPTEMBRE 2023", title: 'Stage d\'été en Développement Web', description: ' Conception et développement d\'une plateforme de cryptomonnaie permettant aux utilisateurs d\'accéder en temps réel aux données sur les cryptomonnaies, leur offrant la possibilité d\'acheter, d\'échanger et de vendre des actifs numériques avec d\'autres utilisateurs.' },
        { year: "AOUT - SEPTEMBRE 2022", title: 'Stage d\'été en Développement Web', description: 'Conception et développement d\'un site web dynamique facilitant l\'enregistrement des entreprises et proposant des services publicitaires ainsi que des informations aux utilisateurs.' },
      ]
    },
    {
      language: 'English',
      exp: [
        { year: "MARCH - JULY 2024", title: 'End Of Studies Internship', description: 'Creation of a decision automation platform based on a machine learning model, intended to replace IBM ODM Decision Center, and to be hosted on AWS Cloud.' },
        { year: "JULY - SEPTEMBER 2023", title: 'Summer Internship in Web Development', description: ' Design and development of a robust cryptocurrency platform that empowers users with real-time access to cryptocurrency data, enabling them to buy, exchange, and sell digital assets with other users.' },
        { year: " AUGUST - SEPTEMBER 2022", title: 'Intégration à l\'École Marocaine des Sciences de l\'Ingénieur', description: ' Design and creation of a dynamic website facilitating company registration and advertising services and information to users.' },
       
      ]
    }
  ];

  get experience() {
    return this.Experiences.find(
      (experience) => experience.language === this.languageService.selectedLanguage
    )?.exp || [];
  }

}
