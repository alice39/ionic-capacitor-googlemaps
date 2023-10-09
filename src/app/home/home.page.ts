import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

import { GoogleMap } from '@capacitor/google-maps';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, NgIf],
})
export class HomePage {
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap?: GoogleMap;

  created: boolean = false;

  constructor() { }

  async createMap() {
    if (this.created) {
      return;
    }

    this.created = true;

    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: 'API_KEY_HERE',
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}
