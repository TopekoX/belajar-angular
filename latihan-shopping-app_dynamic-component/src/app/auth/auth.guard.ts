import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private autService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.autService.user.pipe(
            take(1),
            map(user => {
            const isAuth = !!user
            if (isAuth) {
                return true
            }
            // cara:  1
            return this.router.createUrlTree(['/auth'])
        }),
            // cara: 2
            // tap(isAuth => {
            //     if (!isAuth) {
            //         this.router.navigate(['/auth'])
            //     }
            // })
        )
    }

}