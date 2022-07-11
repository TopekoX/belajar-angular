import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPost: Post[] = []
  isFetching = false // to show  loading
  error = null as any
  private errorSub!: Subscription

  constructor(private http: HttpClient,
              private postService: PostsService) { }

  ngOnInit(): void {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage
    })
    
    this.isFetching = true
    this.postService.fetchPost().subscribe(posts => {
      this.isFetching = false
      this.loadedPost = posts
    }, error => {
      this.isFetching = false 
      this.error = error.message
    })
  }

  ngOnDestroy(): void {
      this.errorSub.unsubscribe()
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPost() {
    // send HTTP request
    this.isFetching = true
    this.postService.fetchPost().subscribe(posts => {
      this.isFetching = false
      this.loadedPost = posts
    }, error => {
      this.isFetching = false
      this.error = error.message
      console.log(error)
    })
  }

  onClearPost() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPost = []
    })
  }

  onHandleError() {
    this.error = null
  }

}
