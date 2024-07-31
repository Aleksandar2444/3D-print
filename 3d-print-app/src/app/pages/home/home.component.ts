import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
