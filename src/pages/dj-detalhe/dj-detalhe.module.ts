import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DjDetalhePage } from './dj-detalhe';

@NgModule({
  declarations: [
    DjDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(DjDetalhePage),
  ],
})
export class DjDetalhePageModule {}
