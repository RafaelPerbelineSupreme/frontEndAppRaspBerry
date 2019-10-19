import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Usuarios } from '../shared/usuarios.class';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  //login
  async onLogin(email: string, senha: string){
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(email, senha)
    } catch (error) {
      console.log("Erro Login: "+error);
      return error;
    }
  }

  //register
  async onRegister(email: string, senha: string){
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(email, senha);
    } catch (error) {
      console.log("Erro de Registro: "+error)
      return error;
    }
  }
}
