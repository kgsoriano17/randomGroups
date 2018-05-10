import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DevsComponent } from './devs/devs.component';
import { DevDetailComponent } from './dev-detail/dev-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DevsComponent,
    DevDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
