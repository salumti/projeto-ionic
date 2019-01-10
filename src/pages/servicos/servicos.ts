import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class ServicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicosPage');
  }
  espaco(){
    this.navCtrl.push('EspacoPage');
  }
  buffet(){
    this.navCtrl.push('BuffetPage');
  }
  ornamentacao(){
    this.navCtrl.push('OrnamentacaoPage');
  }
  dj(){
    this.navCtrl.push('DjPage');
  }
  mc(){
    this.navCtrl.push('MestreDeCerimoniasPage');
  }
  listadeConvidados(){
    this.navCtrl.push('ListaDeConvidadosPage');
  }
  listadePresentes(){
    this.navCtrl.push('ListaDePresentesPage');
  }
  colaboracaoMutua(){
    this.navCtrl.push('ColaboracaoMutuaPage');
  }
  contato(){
    this.navCtrl.push('ContatoPage');
  }
  quemSomos(){
    this.navCtrl.push('QuemSomosPage');
  }
}
