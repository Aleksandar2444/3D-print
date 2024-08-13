import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
