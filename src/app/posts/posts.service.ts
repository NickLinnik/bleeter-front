import {Injectable} from '@angular/core';
import {Post} from "./post";
import {posts} from "./mock-posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  getPost(postId: number): Post | undefined {
    return posts.find(post => post.id === postId)
  }

  getUserPosts(userId: number): Post[] | undefined {
    return posts.filter(post => post.userId === userId)
  }
}
