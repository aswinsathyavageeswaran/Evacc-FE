import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: "root"
})
export class DataService {

    private baseURL: string;
    public guardianLoginNavItems: Array<any> = [
        {
            "Title": "Children",
            "isActive": false,
            "link": "",
            "SubMenu": []
        },
        {
            "Title": "Profile",
            "isActive": false,
            "link": "/profile",
            "SubMenu": null
        }
    ];

    public hospitalLoginNavItems: Array<any> = [
        {
            "Title": "Search",
            "isActive": true,
            "link": "/searchchild",
            "SubMenu": []
        },
        {
            "Title": "Profile",
            "isActive": false,
            "link": "/readonlyprofile",
            "SubMenu": null
        }
    ];

    public localAdminNavItems: Array<any> = [
        {
            "Title": "Dashboard",
            "isActive": true,
            "link": "/dashboard",
            SubMenu: null
        }
    ]

    public isCommentBoxEnabled: boolean = false;
    
    public navItems: Array<any> = [];

    public infantDetails: Array<any> = [];
    public loggedInUserName: string = "";
    public isGridEditable: boolean = false;

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar
    ) {
        this.baseURL = "http://localhost:60044/evacc";
    }

    public getInfantDetails(parentId: number): Observable<any> {
        const url = `${this.baseURL}/GetInfantsByGuardian/${parentId}`;
        return this.http.get(url);
    }

    public searchChild(birthID: any) {
        const url = `${this.baseURL}/GetInfantDetails?birthId=${birthID}`;
        return this.http.post(url, {});
    }

    public addChild(payload: any) {
        const url = `${this.baseURL}/AddInfant`;
        return this.http.post(url, payload);
    }

    public launchSuccessToast(message: string) {
        this.launchToastMessage(message, ["success-snack-bar", "snackbar-top-right"]);
    }

    /** Launches an error toast message to the bottom-center (default position) of the page.
     * @param message Message to be displayed in the snack bar.
    */
    public launchErrorToast(message: string) {
        this.launchToastMessage(message, ["error-snack-bar"]);
    }

    private launchToastMessage(message: string, classes: Array<string>) {
        const config = new MatSnackBarConfig();
        config.duration = 3000;
        config.panelClass = classes;
        this.snackBar.open(message, "OK", config);
    }

    public searchInfant(payload: any): Observable<any> {
        const url = `${this.baseURL}/SearchInfant`;
        return this.http.post(url, payload);
    }

    public addFieldStaffComment(payload: any): Observable<any> {
        const url = `${this.baseURL}/AddFieldStaffComment`;
        return this.http.post(url, payload);
    }

    public editProfile(payload: any): Observable<any> {
        const url = `${this.baseURL}/UpdateProfile`;
        return this.http.put(url, payload);
    }

    public getVaccinationDetails(InfantId:number): Observable<any> {
        const url = `${this.baseURL}/GetVaccinationDetailsTable/${InfantId}`;
        return this.http.get(url);
    }

    public updateVaccinationSchedule(payload: any): Observable<any> {
        const url = `${this.baseURL}/UpdateVaccinationDeatils`;
        return this.http.post(url, payload);
    }
}