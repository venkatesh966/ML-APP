import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map' ;

const url: string = 'http://localhost:3000/api/';

@Injectable()
export class AdminService {

  constructor(private http: Http) {

   }

  getTrainedData(){
    return this.http.get("http://localhost:3000/api/traineddata")
    .map(res => res.json());
  }

  addTrainedData(info){
    return this.http.post("http://localhost:3000/api/traineddata",info)
        .map(res => res.json());
  }

  updateTrainedData(id,query){
    return this.http.put("http://localhost:3000/api/traineddata/"+id,query)
        .map((res: Response) => res.json());
  }

  getBookData(){
    return this.http.get("http://localhost:3000/api/admin")
    .map(res => res.json());
  }

  addBookData(info){
    return this.http.post("http://localhost:3000/api/admin",info)
        .map(res => res.json());
  }


}
