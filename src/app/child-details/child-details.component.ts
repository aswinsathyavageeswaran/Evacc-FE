import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-child-details',
    templateUrl: './child-details.component.html',
    styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit, OnDestroy {
    
    @Input() infantDetails: any;
    public canEditSchedule: any = false;
    public childDetails: any = {};
    public isCommentBoxEnabled: boolean = false;
    public comments: string = "";
    public loading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private loginService: LoginService
    ) { }

    public ngOnInit(): void {
        this.isCommentBoxEnabled = this.dataService.isCommentBoxEnabled;
        this.dataService.isCommentBoxEnabled = false;
        if (!this.infantDetails) {
            this.route.params.subscribe(params => {
                this.childDetails = this.dataService.infantDetails.find(i => i.InfantId == params.id);
                this.canEditSchedule = JSON.parse(params.isEditable);
            });
        }
    }

    public ngOnDestroy(): void {

    }

    public saveComment(): void {
        this.loading = true;
        let payload = {
            Userid: this.loginService.loggedInUserId,
            Comment: this.comments,
            infantId: this.childDetails.InfantId
        }
        this.dataService.addFieldStaffComment(payload)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
            if (res) {
                this.dataService.launchSuccessToast("Comment added succesfully");
                this.comments = "";
            }
            else {
                this.dataService.launchErrorToast("Failed to add comment");
            }
        })
    }
}