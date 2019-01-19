import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	@ViewChild("username")username;
	@ViewChild("password")password;
	@ViewChild("cPassword")cPassword;
  @ViewChild("firstName")firstName;
	@ViewChild("lastName")lastName;

  response: any;
  regResult: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private http: Http, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Register(){
  	var link = 'http://cashcart-assessment.herokuapp.com/authenticate.php';
    var myData = JSON.stringify({
      username: this.username.value
    });

    let loadingDisplay = this.loadingCtrl.create({
          content:'please wait...',
    });

    if(this.username.value == "" || this.password.value == "" || this.cPassword.value == "" || this.firstName == "" || this.lastName.value == ""){
      let alertDisplay = this.alertCtrl.create({
        title: 'All fields are required to complete this process',
        subTitle: 'Please check your input and try again',
        buttons: ['Dismiss']
      });

      alertDisplay.present();
    } else {
      if(this.password.value == this.cPassword.value){
        loadingDisplay.present().then(() => {
          this.http.post(link, myData)
          .subscribe(data => {
            this.response = JSON.parse(data["_body"]);
            loadingDisplay.dismiss();
            if(this.response !== "match"){
              var regLink = 'http://cashcart-assessment.herokuapp.com/register.php';
              var userData = JSON.stringify({
                username: this.username.value,
                password: this.password.value,
                firstName: this.firstName.value,
                lastName: this.lastName.value
              });
              this.http.post(regLink, userData)
              .subscribe(data => {
                this.regResult = JSON.parse(data["_body"]);
                if(this.regResult !== "success"){
                  var alertDisplay = this.alertCtrl.create({
                    title: 'Something went wrong',
                    subTitle: 'Registration failed',
                    buttons: ['Dismiss']
                  });
                  alertDisplay.present();
                } else {
                  var alertDisplay = this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Registration successful',
                    buttons: ['Dismiss']
                  });
                  alertDisplay.present();
                  this.navCtrl.push(HomePage);
                }
              });
            }
          });
        }, error => {
          console.log('error ajax');
        });
      } else {
        let alertDisplay = this.alertCtrl.create({
          title: 'All fields are required to complete this process',
          subTitle: 'Password does not match',
          buttons: ['Dismiss']
        });

        alertDisplay.present();
      }
    }
  }

}
