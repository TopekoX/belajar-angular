import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    isLoginMode = true
    isLoading = false
    error: string = null as any

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode
    }

    onSubmit(form: NgForm) {
        // console.log(form.value)
        
        if (!form.valid) {
            return;
        }
        const email = form.value.email
        const password = form.value.password

        this.isLoading = true
        if (this.isLoginMode) {
            // ...
        } else {
            this.authService.signup(email, password).subscribe(
                responseData => {
                    console.log(responseData)
                    this.isLoading = false
                }, 
                errorResponse => {
                    console.log(errorResponse)
                    switch(errorResponse.error.error.message) {
                        case 'EMAIL_EXISTS':
                            this.error = 'This email already exists '
                    }
                    this.isLoading = false
                })
        }
 
        form.reset()
    }

}
