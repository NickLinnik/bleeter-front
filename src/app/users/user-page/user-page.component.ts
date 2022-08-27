import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {Post} from "../../posts/post";
import {PostsService} from "../../posts/posts.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @Input() user!: User
  posts!: Post[]

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.setPosts()
  }

  setPosts(): void {
    this.posts = this.postsService.getUserPosts(this.user.id) || []
  }
}
