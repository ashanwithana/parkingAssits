import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserModel, User } from '../../models/user.model';
import { UserService } from '../../services/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj: User = new User()
  userService = inject(UserService)
  router = inject(Router)

  onLogin() {
    this.userService.loginUser(this.loginObj).subscribe((res: IUserModel) => {
      localStorage.setItem("parkingAssistUser", JSON.stringify(res))
      this.userService.loggedUserData = res
      this.router.navigateByUrl('/dashboard');
    }, error => {
      alert('Login failed. Please check your credentials.');
    })
  }
}
