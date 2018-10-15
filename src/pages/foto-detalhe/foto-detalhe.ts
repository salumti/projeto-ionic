import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Galeria } from '../../model/galeria';

/**
 * Generated class for the FotoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto-detalhe',
  templateUrl: 'foto-detalhe.html',
})
export class FotoDetalhePage {

  galeria: Galeria;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.galeria = this.navParams.get('galeria');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoDetalhePage');
  }

}
