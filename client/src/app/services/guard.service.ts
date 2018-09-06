import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
 
  public value:string;
  constructor(private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    var Path = state.url;
    if(Path === "/admin") {
      this.value = localStorage.getItem('key');
      if(this.value !== "@123"){
        this.router.navigate(['/']);
        return true;
      }
    }
      if(Path === "/user") {
        this.value = localStorage.getItem('key');
        if(this.value !== "@123"){
          this.router.navigate(['/']);
          return true;
        }
      }
      return true
    }
  }
