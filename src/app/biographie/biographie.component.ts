import { Component } from '@angular/core';
import { HoveredImageComponent } from '../hovered-image/hovered-image.component';
@Component({
  selector: 'biographie',
  standalone: true,
  imports: [HoveredImageComponent],
  templateUrl: './biographie.component.html',
  styleUrl: './biographie.component.css'
})
export class BiographieComponent {

}
