import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name='';
  description='';
  rate=0;
  value= '';
  value2='';
  constructor(public navCtrl: NavController, public homeProvider: HomeProvider) {

  }
  postRequest(){
    let body={"name": this.name,
              "description":this.description,
              "rate": this.rate}
    this.homeProvider.post(body).then(
      (data)=>{
        console.log(data);
        this.value2 = JSON.stringify(data);
    }, (err)=>{
      console.log('fail');

    })
    
    //console.log(this.val);
  }

  getRequest(){
    this.homeProvider.get().then(
      (data)=>{
        console.log(data);
        this.value = JSON.stringify(data);
    }, (err)=>{
      console.log('fail');

    })
  }

}
