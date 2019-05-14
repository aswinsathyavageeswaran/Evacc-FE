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
    public vaccinationDetails: any = null;
    private backupScheduleList: Array<any> = [];
    private updatedScheduleList: Array<any> = [];
    public isCommentBoxDisplayed: boolean = false;

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
                this.loading = true;
                this.dataService.getVaccinationDetails(params.id)
                    .pipe(finalize(() => this.loading = false))
                    .subscribe(res => {
                        this.vaccinationDetails = res;
                        this.vaccinationDetails.map((v: any) => {
                            v.Schedule.map((s: any) => {
                                if (s && s.Status != "Dummy") {
                                    v.DueDate = s.VaccinatedOrDueDate;
                                }
                            });
                        });
                        console.log(this.vaccinationDetails);
                    });
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

    public changeStatus(schedule: any): void {
        let isScheduleUpdated = this.backupScheduleList.some(b => b.ScheduleId == schedule.ScheduleId);
        if ((!this.canEditSchedule || schedule.Status == "Dummy" || schedule.Status == "Pending" || schedule.Status == "Done") && !isScheduleUpdated) {
            return
        }
        // If it is update
        if (!isScheduleUpdated) {
            let scheduleToBeUpdated = {...schedule};
            this.backupScheduleList.push(scheduleToBeUpdated);
            this.vaccinationDetails.map((v: any) => {
                v.Schedule.map((s: any) => {
                    if (s.ScheduleId == schedule.ScheduleId) {
                        s.Status = "Done";
                        this.updatedScheduleList.push({
                            InfantId: this.childDetails.InfantId,
                            ScheduleId: s.ScheduleId,
                            VaccinatedDate: new Date()
                        });
                    }
                });
            });
        }
        // If the status is reverting back
        else {
            let backupSchedule = this.backupScheduleList.find(b => b.ScheduleId == schedule.ScheduleId);
            this.backupScheduleList = this.backupScheduleList.filter(b => b.ScheduleId != schedule.ScheduleId);
            this.updatedScheduleList = this.updatedScheduleList.filter(b => b.ScheduleId != schedule.ScheduleId);
            this.vaccinationDetails.map((v: any) => {
                v.Schedule.map((s: any) => {
                    if (s.ScheduleId == schedule.ScheduleId) {
                        s.Status = backupSchedule.Status;
                    }
                });
            });
        }
    }

    public saveUpdatedSchedule(): void {
        this.loading = true;
        this.dataService.updateVaccinationSchedule(this.updatedScheduleList)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
            if(res) {
                this.dataService.launchSuccessToast("Vaccination Schedule Updated successfully");
            }
            else {
                this.dataService.launchErrorToast("Error in updating the Vaccination Schedule");
            }
        });
    }
}