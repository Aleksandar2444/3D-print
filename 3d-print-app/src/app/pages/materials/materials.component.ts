import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.scss'
})
export class MaterialsComponent {

}
