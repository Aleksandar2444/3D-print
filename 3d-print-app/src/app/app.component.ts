import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { IpService } from './services/ip.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = '3d-print-app';
  selectedLanguage: string = 'en';

  constructor(private ipService: IpService, private translate: TranslateService) { }

  ngOnInit() {
    // First, get the IP address
    this.ipService.getIpAddress().subscribe({
      next: (res: any) => {
        const ip = res.ip;
        // Use the IP to get geolocation data
        this.ipService.getGeolocation(ip).subscribe({
          next: (location: any) => {
            const countryCode = location.country_code
            this.setLanguageBasedOnCountry(countryCode);
          },
          error: (error) => {
            console.error('Geolocation error:', error);
            this.setLanguageBasedOnCountry('en'); // Fallback to English
          }
        });
      },
      error: (error) => {
        console.error('IP address error:', error);
        this.setLanguageBasedOnCountry('en'); // Fallback to English
      }
    });
  }

  setLanguageBasedOnCountry(countryCode: string) {
    if (countryCode === 'MK') {
      this.translate.use('mk');
      this.selectedLanguage = 'mk';
    } else {
      this.translate.use('en');
      this.selectedLanguage = 'en';
    }
  }
}
