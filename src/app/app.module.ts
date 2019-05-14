import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatFormFieldModule,
  MatGridListModule,
} from "@angular/material";
import { RegisterComponent } from './register/register.component';
import { AddChildComponent } from './add-child/add-child.component';
import { ChildCardComponent } from './child-card/child-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { HospitalChildSearchComponent } from './hospital-search-child/hospital-search-child.component';
import { SpinnerComponent } from './app-spinner/app-spinner.component';
import { ProfileReadonlyViewComponent } from './profile-readonly-view/profile-readonly-view.component';
import { DashboardPieChartComponent } from './dashboard/dashboard-pie-chart/dashboard-pie-chart.component';

import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddChildComponent,
    ChildCardComponent,
    ChildDetailsComponent,
    HospitalChildSearchComponent,
    SpinnerComponent,
    ProfileReadonlyViewComponent,
    DashboardPieChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
