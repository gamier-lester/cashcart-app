import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from './../register/register';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MembersPage } from './../members/members';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild("username")username;
  @ViewChild("password")password;
  data: string;
  response: any;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.http = http;
  }

  signUp(){
  		this.navCtrl.push(RegisterPage);
  }

  logIn(){

    let link = 'http://cashcart-assessment.herokuapp.com/authenticate.php';

    let loadingDisplay = this.loadingCtrl.create({
          content:'please wait...',
    });

    if(this.username.value === "" || this.password.value === ""){
      let alertDisplay = this.alertCtrl.create({
        title: 'All fields are required to complete this process',
        subTitle: 'Please check your username and password',
        buttons: ['Dismiss']
      });

      alertDisplay.present();
    } else {
      loadingDisplay.present().then(() => {
        let myData = JSON.stringify({username: this.username.value, password: this.password.value});
        this.http.post(link, myData)
        .subscribe(data => {
          this.response = JSON.parse(data["_body"]);
          //console.log(this.response);
          //console.log(this.response['username']);
          loadingDisplay.dismiss();
          if(this.response !== "wrong password"){
            //console.log(this.response['firstName']);
            this.navCtrl.push(MembersPage, {
              username: this.response['username'],
              firstName: this.response['firstName'],
              lastName: this.response['lastName']
            });
          } else {
            //console.log('wrong pass');
            let alertDisplay = this.alertCtrl.create({
              title: 'Login Failed',
              subTitle: 'Invalid login credentials',
              buttons: ['Dismiss']
            });
            alertDisplay.present();
          }

        }, error => {
          console.log("error");
        });
      });
    }
  }

  ionViewDidLoad() {

  }

}
  