import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastController: ToastController){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isLogged){
        return true;
      }else{
        this.showToast("Acesso Não Permitido, Realize o Login");
        this.router.navigateByUrl("/login");
        return false;
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
