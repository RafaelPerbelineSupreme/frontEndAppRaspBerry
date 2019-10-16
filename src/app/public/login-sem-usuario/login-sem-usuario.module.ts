import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginSemUsuarioPage } from './login-sem-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSemUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginSemUsuarioPage]
})
export class LoginSemUsuarioPageModule {}
