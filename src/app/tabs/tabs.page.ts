import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  counterTab = 0;

  constructor(
    public alertController: AlertController
  ) {}

  count(){
    this.counterTab +=1;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Aplicación para administrar canciones',
      buttons: ['OK']
    });

    await alert.present();
  }

}
