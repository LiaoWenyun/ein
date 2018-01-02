import { HttpModule, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http) {
    console.log('Hello HomeProvider Provider');
  }


post(body){
  return new Promise((resolve,reject)=>{
    this.http.post('http://localhost:8080/stuff',body).toPromise().then((data)=>{
      resolve(JSON.stringify(data["_body"]))
    }).catch((err)=>{
      reject(err);
    })
  })
}



  get(){
    return new Promise((resolve, reject)=>{
    this.http.get('http://localhost:8080/stuff')
    .toPromise().then((data)=>{
      resolve(JSON.stringify(data["_body"]))
      //console.log(JSON.stringify(data["_body"]))
    }).catch((err)=>{
        reject(err);
      })
    })
  } 
}


  


