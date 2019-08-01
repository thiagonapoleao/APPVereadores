import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'nova-pagina', loadChildren: './nova-pagina/nova-pagina.module#NovaPaginaPageModule' },
  { path: 'deputados', loadChildren: './deputados/deputados.module#DeputadosPageModule' },
  { path: 'despesas', loadChildren: './despesas/despesas.module#DespesasPageModule' },  { path: 'nossa-api', loadChildren: './nossa-api/nossa-api.module#NossaApiPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
