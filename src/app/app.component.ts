import { Component } from '@angular/core';
// import {MatFormFieldControl} from '@angular/material/form-field';
import {GetuserService} from './getuser.service';
import {Users} from './users';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private getUser: GetuserService, private _http:HttpClient) { }
  title = 'git-details';
  public userNames: any= [];
  public repos_url: any = [];
  public users = new Users;
  public stat = "hey";
  panelOpenState = false;
  public repos_list: any = [];
  
  searchUser() {
  
    this.getUser.getUser()
        .subscribe((data: any[])=>{
          
          for(let i=0; i<data.length; i++) {
            // this.userNames[i] = data[i].name;
            // this.repos_url[i] = data[i].owner.repos_url;
            this.users.userNames[i] = data[i].name;
            this.users.repos_url[i] = data[i].owner.repos_url;
            // this.repos_list[i] = 
          }
          // console.log(this.userNames);
          console.log(this.users.repos_url[0]);
          return this.userNames;
          
        });
        
        
    this.getRepos()
        .subscribe((data: any[])=>{
          for(let j=0; j<data.length; j++) {
            this.repos_list[j] = data[j].name;
          }
          console.log(this.repos_list);
        })
  }
 getRepos() {
   return this._http.get(this.repos_url);
 }
  
}
