import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
    isLoginMode = true
    isLoading = false
    error: string = null as any
    @ViewChild(PlaceholderDirective) alertHost!: PlaceholderDirective

    private closeSubscription!: Subscription

    constructor(private authService: AuthService,
                private router: Router,
                private componentFactoryResolver: ComponentFactoryResolver) { }

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
        let authObservable: Observable<AuthResponseData>

        this.isLoading = true
        
        if (this.isLoginMode) {
             authObservable = this.authService.login(email, password)
        } else {
            authObservable = this.authService.signup(email, password)
        }

        authObservable.subscribe(
            responseData => {
                console.log(responseData)
                this.isLoading = false
                this.router.navigate(['/recipes'])
            }, 
            errorMessage => {
                console.log(errorMessage)
                this.error = errorMessage 
                this.showErrorAlert(errorMessage)
                this.isLoading = false
            }
        )
 
        form.reset()
    }

    onHandleError() {
        this.error = null as any
    }

    private showErrorAlert(message: string) { 
        // const alertComp = new AlertComponent()
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
        const hostViewContainerRef = this.alertHost.viewContainerRef
        hostViewContainerRef.clear()

        const componentRef = hostViewContainerRef.createComponent(alertComponentFactory)
        componentRef.instance.message = message
        this.closeSubscription = componentRef.instance.close.subscribe(() => {
            this.closeSubscription.unsubscribe()
            hostViewContainerRef.clear()
        })
    }

    ngOnDestroy(): void {
        if (this.closeSubscription) {
            this.closeSubscription.unsubscribe()
        }
    }

}
