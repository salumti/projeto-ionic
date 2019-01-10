import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDeConvidadosPage } from './lista-de-convidados';

@NgModule({
  declarations: [
    ListaDeConvidadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeConvidadosPage),
  ],
})
export class ListaDeConvidadosPageModule {}
