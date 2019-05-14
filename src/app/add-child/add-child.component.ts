import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-add-child',
    templateUrl: './add-child.component.html',
    styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit, OnDestroy {

    public birthId: string = "";
    public childDetails: any = null;
    public loading: boolean = false;

    constructor(
        private dataService: DataService,
        private loginService: LoginService
    ) { }

    public ngOnInit(): void {

    }
    public ngOnDestroy(): void {

    }

    public searchChild(): void {
        if (this.birthId) {
            this.dataService.searchChild(this.birthId)
                .subscribe(res => this.childDetails = res)
        }
    }

    public addChild(): void {
        this.loading = true;
        let payload = {
            infantId: this.childDetails.InfantId,
            guardianId: this.loginService.loggedInUserId
        }
        this.dataService.addChild(payload)
            .pipe(finalize(() =>  this.loading = false))
            .subscribe((res: any) => {
                if (res) {
                    this.childDetails = null;
                    this.birthId = "";
                    this.dataService.infantDetails.push(res);
                    this.dataService.navItems[0].SubMenu.push(
                        {
                            "Title": res.FullName,
                            "isActive": false,
                            "Id": res.InfantId
                        }
                    );
                }
            });
    }
}