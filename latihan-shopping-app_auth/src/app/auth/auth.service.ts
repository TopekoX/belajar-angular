import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user = new BehaviorSubject<User>(null as any)
    
    constructor(private http: HttpClient, private router: Router) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACCrF-qa7kAPQy6-weVzG1Y0sXtQ4A1UI',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError), tap(responseData => {
            this.handleAuthentication(
                responseData.email, 
                responseData.localId, 
                responseData.idToken, 
                +responseData.expiresIn)
        }))
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACCrF-qa7kAPQy6-weVzG1Y0sXtQ4A1UI',
            {
                email: email,
                password: password,
                returnSecureToken: true    
            }
        ).pipe(catchError(this.handleError), tap(responseData => {
            this.handleAuthentication(
                responseData.email, 
                responseData.localId, 
                responseData.idToken, 
                +responseData.expiresIn)
            }))
    }

    autoLogin() {
         const userData: {
            email: string
            id: string
            _token: string
            _tokenExpirationDate: string
         } = JSON.parse(localStorage.getItem('userData')!)

         if (!userData) {
            return
         }
         const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        )

        if (loadedUser.token) {
            this.user.next(loadedUser )
        }
    }

    logout() {
        this.user.next(null as any)
        this.router.navigate(['/auth'])
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
            const user = new User(
                email, 
                userId, 
                token, 
                 expirationDate)
            this.user.next(user)
            localStorage.setItem('userData', JSON.stringify(user))
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!'
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(() => errorMessage)
        }
        switch(errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists'
                break
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email not found'
                break
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct'
                break
        }
        return throwError(() => errorMessage)
    }
}

export interface AuthResponseData {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered: boolean
}
