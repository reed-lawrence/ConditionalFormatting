import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConditionalFormattingService } from './conditional-formatting.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConditionalFormattingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
