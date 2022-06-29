import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    UserInformationComponent,
    UserPostsComponent
  ],
  imports: [
     
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
