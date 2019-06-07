import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'app-profile-readonly-view',
    templateUrl: './profile-readonly-view.component.html',
    styleUrls: ['./profile-readonly-view.component.scss']
})
export class ProfileReadonlyViewComponent  {
    
    constructor( 
        public loginService: LoginService
    ) { }
}