import {Injectable} from '@angular/core';
import {User} from "./user";
import {users} from "./mock-users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  public getUser(id: number): User | undefined {
    return users.find(user => user.id === id)
  }
}
