import { Component } from '@angular/core';
import { ImagesSliderComponent } from '../images-slider/images-slider.component';
import { GamesSliderComponent } from '../games-slider/games-slider.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [ImagesSliderComponent,GamesSliderComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {

  constructor(public languageService: LanguageService) {}

  Hobbies=[
    {
      bigTitle:"My Hobbies are!",
      language:'English',
      title1:"Reading Mythologie, Light Novels And Manhuas",
      manhuas:" I enjoy reading light novels like The Beginning After the End and Lord of the Mysteries, exploring manhuas with vivid artwork, and delving into mythology, which offers timeless stories and cultural insights. These hobbies have deepened my appreciation for creative storytelling, diverse cultures, and visual art, inspiring my imagination and analytical thinking.",
      title2:"Playing Volley-Ball And video games",
      games:"I enjoy playing volleyball for its mix of teamwork, strategy, and physical challenge, fostering camaraderie and quick thinking on the court. I’m also passionate about video games, from story-driven RPGs to competitive multiplayer experiences, which spark creativity, test strategy, and provide a fun way to connect with friends."
    },
    {
      bigTitle:"Mes Loisirs sont!",
      language:'French',
      title1:"Lire de la mythologie, light novels et des manhuas",
      manhuas:'J\'aime lire des light novels comme The Beginning After the End et Lord of the Mysteries, explorer des manhuas aux illustrations éclatantes, et plonger dans la mythologie, qui offre des récits intemporels et des perspectives culturelles. Ces loisirs ont renforcé mon appréciation pour la narration créative, les cultures diverses et l\'art visuel, stimulant mon imagination et ma réflexion analytique.',
      title2:"Jouer au volley-ball et aux jeux vidéo",
      games: "J'aime jouer au volley-ball pour son mélange de travail d'équipe, de stratégie et de défi physique, favorisant la camaraderie et la réflexion rapide sur le terrain. Je suis également passionné par les jeux vidéo, qu'il s'agisse de RPG narratifs ou de jeux multijoueurs compétitifs, qui stimulent la créativité, mettent à l'épreuve la stratégie et permettent de se connecter avec des amis."

    }
  ]

  get hobbies(){
    return this.Hobbies.find((hobby)=>hobby.language===this.languageService.selectedLanguage)
  }

}
