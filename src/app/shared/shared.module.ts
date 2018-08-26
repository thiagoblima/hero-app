// Core
import { NgModule } from '@angular/core';
import { HeroService } from './hero/services/hero.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Components
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero/hero-list/hero-list.component';

// Shared Router
import { SharedRoutingModule } from './shrared-routing.module';

// Angular Material
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule } from '@angular/material';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    SharedRoutingModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    HeroService,
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }],
    entryComponents: [HeroListComponent],
  declarations: [HeroComponent, HeroListComponent]
})

export class SharedModule { }
