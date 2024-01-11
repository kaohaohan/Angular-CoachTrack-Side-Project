import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';   
import { SignupComponent } from './signup/signup.component';
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentprofileComponent } from './studentInfo/studentprofile.component';
import { CoachInfoComponent } from './coach-info/coach-info.component';
const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'signup/role',component:ChooseRoleComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'signup/basicinfo/student',component:StudentprofileComponent},
  {path:'signup/basicinfo/coach',component:CoachInfoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
