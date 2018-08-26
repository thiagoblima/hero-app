import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeroListComponent } from './shared/hero/hero-list/hero-list.component';
import { MAT_DIALOG_DATA } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
