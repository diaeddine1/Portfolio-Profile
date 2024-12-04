import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'studies',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent], // Include CommonModule
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent {
  constructor(public languageService: LanguageService) {}

  milestones = [
    {
      language: 'English',
      milestones: [
        {
          year: 'SEP 2024',
          title:
            'Obtaining the Master AI2 Degree in Applied Artificial Intelligence',
          description:
            'The culmination of my academic journey, ready to turn knowledge into tangible impact.',
        },
        {
          year: 'OCT 2023',
          title: 'Master AI2 in Applied Artificial Intelligence',
          description:
            'A key step in my specialization, exploring the infinite possibilities of AI to solve real-world problems.',
        },
        {
          year: 'OCT 2021 - JUL 2024',
          title:
            'Engineering Cycle in Computer Science and Networks, MIAGE option',
          description:
            'I deepened my knowledge in computer science while preparing to tackle industrial challenges.',
        },
        {
          year: 'OCT 2019',
          title: 'Integration into the Moroccan School of Engineering Sciences',
          description:
            'An immersion in engineering where I gained a solid foundation in technology and innovation.',
        },
        {
          year: 'SEP 2018 - JUL 2019',
          title: 'Baccalauréat Libre Science-PHYSIQUE',
          description:
            'A year of challenges and determination, marking my resilience and my will to progress.',
        },
        {
          year: 'SEP 2017 - JUL 2018',
          title: 'Baccalauréat Science-Mathematics (SM-B)',
          description:
            'The starting point of my academic journey, where I discovered my passion for solving complex problems.',
        },
      ],
    },
    {
      language: 'French',
      milestones: [
        {
          year: 'SEP 2024',
          title:
            'Obtention du diplôme de Master AI2 en Intelligence Artificielle Appliquée',
          description:
            "L'aboutissement de mon parcours académique, prêt à transformer les connaissances en impact concret.",
        },
        {
          year: 'OCT 2023',
          title: 'Master AI2 en Intelligence Artificielle Appliquée',
          description:
            "Une étape clé dans ma spécialisation, explorant les possibilités infinies de l'IA pour résoudre des problèmes du monde réel.",
        },
        {
          year: 'OCT 2021 - JUI 2024',
          title: 'Cycle d’ingénieur en informatique et réseaux, option MIAGE',
          description:
            "J'ai approfondi mes connaissances en informatique, tout en me préparant à relever des défis industriels.",
        },
        {
          year: 'OCT 2019',
          title: "Intégration à l'École Marocaine des Sciences de l'Ingénieur",
          description:
            "Une immersion dans l'ingénierie où j'ai acquis des bases solides en technologie et en innovation.",
        },
        {
          year: 'SEP 2018 - JUI 2019',
          title: 'Baccalauréat Libre Science-PHYSIQUE',
          description:
            'Une année de défis et de détermination, marquant ma résilience et ma volonté de progresser.',
        },
        {
          year: 'SEP 2017 - JUI 2018',
          title: 'Baccalauréat Science-Mathematics (SM-B)',
          description:
            "Le point de départ de mon parcours académique, où j'ai découvert ma passion pour résoudre des problèmes complexes.",
        },
      ],
    },
  ];

  get displayedMilestones() {
    return (
      this.milestones.find(
        (milestone) =>
          milestone.language === this.languageService.selectedLanguage
      )?.milestones || []
    );
  }
}
