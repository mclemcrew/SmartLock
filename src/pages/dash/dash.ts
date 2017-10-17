import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the DashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html',
})
export class DashPage {
    btnStatus: boolean = false;
    btnName: String;
    btnColor: String;

    constructor(public navCtrl: NavController) {
      //You should check the state of the lock every time that you construct or enter this view.
        if(this.btnStatus==false) {
          this.btnName = "Lock";
          this.btnColor = "secondary";
          this.btnStatus = true;
        }
        else {
          this.btnName = "Unlock";
          this.btnColor = "danger";
          this.btnStatus = false;
        }
    }

    changeState() {
      if(this.btnStatus==false) {
        this.btnName = "Lock";
        this.btnColor = "secondary";
        this.btnStatus = true;
      }
      else {
        this.btnName = "Unlock";
        this.btnColor = "danger";
        this.btnStatus = false;
      }
    }

}
