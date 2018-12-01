import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;

  private map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.showMap();
  }

  private showMap() {
    const center = { lat: 21.109350, lng: -101.625594 };
    const options = {
      center,
      zoom: 15,
      disableDefaultUI: true,
      styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.icon',
          stylers: [{ visibility: 'off' }]
        }
      ]
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
