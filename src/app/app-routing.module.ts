import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddChildComponent } from './add-child/add-child.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { HospitalChildSearchComponent } from './hospital-search-child/hospital-search-child.component';
import { ProfileReadonlyViewComponent } from './profile-readonly-view/profile-readonly-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: "full"
  },
  {
    path: "addchild",
    component: AddChildComponent
  },
  {
    path: "profile",
    component: RegisterComponent
  },
  {
    path: "child/:id/:isEditable",
    component: ChildDetailsComponent
  },
  {
    path: "searchchild",
    component: HospitalChildSearchComponent
  },
  {
    path: "readonlyprofile",
    component: ProfileReadonlyViewComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "manageuser/:pageName",
    component: ManageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
