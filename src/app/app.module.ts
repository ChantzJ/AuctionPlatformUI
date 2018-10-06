import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LogonDialog, NavComponent} from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatFormFieldModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'dash', component: DashboardComponent },
  { path: 'table', component: TableComponent, data : {bidderName : 'some value'} }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    LogonDialog
  ],
  entryComponents: [
    LogonDialog
  ],
  imports: [
    BrowserModule,
    TableModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
