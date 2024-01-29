
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate {
 
    constructor(private authservices:AuthService ,private _router:Router ) {
    }
 
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
 
        //check some condition  
        if (this.authservices.UserData.getValue()!=null)  {
           
            return true;
        } 
        else{
          this._router.navigate(['/login'])
          return false;
         
        }
        
    }
 
}