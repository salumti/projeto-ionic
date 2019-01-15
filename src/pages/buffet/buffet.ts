import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Buffet } from '../../model/buffet';
import { BuffetService } from '../../services/buffet.service';

/**
 * Generated class for the BuffetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buffet',
  templateUrl: 'buffet.html',
})
export class BuffetPage {

  buffet: Buffet[];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public BuffetService : BuffetService) {
  }

  ionViewDidLoad(){
    this.BuffetService.getBuffet()
    .subscribe(response => {
      this.buffet = response;
      console.log(this.buffet);
    });
  }
  navBuffetDetalhe(buffet : Buffet){
    this.navCtrl.push("BuffetDetalhePage",{buffet : buffet});
  }
}
