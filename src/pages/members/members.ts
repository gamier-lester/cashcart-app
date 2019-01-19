import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';

/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {
  myUsername: string;
  myFirstName: string;
  myLastName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	let usernamez = navParams.get('username');
  	let firstNamez = navParams.get('firstName');
  	let lastNamez = navParams.get('lastName');

  	console.log(usernamez);
  	console.log(firstNamez);
  	console.log(lastNamez);

  	//this.memberUsername = 'member';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MembersPage');
    //console.log(this.navParams.get('lastName'));
    this.myUsername = this.navParams.get('username');
    this.myFirstName = this.navParams.get('firstName');
    this.myLastName = this.navParams.get('lastName');
  }

  logOut() {
    this.navCtrl.push(HomePage);
  }

}
