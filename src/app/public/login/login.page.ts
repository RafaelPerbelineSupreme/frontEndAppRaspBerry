import { Usuarios } from './../../shared/usuarios.class';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
//import { IonRadioGroup } from '@ionic/angular';
/*import { StorageService } from '../../services/storage.service';
import { ContaTemporariaService } from '../../services/conta-temporaria.service';*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //@ViewChild(IonRadioGroup, {static: false}) radioGroup: IonRadioGroup

  constructor(/*private contaTemporariaService: ContaTemporariaService, private storageService: StorageService, */private authService: AuthService, private router: Router, private toastController: ToastController) { }

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
    /*this.storageService.getUser().then(async users => {
      if (users === null || users === undefined || !users){
        console.log("storage não existe");
        
      }*/
      //else{
        //console.log("storage existe " + users);
        const user = await this.authService.onLogin(form.value.usuario, form.value.senha)
        console.log(user);
        if(user === "auth/invalid-email"){
          return this.showToast("CONTA INVALIDA!!!");
        }
        else if(user === "auth/user-disabled"){
          return this.showToast("USUARIO FOI DISABILITADO!!!");
        }
        else if(user === "auth/wrong-password"){
          return this.showToast("SENHA ERRADA!!!");
        }
    
    
        this.showToast("Login Realizado com Sucesso!!!");
        this.router.navigateByUrl('/tabs/homepage');
      //}
    /*}).catch(error => {
      console.log(error);
    });*/
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
    });
    toast.present();
  }

}
