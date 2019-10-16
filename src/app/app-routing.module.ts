import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  //{ path: 'info-vagas/:id', loadChildren: () => import('./pages/info-vagas/info-vagas.module').then(m => m.InfoVagasPageModule) },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'login-sem-usuario', loadChildren: './public/login-sem-usuario/login-sem-usuario.module#LoginSemUsuarioPageModule' },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [AuthGuard] }
  //{ path: 'login-sem-usuario-login', loadChildren: './public/login-sem-usuario-login/login-sem-usuario-login.module#LoginSemUsuarioLoginPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
