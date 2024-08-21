import { Component } from '@angular/core';

@Component({
  selector: 'hovered-image',
  standalone: true,
  imports: [],
  templateUrl: './hovered-image.component.html',
  styleUrl: './hovered-image.component.css'
})
export class HoveredImageComponent {
  defaultImage = "assets/selfie2.jpg"
  hoverImage = "https://avatars.githubusercontent.com/u/120606227?s=400&u=4e01a1dbe8c59c5dc473c4f3c56f489c6924ca8f&v=4"
  isHovered = false;
}
