import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPreview } from 'src/app/models/users.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
 users! : UserPreview[]
  constructor(private userService : UserService , private router :Router) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
 this.userService.getUser().subscribe(data=> this.users=data.data)

  }
 

}
