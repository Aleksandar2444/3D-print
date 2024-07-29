import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    FooterComponent,
  ],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent {

}
