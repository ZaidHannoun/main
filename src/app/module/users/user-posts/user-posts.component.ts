import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostPreview } from 'src/app/models/posts.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
posts! : PostPreview[]
  constructor(private userService: UserService,private route : ActivatedRoute) { }

  ngOnInit(): void {
  this.route.parent?.params.subscribe(params=> {
    this.userService.getUserPosts(params['id']).subscribe(data => this.posts=data.data)
  })
   
}
getUserPosts(){

  this
}
}
