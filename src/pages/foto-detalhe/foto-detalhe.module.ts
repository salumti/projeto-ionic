import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FotoDetalhePage } from './foto-detalhe';

@NgModule({
  declarations: [
    FotoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FotoDetalhePage),
  ],
})
export class FotoDetalhePageModule {}
