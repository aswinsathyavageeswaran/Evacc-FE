import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class LoginService {

    private baseURL: string;
    public loggedInUserId: number;
    public isUserLoggedIn: boolean = false;
    public currentUser: any;

    constructor(
        private http: HttpClient,
        private dataService: DataService,
        private router: Router
    ) {
        this.baseURL = "http://localhost:60044/evacc";
    }

    public login(payload: any): Observable<any> {
        const url = `${this.baseURL}/login`;
        return this.http.post(url, payload);
    }

    public register(payload: any): Observable<any> {
        const url = `${this.baseURL}/RegisterUser`;
        return this.http.post(url, payload);
    }

    public getUserDetails(userID: number): Observable<any> {
        const url = `${this.baseURL}/GetUserData/${userID}`;
        return this.http.get(url);
    }

    public doLogin(loginDetails: any) {
        this.login(loginDetails).subscribe(res => {
            if (res != 0) {
                this.isUserLoggedIn = true;
                this.loggedInUserId = res;
                this.getUserDetailsAndNavigate();
            }
            else {
                //show error message
            }
        });
    }

    public getUserDetailsAndNavigate() {
        this.getUserDetails(this.loggedInUserId).subscribe(res => {
            this.currentUser = res;
            this.checkUserRoleAndNavigate(res);
        });
    }

    public checkUserRoleAndNavigate(userDetails: any): void {
        if (userDetails) {
            switch (userDetails.UserType) {
                // Guardian
                case 1: {
                    this.dataService.navItems = this.dataService.guardianLoginNavItems;
                    this.dataService.getInfantDetails(this.loggedInUserId)
                        .subscribe(res => {
                            this.dataService.infantDetails = res;
                            this.dataService.navItems.map(n => {
                                if (n.Title == "Children") {
                                    n.isActive = true;
                                    if (res && res.length) {
                                        res.map((child, index) => {
                                            n.SubMenu.push({
                                                "Title": child.FullName,
                                                "isActive": index == 0 ? true : false,
                                                "Id": child.InfantId
                                            });
                                        });
                                    }
                                    else {

                                    }
                                    n.link = (res && res.length) ? `child/${this.dataService.navItems[0].SubMenu[0].Id}/false` : "addchild";
                                }
                            });
                            let url = (res && res.length) ? `child/${this.dataService.navItems[0].SubMenu[0].Id}/false` : "addchild";
                            this.router.navigateByUrl(url);
                        });
                }
                break;
                // Hospital
                case 2: {
                    this.dataService.navItems = this.dataService.hospitalLoginNavItems;
                    this.dataService.isGridEditable = true;
                    this.router.navigateByUrl("/searchchild");
                }
                break;
                // Local admin
                case 3: {
                    this.dataService.navItems = this.dataService.localAdminNavItems;
                    this.router.navigateByUrl("dashboard");
                }
                break;
                // Field Staff
                case 4: {
                    this.dataService.navItems = this.dataService.hospitalLoginNavItems;
                    this.dataService.isCommentBoxEnabled = true;
                    this.router.navigateByUrl("/searchchild");
                }
            }
        }
    }

}