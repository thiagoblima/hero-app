import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private pageTitle;
  constructor() {
  }

  private set name (value: string) {
    this.pageTitle = value;
  }

  public ngOnInit(): void {
    this.name = 'Hero App';
  }

}
