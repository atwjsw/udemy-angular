import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';
    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
        // this.posts.splice(0, 0, post);
      }, (error: AppError) => {
        this.posts.splice(0, 1);
        
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalErrors())
        } else throw error;
      })
  }

  updatePost(post) {
    post.title = 'new Title';
    this.service.update(post)
      .subscribe(
        newPost => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, newPost);
      })
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post)
      .subscribe(() => {
        // let index = this.posts.indexOf(post);
        // this.posts.splice(index, 1);
      }, 
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
          // this.forms.setErrors(error.originalError);
        } else throw error;
      });
  }
}
