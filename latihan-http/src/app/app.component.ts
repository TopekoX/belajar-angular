import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPost: Post[] = []
  isFetching = false // to show  loading
  error = null 

  constructor(private http: HttpClient,
              private postService: PostsService) { }

  ngOnInit(): void {
    this.isFetching = true
    this.postService.fetchPost().subscribe(posts => {
      this.isFetching = false
      this.loadedPost = posts
    }, error => {
      this.error = error.message
    })
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
      this.error = error.message
      console.log(error)
    })
  }

  onClearPost() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPost = []
    })
  }

}
