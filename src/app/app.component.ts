import { Component } from '@angular/core';
import {UsersService} from "./users/users.service";
import {User} from "./users/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!: User
  title = 'bleeter';

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.setUser(0)
  }

  setUser(userId: number): void {
    this.user = this.usersService.getUser(userId)!
  }
}
