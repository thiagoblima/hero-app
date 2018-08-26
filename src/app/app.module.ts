import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
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
