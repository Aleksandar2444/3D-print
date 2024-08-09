import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  getIpAddress() {
    return this.http.get(environment.ip.ipifyUrl);
  }

  getGeolocation(ip: string) {
    return this.http.get(`http://api.ipstack.com/${ip}?access_key=${environment.ip.geoLocatorApiKey}`);
  }
}
