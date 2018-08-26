import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }
