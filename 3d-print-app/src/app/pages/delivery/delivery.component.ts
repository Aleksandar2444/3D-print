import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule
  ],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {

}
