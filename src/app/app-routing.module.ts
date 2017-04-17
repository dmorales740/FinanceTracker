import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessGuard } from './services/access.guard';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { AboutComponent } from './home/about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './dashboard/project-list/project-list.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { ReportsComponent } from './dashboard/reports/reports.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AccessGuard],
    children: [
      { path: 'projects', component: ProjectListComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: '', redirectTo: 'projects', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: CarouselComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }