import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserModel, User } from '../../models/user.model';
import { UserService } from '../../services/user/user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj: User = new User();
  userService = inject(UserService)
  onLogin() {
    this.userService.loginUser(this.loginObj).subscribe((res: IUserModel) => {
      alert(`Welcome ${res.fullName}`)
    }, error => {
      alert('Login failed. Please check your credentials.');
    })
  }
}
