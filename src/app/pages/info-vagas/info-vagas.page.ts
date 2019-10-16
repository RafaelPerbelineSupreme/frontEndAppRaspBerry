import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-info-vagas',
  templateUrl: './info-vagas.page.html',
  styleUrls: ['./info-vagas.page.scss'],
})
export class InfoVagasPage implements OnInit {

  passedId = null;
  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController) { }

  ngOnInit() {
    this.passedId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  customPopoverOptions: any = {
    header: 'Planos',
    message: 'Selecione um'
  };

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'OS PACOTES DIARIOS, SEMANAIS E MENSAIS PRECISAM CONSULTAR O PREÇO NO ESTABELECIMENTO',
      buttons: ['OK']
    });

    await alert.present();
  }

}
