import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFull } from 'src/app/models/users.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
user! : UserFull
  constructor(private route : ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params=> {
      this.userService.findByID(params['id']).subscribe(data => this.user=data)
    })
  }

}
