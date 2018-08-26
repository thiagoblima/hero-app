import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public pageTitle;
  constructor() {
  }

  public set name (value: string) {
    this.pageTitle = value;
  }

  public ngOnInit(): void {
    this.name = 'Hero App';
  }

}
