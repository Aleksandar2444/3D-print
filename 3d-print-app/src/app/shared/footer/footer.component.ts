import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public date = new Date().getFullYear();

  constructor(
    private readonly router: Router
  ) { }

  naviagteToHome() {
    this.router.navigate(['/home'], { queryParamsHandling: 'merge' });
  }

  naviagteToAbout() {
    this.router.navigate(['/about'], { queryParamsHandling: 'merge' });
  }

  naviagteToMaterials() {
    this.router.navigate(['/materials'], { queryParamsHandling: 'merge' });
  }

  naviagteToDelivery() {
    this.router.navigate(['/delivery'], { queryParamsHandling: 'merge' });
  }

  naviagteToContact() {
    this.router.navigate(['/contact'], { queryParamsHandling: 'merge' });
  }
}
