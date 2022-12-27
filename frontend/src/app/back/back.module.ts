import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackRoutingModule } from './back-routing.module';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SeancesComponent } from './seances/seances.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BackLayoutComponent, DashboardComponent, UsersComponent, SeancesComponent],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule
  ]
})
export class BackModule { }
