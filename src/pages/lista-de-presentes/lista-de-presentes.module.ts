import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaDePresentesPage } from './lista-de-presentes';

@NgModule({
  declarations: [
    ListaDePresentesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDePresentesPage),
  ],
})
export class ListaDePresentesPageModule {}
