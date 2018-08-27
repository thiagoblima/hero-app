/**
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @class: HeroComponent
 * @description: Hero component list wrapper
 * @constructor: { HeroService, MatDialog }
 */

import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../../shared/hero/services/hero.model';
import { HeroService } from '../../shared/hero/services/hero.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { HeroListComponent } from './hero-list/hero-list.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  private dataChild: [{}];
  heroes: Hero[] = null;

  constructor(private heroService: HeroService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    openDialog(): void {
      const dialogRef = this.dialog.open(HeroListComponent, {
        width: '1250px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

  dataReceiver(ev) {
    this.dataChild = ev;
  }

  ngOnInit() {
     /* TESING PURPOSES - refers to @Input dataAcessor
        @class HeroListComponent makes this call for you!

      this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
    */
  }

}
