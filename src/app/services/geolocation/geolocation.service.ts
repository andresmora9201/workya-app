import { Injectable, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates);
    return coordinates;
  };
}


