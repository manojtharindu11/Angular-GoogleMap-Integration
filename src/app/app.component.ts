import { Component, OnInit } from '@angular/core';
import { MapService } from './service/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  apiLoaded = false;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService
      .loadGoogleMaps()
      .then(() => {
        this.apiLoaded = true;
        console.log('Google Maps API loaded successfully');
        // Any additional map initialization code goes here
      })
      .catch((error) => {
        console.error('Error loading Google Maps API', error);
      });
  }
}
