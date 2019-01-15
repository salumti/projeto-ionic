import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ornamentacao } from '../../model/ornamentacao';
import { OrnamentacaoService } from '../../services/ornamentacao.service';

/**
 * Generated class for the OrnamentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ornamentacao',
  templateUrl: 'ornamentacao.html',
})
export class OrnamentacaoPage {

  ornamentacao : Ornamentacao[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public OrnamentacaoService : OrnamentacaoService) {
  }

  ionViewDidLoad(){
    this.OrnamentacaoService.getOrnamentacao()
    .subscribe(response => {
      this.ornamentacao = response;
      console.log(this.ornamentacao);
    });
  }
  navOrnamentacaoDetalhe(ornamentacao : Ornamentacao){
    this.navCtrl.push("OrnamentacaoDetalhePage",{ornamentacao : ornamentacao});
  }
}