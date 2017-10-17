import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  username: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = "Username";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
