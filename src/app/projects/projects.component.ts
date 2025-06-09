import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgFor],
})
export class ProjectsComponent {
  currentLanguage! :string; // Save the initial language
  constructor(public languageService: LanguageService) {
    console.log(languageService);
  }

  projects = [
    {
      bigTitle: 'Some of My Projects',
      language: 'English',
      Projects: [
        {
          Project: 'WebSockets Application',
          Description:
            'This project features a Python WebSocket server integrated with a Machine Learning model to detect humans and cars from live camera feeds or video files. Upon detection, it sends real-time notifications with screenshots to the client interface. Additional functionalities include broadcasting messages, handling image data, and processing object detection results seamlessly.',
          Technologies:
            'Python, Yolo, OpenCV, Matplotlib, WebSocket, Javascript',
          Link: 'https://github.com/diaeddine1/WebSocket-Server.git',
          Image: '../../assets/Prediction5.png',
        },
        {
          Project: 'Pharma Plants Application',
          language: 'English',
          Description:
            'A Flutter application that enables users to search for medicinal herbs and plants, explore their health benefits, and discover effective combinations with other herbs for enhanced wellness. The app features an intuitive interface, a detailed herb database, and personalized suggestions for holistic health solutions.',
          Technologies: 'Flutter, Firebase, Image Picker',
          Link: 'https://github.com/diaeddine1/Plants-Project-Flutter',
          Image: '../../assets/Iplant.png', // Add Image property
        },
        {
          Project: 'Trip Advisor Application',
          language: 'English',
          Description:
            'This project allows users to search for restaurants in Casablanca scraped from TripAdvisor, mark them as favorites, view their locations on an interactive map, and leave reviews. The platform offers an easy-to-navigate interface for discovering and engaging with local dining options.',
          Technologies:
            'Spring Boot, React, Spring Security, Scrapy, Tailwind CSS, Google Maps API',
          Link: 'https://github.com/diaeddine1/Gestion_Restaurant',
          Image: '../../assets/Prediction4.png', // Add Image property
        },
      ],
    },

    {
      bigTitle: 'Quelques Projets',
      language: 'French',
      Projects: [
        {
          Project: 'Application WebSockets',
          Description:
            "Ce projet présente un serveur WebSocket Python intégré à un modèle de Machine Learning pour détecter les humains et les voitures à partir de flux de caméra en direct ou de fichiers vidéo. Lors de la détection, il envoie des notifications en temps réel avec des captures d'écran à l'interface client. Les fonctionnalités supplémentaires incluent la diffusion de messages, la gestion des données d'image et le traitement des résultats de détection d'objets de manière fluide.",
          Technologies:
            'Python, Yolo, OpenCV, Matplotlib, WebSocket, Javascript',
          Link: 'https://github.com/diaeddine1/WebSocket-Server.git',
          Image: '../../assets/Prediction4.png', // Add Image property
        },
        {
          language: 'French',
          Project: 'Application Pharma Plants',

          Description:
            "Une application Flutter qui permet aux utilisateurs de rechercher des herbes médicinales et des plantes, d'explorer leurs bienfaits pour la santé et de découvrir des combinaisons efficaces avec d'autres herbes pour améliorer le bien-être. L'application offre une interface intuitive, une base de données détaillée d'herbes et des suggestions personnalisées pour des solutions de santé holistiques.",
          Technologies: 'Flutter, Firebase, Image Picker',
          Link: 'https://github.com/diaeddine1/Plants-Project-Flutter',
          Image: '../../assets/Prediction4.png', // Add Image property
        },
        {
          language: 'French',
          Project: 'Application Trip Advisor',

          Description:
            'Ce projet permet aux utilisateurs de rechercher des restaurants à Casablanca extraits de TripAdvisor, de les marquer comme favoris, de voir leurs emplacements sur une carte interactive et de laisser des avis. La plateforme offre une interface facile à naviguer pour découvrir et interagir avec les options de restauration locales.',
          Technologies:
            'Spring Boot, React, Spring Security, Scrapy, Tailwind CSS, Google Maps API',
          Link: 'https://github.com/diaeddine1/Gestion_Restaurant',
          Image: '../../assets/Prediction4.png', // Add Image property
        },
      ],
    },
  ];

  selectedProject = this.projects[0].Projects[0];
 

  get filteredProjects() {
    return this.projects.find(
      (project) => project.language === this.languageService.selectedLanguage
    );
  }

  selectProject(index: number): void {
    const languageSpecificProjects = this.filteredProjects?.Projects;
    if (languageSpecificProjects) {
      this.selectedProject = languageSpecificProjects[index];
    }
  }

  ngOnInit(): void {
    // Initialize the selected project
    this.currentLanguage = this.languageService.selectedLanguage;
    const languageSpecificProjects = this.filteredProjects?.Projects;
    if (languageSpecificProjects) {
      this.selectedProject = languageSpecificProjects[0];
    }
  }

  ngDoCheck(): void {
    // React to changes in the language
    if (this.currentLanguage !== this.languageService.selectedLanguage) {
      this.currentLanguage = this.languageService.selectedLanguage;

      const languageSpecificProjects = this.filteredProjects?.Projects;

      if (languageSpecificProjects) {
        // Attempt to match current project; fallback to the first project if no match
        const matchedProject = languageSpecificProjects.find(
          (project) => project.Project === this.selectedProject?.Project
        );
        this.selectedProject = matchedProject || languageSpecificProjects[0];
      }
    }
  }
}