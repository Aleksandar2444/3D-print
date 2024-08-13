import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    TranslateModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() appComponent!: AppComponent;

  currentLang: string;
  selectedLanguage: string = 'en';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private translate: TranslateService,
  ) {
    this.translate.addLangs(['en', 'mk']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.currentLang = browserLang && (browserLang.match(/en|mk/) ? browserLang : 'en') || 'en';
    this.translate.use(this.currentLang);
    this.currentLang = 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }

  switchLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.translate.use(lang);
  }

  onLanguageChange(event: Event): void {
    event.preventDefault();
    const selectedLang = (event.target as HTMLSelectElement).value;
    this.translate.use(selectedLang);
    this.appComponent.selectedLanguage = selectedLang;
  }
}
