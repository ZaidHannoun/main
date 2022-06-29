import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  {path : 'home' , component : HomePageComponent },
  {path : 'about' , component : AboutUsComponent},
  {path : 'users', loadChildren :()=> import('./module/users/users.module').then(module =>module.UsersModule)},
  { path: '', redirectTo: 'first-component', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
