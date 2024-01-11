import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.component.html',
  styleUrls: ['./choose-role.component.css']
})
export class ChooseRoleComponent {
  userRole: string = '';

  constructor(private router: Router) {}

  onNext() {
    console.log('Selected role:', this.userRole);

    if(this.userRole === 'coach'){
      this.router.navigate(['/signup/basicinfo/coach']);
    } else if (this.userRole ==='student'){
      this.router.navigate(['/signup/basicinfo/student']);
    }
   
  }
}