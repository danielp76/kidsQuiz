import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { MainQuizeComponent } from './main-quize/main-quize.component';

@NgModule({
  declarations: [
    AppComponent,
    MainQuizeComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
