import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { AccessGuard } from './services/access.guard';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { ProjectListComponent } from './dashboard/project-list/project-list.component';
import { OverviewComponent } from './dashboard/details/overview/overview.component';
import { ExpensesComponent } from './dashboard/details/expenses/expenses.component';
import { ReportComponent } from './dashboard/details/report/report.component';
import { PieChartComponent } from './dashboard/details/report/pie-chart/pie-chart.component';
import { HelpComponent } from './dashboard/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    AboutComponent,
    CarouselComponent,
    DashboardComponent,
    DetailsComponent,
    ProjectListComponent,
    OverviewComponent,
    ExpensesComponent,
    ReportComponent,
    PieChartComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ 
    UserService,
    ProjectService,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
