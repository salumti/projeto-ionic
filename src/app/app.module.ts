import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AngularFireModule } from '@angular/fire';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASECONFIG } from '../config/firebase.config';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '../services/storage.service';
import { DjService } from '../services/dj.service';
import { BuffetService } from '../services/buffet.service';
import { OrnamentacaoService } from '../services/ornamentacao.service';
import { McService } from '../services/mc.service';

@NgModule({
  declarations: [
    MyApp  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASECONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    StorageService,
    DjService,
    BuffetService,
    OrnamentacaoService,
    McService
  ]
})
export class AppModule {}
