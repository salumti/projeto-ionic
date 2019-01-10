import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuffetPage } from './buffet';

@NgModule({
  declarations: [
    BuffetPage,
  ],
  imports: [
    IonicPageModule.forChild(BuffetPage),
  ],
})
export class BuffetPageModule {}
