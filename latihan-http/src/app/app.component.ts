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
    console.log(postData)
  }

  onFetchPost() {

  }

  onClearPost() {

  }

}
