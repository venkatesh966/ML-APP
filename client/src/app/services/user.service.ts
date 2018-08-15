import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  postData(query) {
    return this.http.post("http://localhost:3000/api/login/",query)
    .map((res) => res.json());
  }

  getData() {
    return this.http.get("http://localhost:3000/api/login")
    .map((res) => res.json());
  }

}
