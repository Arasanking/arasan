import { detailsservice } from './../../../login/src/app/details.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [detailsservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
