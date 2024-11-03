import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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

  logoSrc: string = 'assets/images/1.jpg';
  logoFilter: string = '';
  hamburgerColor: string = '#42210b';

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const footer = document.getElementById('footer');
    const logo = document.querySelector('.navbar__logo img') as HTMLElement;
    const hamburger = document.querySelector('.navbar__hamburger') as HTMLElement;

    if (footer && logo && hamburger) {
      const footerTop = footer.getBoundingClientRect().top + scrollY;
      const logoBottom = logo.getBoundingClientRect().bottom + scrollY;
      const hamburgerBottom = hamburger.getBoundingClientRect().bottom + scrollY;

      if (footer && logo) {
        const footerTop = footer.getBoundingClientRect().top + scrollY;
        const logoBottom = logo.getBoundingClientRect().bottom + scrollY;

        // Change logo filter based on its position relative to the footer
        if (logoBottom >= footerTop) {
          // Logo has reached the footer, revert to original color
          this.logoFilter = '';
        } else if (scrollY > 0) {
          // Scrolling, apply the filter color
          this.logoFilter = 'sepia(1) saturate(5000%) hue-rotate(20deg) brightness(0.5)';
        } else {
          // At the very top of the page, no filter
          this.logoFilter = '';
        }
      }

      // Change hamburger color based on its position relative to the footer
      if (hamburgerBottom >= footerTop) {
        this.hamburgerColor = '#f7931e'; // New color when hamburger reaches the footer
      } else {
        this.hamburgerColor = '#42210b'; // Default color otherwise
      }
    }
  }

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
