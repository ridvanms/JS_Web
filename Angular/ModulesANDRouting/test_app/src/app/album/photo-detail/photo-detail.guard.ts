import{Injectable} from "@angular/core"
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router} from "@angular/router"
import { Observable } from "rxjs"
@Injectable({
    providedIn: 'root' // This is the default value, but you can specify a different
})

export class AuthGuard implements CanActivate{
    constructor(private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          // Perform authentication checkthis.router.navigate(['/']) or permission check here
         return  this.checkIfLogged(state.url) || this.router.createUrlTree(['/'])
          
       // Return true if the user is authenticated and has the required permissions
       // Return false or redirect to another route if the user is not authenticated or lacks permissions
    }
    checkIfLogged(url:string):boolean{
        return true
    }
}