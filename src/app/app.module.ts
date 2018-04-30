import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {AngularFireLite} from 'angularfire-lite';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireLite.forRoot({
      apiKey: "AIzaSyAAcLbdz6T2Y-gsVjAj3Swr5_QA6glYfHY",
      authDomain: "fir-2e594.firebaseapp.com",
      databaseURL: "https://fir-2e594.firebaseio.com",
      projectId: "fir-2e594",
      storageBucket: "fir-2e594.appspot.com",
      messagingSenderId: "485874526890"
    }),
    BrowserModule.withServerTransition({appId: 'fir-2e594'}),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
