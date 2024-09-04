// src/app/services/map.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private apiLoaded = false;

  loadGoogleMaps(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.apiLoaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.apiLoaded = true;
        resolve();
      };
      script.onerror = (error: any) => {
        reject(error);
      };

      document.head.appendChild(script);
    });
  }
}
