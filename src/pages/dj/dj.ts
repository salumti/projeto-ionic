import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dj } from '../../model/dj';
import { DjService } from '../../services/dj.service';

/**
 * Generated class for the DjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dj',
  templateUrl: 'dj.html',
})
export class DjPage {

  dj : Dj[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public DjService : DjService) {
  }

  ionViewDidLoad(){
    this.DjService.getDj()
    .subscribe(response => {
      this.dj = response;
      console.log(this.dj);
    });
  }
  navDjDetalhe(dj : Dj){
    this.navCtrl.push("DjDetalhePage",{dj : dj});
  }
}
