import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PostPreview } from './models/posts.model';
import { List, UserPreview,CreateUserModel, UserFull } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  baseurl : string ="https://dummyapi.io/data/v1"
  options = {
    
    headers: new HttpHeaders().set('app-id', '62bc37a675e08e1287ac78d7'),
};
  constructor(public http : HttpClient) { }
  
  getUser() : Observable<List<UserPreview>>  {

    return this.http.get<List<UserPreview>>(this.baseurl+"/user?", this.options)
  }
  getUsersCreated() : Observable<List<UserPreview>>  {

    return this.http.get<List<UserPreview>>(this.baseurl+"/user", {...this.options,params :{created :1}})
  }
  findByID(id : string |null) : Observable<UserFull>  {

    return this.http.get<UserFull>(this.baseurl+"/user/"+id, this.options)
  }
  create (user : CreateUserModel) :Observable<UserFull> {


    return this.http.post<UserFull>(this.baseurl+"/user/create",user,this.options)
  }
  delete (ID :string) :Observable<string> {


    return this.http.delete<string>(this.baseurl+"/user/"+ID,this.options)
  }
  update(id: string, firstName:string, ):Observable<UserPreview> {
    console.log(id);
    return this.http.put<UserPreview>(this.baseurl+'/user/'+id,{firstName},this.options);
  }

  getUserPosts(id : string): Observable<List<PostPreview>> {
    return this.http.get<List<PostPreview>>(this.baseurl+"/user/"+id+"/post",this.options)
  }
}
