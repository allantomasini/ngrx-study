import { tap } from 'rxjs/operators';
import { isLoggedIn } from './auth.selectors';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { AppState } from './../reducers/index';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(loggedIn => {
          if(!loggedIn) {
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
}
