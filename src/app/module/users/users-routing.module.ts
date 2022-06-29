import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path : 'list' ,component : UsersListComponent },
   {path : 'profile/:id', component : UserDetailsComponent ,children: [
    {path : 'details' , component: UserInformationComponent }
  , {path : 'posts' ,component : UserPostsComponent}]}  ,
   { path: '', redirectTo:'list', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
