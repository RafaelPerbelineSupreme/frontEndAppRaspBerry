import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup, Platform, ToastController, IonSelect } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { Usuarios } from '../../shared/usuarios.class';
import { ContaTemporariaService } from '../../services/conta-temporaria.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-sem-usuario',
  templateUrl: './login-sem-usuario.page.html',
  styleUrls: ['./login-sem-usuario.page.scss'],
})
export class LoginSemUsuarioPage implements OnInit {

  users: Usuarios[] = [];

  newUser: Usuarios = <Usuarios>{};

  email:string = "";
  senha:string = "";
  confSenha: string = "";

  @ViewChild(IonRadioGroup, {static: false}) radioGroup: IonRadioGroup
  @ViewChild(IonSelect, {static: false}) selectTipoCarro: IonSelect

  constructor(private authService: AuthService, private contaTemporariaService: ContaTemporariaService, private storageService: StorageService, private plt: Platform, private toastController: ToastController, private router: Router) { 
    this.plt.ready().then(() =>{
      this.loadUsers();
    });
  }

  ngOnInit() {
  }

  async regForm(form){
    console.log(form.value.nome);
    console.log(form.value.celular);
    console.log(form.value.email);
    console.log(form.value.senha);
    console.log(form.value.confsenha);
    console.log(form.value.placa);
    console.log(form.value.modelo);
    console.log(form.value.chassi);
    console.log(form.value.proprietario);
    console.log(form.value.marca);
    console.log(form.value.cor);
    let date = new Date();
    console.log(date.toLocaleString());
    console.log(this.radioGroup.value);
    console.log("teste "+this.selectTipoCarro.value);
    if(this.radioGroup.value === "S"){
      console.log("Sim")
    }
    else if(this.radioGroup.value === "N"){
      console.log("Não")
    }
    
    this.email = form.value.email;
    this.senha = form.value.senha;
    this.confSenha = form.value.confsenha;

    console.log("user:"+this.email, "senha:"+this.senha, "confsenha:"+this.confSenha);

    const { email, senha, confSenha} = this

    if(senha != confSenha){
      return this.showToast("SENHAS NÃO SÃO IGUAIS");
    }

    this.addUser(form.value.nome, form.value.celular, form.value.email, form.value.senha, form.value.placa, form.value.modelo, form.value.chassi, form.value.proprietario, form.value.marca, form.value.cor, this.selectTipoCarro.value, this.radioGroup.value, email, senha);
  }

  addUser(nome: string, celular:string, email:string, senha:string, placa:string, modelo: string, chassi:string, proprietario:string, marca:string, cor:string, tipoVeiculo: string, vagaEspecial: string, emailAtuh: string, senhaAuth: string){
    this.newUser.idUser = this.randomString(80,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    this.newUser.nome = nome;
    this.newUser.celular = celular;
    this.newUser.email = email;
    this.newUser.senha = senha;
    this.newUser.placaCarro = placa;
    this.newUser.modelo = modelo;
    this.newUser.chassi = chassi;
    this.newUser.proprietario = proprietario;
    this.newUser.marca = marca;
    this.newUser.cor = cor;
    this.newUser.tipoVeiculo = tipoVeiculo;
    this.newUser.vgaEspecial = vagaEspecial;
    this.newUser.tipoUsuario = 'CONTA TEMPORARIA';
    let date = new Date();
    console.log(date.toLocaleString()); 
    this.newUser.create_at = date.toLocaleString();

    this.storageService.getUser().then(async users => {
      console.log(users);
      //console.log(users.length);
      if(users === null || users === undefined || users.length < 1){
        try {
          console.log("entrou trycatch");
          //const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, senha);
          //console.log(res);
          this.RegisterAuthFirebase(emailAtuh, senhaAuth);
          this.createUserFirebase(this.newUser);
          this.storageService.addUser(this.newUser).then(user => {
            this.newUser = <Usuarios>{};
            this.showToast('USUARIO CADASTRADO');
            this.loadUsers();
          }).catch(error => {
            console.log("Erro De Adicionar Usuario"+error);
          });
          this.router.navigateByUrl('/');
        } catch (error) {
          console.log("Erro Do Auth Firebase "+error);
        }
      }else if(users.length >= 1){
        this.showToast('JA POSSUI UMA CONTA TEMPORARIA CADASTRADA NO DISPOSITIVO');
      }
    }).catch(error => {
      console.log("Erro Do GetUser "+error);
    });
  }

  loadUsers(){
    this.storageService.getUser().then(users => {
      this.users = users;
    }).catch(error => {
      console.log(error);
    });
  }

  async createUserFirebase(usuario: Usuarios){
    this.contaTemporariaService.addUsuarios(usuario).then((user) => {
      console.log("ADICIONADO AO FIREBASE");
    })
  }

  async RegisterAuthFirebase(email: string, senha: string){
    const user = await this.authService.onRegister(email, senha);
    if(user){
      console.log("usuario criado com sucesso");
    }
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
    });
    toast.present();
  }

  randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

}
