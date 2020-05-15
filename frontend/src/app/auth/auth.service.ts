import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(email: string, password: String) {
    // todo
  }

  signup() {
    // todo
  }

  logout() {
    // todo
  }
}
