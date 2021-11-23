import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) {

  }

  //get request
  showUserAPI() {
    return this.http.get<any>("https://reqres.in/api/users", {
      params: {
        page: 2
      },
      responseType: 'json'
    })
  }


  //post request
  createUser(userData: any) {
    return this.http.post<any>("https://reqres.in/api/users", userData, {
      responseType: 'json'
    })
  }
}
