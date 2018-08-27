import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit, AfterViewInit {

  public objectChild;
  private dialogRef: any;
  public pageSize: Array<Number> =  [3, 8, 16];
  public dataChild: [{}];
  public displayedColumns: string[] = ['id', 'name', 'alterEgo', 'likes', 'default'];
  public data;
  public length;
  public itensPerPage;
  public dataSource: MatTableDataSource<any>;

  @Input() dataAcessor: Hero[];
  @Output() dataSender = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private heroService: HeroService, public dialog: MatDialog) {
  }

   public getDataAcessor(): Hero[] {
    return this.dataAcessor;
  }

  private get dataChildObj() {
    this.objectChild = [
      {
        name: 'angular',
        version: '6'
      },
      {
        name: 'material',
        version: '6'
      }
    ];
    return this.dataChild = this.objectChild;
  }

  public get childDataQuery() {
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
    this.dataSender.emit(this.childDataQuery);
    console.log(this.childDataQuery);
    console.log(this.dataAcessor);
  }

}
