import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, AfterViewInit {

  public objectChild;
  public pageSize: Array<Number> =  [3, 5, 8];
  public dataChild: [{}];
  public displayedColumns: string[] = ['id', 'name', 'alterEgo', 'likes', 'default'];
  public data;
  public length;
  public dataSource: MatTableDataSource<{} | {}[] | Hero[]>;

  // @Input() dataAcessor: Hero[];
  // @Output() dataSender = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private heroService: HeroService) {
  }

  /* public getDataAcessor(): Hero[] {
    return this.dataAcessor;
  } */

  private get dataChildObj() {
    this.objectChild = [
      {
        id: 1,
        name: 'nameOne',
        lastName: 'lastNameOne',
        role: 'manager'
      },
      {
        id: 2,
        name: 'nametwo',
        lastName: 'lastNameTwo',
        role: 'manager'
      }
    ];
    return this.dataChild = this.objectChild;
  }

  public get childDataQuery(): Hero[] {
    return this.dataChildObj;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.heroService.getHeroes().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = response;
      this.length = this.dataSource.data.length;
      console.log(this.dataSource.data, this.dataSource, response);
    });
  }

  ngOnInit() {
    // this.dataSender.emit(this.childDataQuery);
    console.log(this.childDataQuery);
  }

}
