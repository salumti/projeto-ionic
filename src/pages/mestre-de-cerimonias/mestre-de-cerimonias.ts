import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mc } from '../../model/mestre-de-cerimonias';
import { McService } from '../../services/mc.service';

/**
 * Generated class for the MestreDeCerimoniasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mestre-de-cerimonias',
  templateUrl: 'mestre-de-cerimonias.html',
})
export class MestreDeCerimoniasPage {

  mc : Mc[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public McService : McService) {
  }

  ionViewDidLoad(){
    this.McService.getMc()
    .subscribe(response => {
      this.mc = response;
      console.log(this.mc);
    });
  }
  navMcDetalhe(mc : Mc){
    this.navCtrl.push("McDetalhePage",{mc : mc});
  }
}