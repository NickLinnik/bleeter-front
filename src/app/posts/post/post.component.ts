import {Component, Input, OnInit} from '@angular/core';

import {Post} from "../post";
import {User} from "../../users/user";
import {UsersService} from "../../users/users.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: Post
  author!: User

  constructor(private usersServices: UsersService) {
  }

  ngOnInit(): void {
    this.setAuthor()
  }

  setAuthor(): void {
    this.author = this.usersServices.getUser(this.post.userId)!
  }
}
