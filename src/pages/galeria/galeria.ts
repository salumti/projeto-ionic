import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GALERIA } from '../../config/api.config';
import { Galeria } from '../../model/galeria';

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  galeria: Galeria[] = GALERIA;

  navFotoDetalhe(galeria: Galeria){
    this.navCtrl.push("FotoDetalhePage",{galeria : galeria});
  }

}
