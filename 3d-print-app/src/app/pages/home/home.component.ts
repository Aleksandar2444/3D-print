import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { MaterialsComponent } from "../materials/materials.component";
import { DeliveryComponent } from "../delivery/delivery.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    TranslateModule,
    AboutComponent,
    MaterialsComponent,
    DeliveryComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private readonly router: Router
  ) { }

  naviagteToContact() {
    this.router.navigate(['/contact'], { queryParamsHandling: 'merge' });
  }

  naviagteToAbout() {
    this.router.navigate(['/about'], { queryParamsHandling: 'merge' });
  }
}
