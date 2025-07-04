import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  userService = inject(UserService)
  router = inject(Router)

  logout() {
    localStorage.removeItem('parkingAssistUser');
    this.router.navigateByUrl('/login')
  }
}
