import { Injectable } from '@angular/core'
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_Models/user';
import { UserService } from '../_Services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_Services/alertify.service';


@Injectable()

export class MDetailResolver  implements Resolve <User> {
  
    constructor(private userService:UserService, private router: Router, private alertyfy:AlertifyService){}

    resolve(route:ActivatedRouteSnapshot):Observable<User>{
        return this.userService.getuser(route.params['id']).pipe(
            catchError(error => {
                this.alertyfy.error('Problem to retriving data.');
                this.router.navigate(['/friends']);
                return of(null);
            })
        );
    }
    
}
