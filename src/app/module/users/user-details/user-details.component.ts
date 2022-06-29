import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserFull } from 'src/app/models/users.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user! : UserFull
id! : string | null
userImagePath! : string
  constructor(private userService: UserService,private route :ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe((params :ParamMap)=> {
      this.id=params.get('id');    
      this.findByID()
  })

 
  }
  findByID(){
    this.userService.findByID(this.id).subscribe(data =>{ this.user=data})
  }

  displayPosts(){
this.router.navigate(['/posts'])

  }
  displayInformations(){
    this.router.navigate(['/details'])
    
      }
}
