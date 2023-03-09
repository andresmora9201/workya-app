import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private geolocationService: GeolocationService,
    private alertController: AlertController) { }

    latitude;
    longitude;

  ngOnInit(): void {
  }

  async getCurrentPosition() {
    await this.geolocationService.getCurrentPosition().then((res) => {
      this.latitude = res.coords.latitude;
      this.longitude = res.coords.longitude;
    });
    this.presentAlert();
  }

  async presentAlert() {
    console.log('this.coordinates',this.latitude)
    const alert = await this.alertController.create({
      header: 'Hola',
      subHeader: 'Esta es tu posición actual!',
      message: JSON.stringify({latitude: this.latitude, longitude: this.longitude}),
      buttons: ['OK'],
    });

    await alert.present();
  }


}
