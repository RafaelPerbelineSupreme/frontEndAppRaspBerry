import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-veiculo-vaga',
  templateUrl: './veiculo-vaga.page.html',
  styleUrls: ['./veiculo-vaga.page.scss'],
})
export class VeiculoVagaPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'OS PACOTES DIARIOS, SEMANAIS E MENSAIS PRECISAM CONSULTAR O PREÇO NO ESTABELECIMENTO',
      buttons: ['OK']
    });

    await alert.present();
  }
}
