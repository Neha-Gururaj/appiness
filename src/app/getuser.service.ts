import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor(private _http: HttpClient) { }
  private git_url = 'https://api.github.com/repositories';
  // private repos_url = this._app.repos_url;
  getUser() {
    return this._http.get(this.git_url);
  }
//  getRepos() {
//    return this._http.get(this.repos_url);
//  }
}
