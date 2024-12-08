import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent {
  projects = [
    {
      Project: 'WebSockets Application',
      Description:
      'This project features a Python WebSocket server integrated with a Machine Learning model to detect humans and cars from live camera feeds or video files. Upon detection, it sends real-time notifications with screenshots to the client interface. Additional functionalities include broadcasting messages, handling image data, and processing object detection results seamlessly.',
      Technologies: 'Python, Yolo, OpenCV, Matplotlib, WebSocket, Javascript',
      Image:'../../assets/Prediction1.png',
      Link: 'https://github.com/diaeddine1/WebSocket-Server.git'
    },
    {
      Project: 'Pharma Plants Application',
      Description:'A Flutter application that enables users to search for medicinal herbs and plants, explore their health benefits, and discover effective combinations with other herbs for enhanced wellness. The app features an intuitive interface, a detailed herb database, and personalized suggestions for holistic health solutions.',
      Technologies: 'Flutter, Firebase, Image Picker',
      Image:'../../assets/dofus.png',
      Link: 'https://github.com/diaeddine1/Plants-Project-Flutter'
    },
    {
      Project: 'Trip Advisor Application',
      Description:'This Project allows users to search for restaurants in Casablanca scraped from TripAdvisor, mark them as favorites, view their locations on an interactive map, and leave reviews. The platform offers an easy-to-navigate interface for discovering and engaging with local dining options.',
      Technologies: 'Spring Boot, React, Spring Security, Scrapy, Tailwind CSS, Google Maps API',
      Image:'../../assets/League.jpg',
      Link: 'https://github.com/diaeddine1/Gestion_Restaurant'
    }
  ];

  selectedProject = this.projects[0];

  selectProject(index: number): void {
    this.selectedProject = this.projects[index];
  }
}
