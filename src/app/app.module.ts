
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './private/components/employee/employee.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailsEmployeeComponent } from './private/components/employee/details-employee/details-employee.component';
import { SidebarComponent } from './private/shared/sidebar/sidebar.component';
import { HomeComponent } from './private/components/home/home.component';
import { DashboardComponent } from './private/components/dashboard/dashboard.component';
import { ChartsComponent } from './private/components/charts/charts.component';
import { CalendarComponent } from './private/components/calendar/calendar.component';
import { HistoryComponent } from './private/components/history/history.component';
import { BenefitComponent } from './private/components/benefit/benefit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './private/shared/header/header.component';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
//import { EmployeComponent } from './private/employe/employe/employe.component';
import { CalendarempComponent } from './private/employe/components/calendaremp/calendaremp.component';
import { ReservationComponent } from './private/employe/components/reservation/reservation.component'
//import { CalendarempComponent } from './private/employe/components/calendaremp/calendaremp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DetailsEmployeeComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    ChartsComponent,
    CalendarempComponent,
    CalendarComponent,
    HistoryComponent,
    BenefitComponent,
    HeaderComponent,
   // EmployeComponent,
    CalendarempComponent,
   ReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    OverlayModule,
    CommonModule,
    CdkMenuModule,
    
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
         ScheduleModule, RecurrenceEditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
