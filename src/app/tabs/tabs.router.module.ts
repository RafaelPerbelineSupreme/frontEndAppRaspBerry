import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'homepage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/homepage/homepage.module').then(m => m.HomepagePageModule)
          }
        ]
      },
      {
        path: 'veiculo-vaga',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/veiculo-vaga/veiculo-vaga.module').then(m => m.VeiculoVagaPageModule)
          }
        ]
      },
      {
        path: 'conta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/conta/conta.module').then(m => m.ContaPageModule)
          }
        ]
      },
      {
        path: 'info-vagas/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/info-vagas/info-vagas.module').then(m => m.InfoVagasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/homepage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
