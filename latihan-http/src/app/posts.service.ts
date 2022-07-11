import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./post.model"

@Injectable({ providedIn: 'root' })
export class PostsService {
    error = new Subject<string>()

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content }
        // send http request
        this.http.post<{ name: string }>(
            'https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
            postData
        ).subscribe(responseData => {
            console.log(responseData)
        }, error => {
            this.error.next(error.message)
        })
    }

    fetchPost() {
        return this.http
            .get<{ [key: string]: Post }>('https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
            .pipe(map((responseData: { [key: string]: any }) => {
                const postsArray: Post[] = []
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key })
                    }
                }
                return postsArray
            }))
    }

    deletePosts() {
        return this.http.delete('https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    }
}