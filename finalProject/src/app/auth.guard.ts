
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  constructor(private _AuthService:AuthService,private _router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this._AuthService.userData.getValue() != null)
    {
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}

