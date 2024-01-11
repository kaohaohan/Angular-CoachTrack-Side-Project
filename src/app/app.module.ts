import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service'; 
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ChooseRoleComponent } from './choose-role/choose-role.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentprofileComponent } from './studentInfo/studentprofile.component';
import { CoachInfoComponent } from './coach-info/coach-info.component'; // 添加这行

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    SignupComponent,
    ChooseRoleComponent,
    HomepageComponent,
    StudentprofileComponent,
    CoachInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
