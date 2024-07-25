import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
