import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListCategoriasComponent } from './pages/list-categorias/list-categorias.component';
import { CreateCategoriasComponent } from './pages/create-categorias/create-categorias.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', 
    component:PagesComponent,
    children: [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'list-categorias', component: ListCategoriasComponent},
        { path: 'create-categorias', component: CreateCategoriasComponent},
        { path: '', redirectTo:'/dashboard', pathMatch:'full' }
    ] 
  },
  
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
