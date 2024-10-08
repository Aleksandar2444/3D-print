import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentLang: string;
  selectedLanguage: string = 'en';
  isMenuOpen = false;

  constructor(
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

  ngOnInit(): void { }

  // switchLanguage(lang: string): void {
  //   this.selectedLanguage = lang;
  //   this.translate.use(lang);
  // }

  // onLanguageChange(event: Event): void {
  //   event.preventDefault();
  //   const selectedLang = (event.target as HTMLSelectElement).value;
  //   this.translate.use(selectedLang);
  //   // this.appComponent.selectedLanguage = selectedLang;
  // }

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  toggleMenu() {
    const mobileNav = document.querySelector('.navbar__mobile-nav');
    mobileNav!.classList.toggle('menu-open');
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }
}
