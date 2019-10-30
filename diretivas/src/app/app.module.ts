import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretitvaNgifComponent } from './diretitva-ngif/diretitva-ngif.component';
import { DiretitvaNgswitchComponent } from './diretitva-ngswitch/diretitva-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretitvaNgifComponent,
    DiretitvaNgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
