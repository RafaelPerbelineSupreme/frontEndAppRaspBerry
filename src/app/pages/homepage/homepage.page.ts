import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private router: Router, private angularFireAuth: AngularFireAuth, private authService: AuthService, private toastController: ToastController) { }
  collection = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {
  }

  Logout(){
    this.showToast("Você acabou de sair da sua conta")
    this.angularFireAuth.auth.signOut();
    this.router.navigateByUrl('/login');
    //se o usuario for conta temporaria, quando realizar o logout ira deletar a conta dele e o cadastro no storage e no autentificdor do firebase
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
    });
    toast.present();
  }
}
