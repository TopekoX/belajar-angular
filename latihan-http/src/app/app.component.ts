import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPost = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: {title: string; content: string;}) {
    // send http request
    this.http.post(
        'https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', 
        postData
      ).subscribe(responseData => {
        console.log(responseData)
      })
  }

  onFetchPost() {

  }

  onClearPost() {

  }

}
