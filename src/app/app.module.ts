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
import { SignupComponent } from './signup/signup.component'; // 添加这行

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    SignupComponent,
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
