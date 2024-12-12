import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  HostListener,
} from '@angular/core';
import { HoveredImageComponent } from '../hovered-image/hovered-image.component';
import { LanguageService } from '../services/language.service';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';

@Component({
  selector: 'biographie',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.css'], // Corrected property
})
export class BiographieComponent implements OnInit {
  @Output() scrollToId = new EventEmitter<string>();
  
  navigateTo(id: string): void {
    this.scrollToId.emit(id);
  }
  
  constructor(public languageService: LanguageService) {}
  Navbar = {
    English: {
      nb1: 'About Me',
      nb2: 'Milestones',
      nb3: 'Experience',
      nb4: 'Skills',
      nb5: 'Projects',
      nb6: 'Hobbies',
      nb7: 'Contact Me',
    },
    French: {
      nb1: 'Introduction',
      nb2: 'Parcours',
      nb3: 'Expérience',
      nb4: 'Compétence',
      nb5: 'Projets',
      nb6: 'Loisirs',
      nb7: 'Contactez-moi',
    },
  };
  get navbar() {
    return this.Navbar[this.languageService.selectedLanguage];
  }

  Biographie = {
    English: {
      welcome: 'Hi,',
      name: `I\'m Dia Eddine Aberane,`,
      intro: `I am a passionate Software Engineer 
              with a strong background in developing scalable and efficient applications.`,
      specialization: `I specialize in full-stack development, with expertise in technologies related to JAVA & JAVASCRIPT.`,
      degree: `I also hold a Master's degree in Artificial Intelligence, where I gained 
              deep insights into advanced machine/deep learning techniques.`,
    },
    French: {
      welcome: 'Salut,',
      name: 'Je Suis Dia Eddine Aberane,',
      intro: `Je suis un ingénieur logiciel passionné 
              avec une solide expérience dans le développement d'applications évolutives et efficaces.`,
      specialization: `Je me spécialise dans le développement full-stack, avec une expertise dans les technologies liées à JAVA et JAVASCRIPT.`,
      degree: `Je suis également titulaire d'un Master en Intelligence Artificielle, où j'ai acquis 
              une compréhension approfondie des techniques avancées du machine/deep learning.`,
    },
  };

  get displayedBio() {
    return this.Biographie[this.languageService.selectedLanguage];
  }

  

  words = ['SOFTWARE DEVELOPER.', 'DATA ANALYST.', 'DATA ENGINEER.'];
  currentWordIndex = 0;
  typingInterval: any;
  displayedText = '';
  startTypingEffect(): void {
    const typing = () => {
      const word = this.words[this.currentWordIndex].split('');
      let wordIndex = 0;

      const typeCharacter = () => {
        if (wordIndex < word.length) {
          this.displayedText += word[wordIndex++];
          setTimeout(typeCharacter, 500);
        } else {
          setTimeout(this.startDeletingEffect.bind(this), 1000);
        }
      };

      typeCharacter();
    };

    typing();
  }

  startDeletingEffect(): void {
    const deleting = () => {
      if (this.displayedText.length > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        setTimeout(deleting, 200);
      } else {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.startTypingEffect();
      }
    };

    deleting();
  }



  navItemsVisible = false;
  isBgNone = false;
  toggleNavbar(): void {
    this.navItemsVisible = !this.navItemsVisible;
    if(this.navItemsVisible==true){
      this.isBgNone=true
    }else{
      this.isBgNone=false
    }
    
  }
  @HostListener('window:resize', ['$event']) onResize(event: Event): void {
    let element = document.querySelector('#nav-bar') as HTMLElement;
    let biographie = document.querySelector('#bio') as HTMLElement;
    if (window.scrollY > biographie.offsetHeight) {
      element.classList.remove('navbar-scrolled');
      this.isBgNone=true
    } else {
      
      this.isBgNone=false
    }
    
    this.checkNavbarVisibility();
  }

  checkNavbarVisibility(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth > 860) {
      this.navItemsVisible = false; 
      
    }
    // if(this.navItemsVisible==true){
    //   this.isBgNone = true;
    // }
    // else{
    //   this.isBgNone = false;
    // }
  }

  ngOnInit(): void {
    this.startTypingEffect();
    this.checkNavbarVisibility();
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('#nav-bar') as HTMLElement;
    let biographie = document.querySelector('#bio') as HTMLElement;
    if (window.scrollY > biographie.offsetHeight) {
      element.classList.add('navbar-scrolled');
    } else {
      element.classList.remove('navbar-scrolled');
    }
  }
}
