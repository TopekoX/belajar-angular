import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
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
            postData,
            {
                observe: 'response'
            }
        ).subscribe(responseData => {
            console.log(responseData)
        }, error => {
            this.error.next(error.message)
        })
    }

    fetchPost() {
        let searchParams = new HttpParams()
        // multiple params
        searchParams = searchParams.append('print', 'pretty')
        searchParams = searchParams.append('custom', 'key') 

        return this.http
            .get<{ [key: string]: Post }>(
                'https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                {
                    headers: new HttpHeaders({
                        'Custom-Header': 'Hello'
                    }),
                    // params: new HttpParams().set('print', 'pretty') // single params
                    params: searchParams // set multiple params
                }
                )
            .pipe(map((responseData: { [key: string]: any }) => {
                const postsArray: Post[] = []
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key })
                    }
                }
                return postsArray
            }), catchError(errorResponse => {
                  // send to analytic server 
                  return throwError(errorResponse)
            })
            )
    }

    deletePosts() {
        return this.http.delete('https://belajar-angular-bd390-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
            {
                observe: 'events',
                responseType: 'json'
            }
        ).pipe(tap(event => {
            console.log(event)
            if (event.type === HttpEventType.Sent) {
                // ...
            }
            if (event.type === HttpEventType.Response) {
                console.log(event.body)        
            }
        }))
    }
}