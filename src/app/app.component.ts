/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @class: AppComponent
 * @description: Bootstrap application class
 * @constructor: { HeroService, MatDialog }
 */

import { Component, OnInit } from '@angular/core';

interface AppComponentModel {
  pageTitle: string | { prop: string };
  pageCaption: string | { prop: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, AppComponentModel {
  public pageTitle;
  public pageCaption;
  constructor() {
  }

  private set _pageTitle(value: string) {
    this.pageTitle = value;
  }

  private set _pageCaption(value: string) {
    this.pageCaption = value;
  }

  public ngOnInit(): void {
    this._pageTitle = 'Hero App';
    this._pageCaption = 'Please, select a route and test the injected module';
  }

}
