import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  isDisable: boolean = true;
  constructor(public navCtrl: NavController) {

  }

}
