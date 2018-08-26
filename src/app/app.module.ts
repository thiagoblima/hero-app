import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    RouterModule.forRoot([]),
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
