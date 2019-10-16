import { Usuarios } from './../../shared/usuarios.class';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
//import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //@ViewChild(IonRadioGroup, {static: false}) radioGroup: IonRadioGroup

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }

  async logForm(form){
    console.log(form.value.usuario);
    console.log(form.value.senha);
    /*console.log(this.radioGroup.value);
    if(this.radioGroup.value === "CLI"){
      console.log("CLI")
    }
    else if(this.radioGroup.value === "ADM" || this.radioGroup.value === "GRT"){
      console.log("ADM || GRT")
    }*/
    const user = await this.authService.onLogin(form.value.usuario, form.value.senha)
    if(user){
      this.showToast("Login Realizado com Sucesso!!!");
      this.router.navigateByUrl('/tabs/homepage');
    }
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
    });
    toast.present();
  }

}
