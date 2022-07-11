import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPost: Post[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts()
  }

  onCreatePost(postData: Post) {
    // send http request
    this.http.post<{name: string}>(
        'https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', 
        postData
      ).subscribe(responseData => {
        console.log(responseData)
      })
  }

  onFetchPost() {
    // send HTTP request
    this.fetchPosts()
  }

  onClearPost() {

  }

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>('https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(map((responseData: { [key: string]: any }) => {
        const postsArray: Post[] = []   
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key}) 
          }
        }
        return postsArray
    }))
    .subscribe( posts => {
      // console.log(posts)
      this.loadedPost = posts
    })
  }

}
