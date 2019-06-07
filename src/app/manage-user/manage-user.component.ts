import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

    public pageName: string = "";
    public userList: Array<any> = [];
    public userAddForm: FormGroup;
    public loading: boolean = false;
    public isEdit: boolean = false;
    public showAddEditBox: boolean = false;
    constructor(
        public loginService: LoginService,
        public route: ActivatedRoute,
        public dataService: DataService,
        private formBuilder: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (this.userAddForm) {
                this.userAddForm.reset();
            }
            this.showAddEditBox = false;
            this.isEdit = false;
            this.pageName = params.pageName == "fieldstaff" ? "Field Staff Details" : "Hospital Details";
            if (params.pageName == "fieldstaff") {
                this.loading = true;
                this.dataService.getFieldStaffs(this.loginService.loggedInUserId)
                    .pipe(finalize(() => this.loading = false))
                    .subscribe((res: any) => {
                        this.userList = res;
                    });
            }
            else {
                this.loading = true;
                this.dataService.getHospitals(this.loginService.loggedInUserId)
                .pipe(finalize(() => this.loading = false))
                .subscribe((res: any) => {
                    this.userList = res;
                });
            }
        });
        this.buildForm();

    }

    private buildForm(): void {
        this.userAddForm = this.formBuilder.group({
            "FullName": ["", Validators.required],
            "RegistrationId": ["", Validators.required],
            "RegisteredPHC": ["", Validators.required],
            "Mobile": ["", Validators.required]
        });
    }

    public submitForm(formData: any): void {
        // adding a user
        if (!this.isEdit) {
            this.loading = true;
            formData.UserType = this.pageName == "Hospital Details" ? 2 : 4;
            formData.UserName = formData.RegistrationId;
            this.loginService.register(formData)
                .pipe(finalize(() => this.loading = false))
                .subscribe(res => {
                    if (res > 0) {
                        this.loginService.getUserDetails(res)
                            .pipe(finalize(() => this.loading = false))
                            .subscribe(res => {
                                this.loading = false;
                                if (res) {
                                    this.userList.push(res);
                                    this.userAddForm.reset();
                                    this.showAddEditBox = false;
                                }
                            });
                    }
                    else {
                        this.loading = false;
                        this.dataService.launchErrorToast("Failed to add the user");
                    }
                });
        }
        else {
            // edit user
            let selectedUser = this.userList.find(u => u.RegistrationId == formData.RegistrationId);
            formData.UserId = selectedUser.UserId;
            this.loading = true;
            this.dataService.editProfile(formData)
            .pipe(finalize(() => this.loading = false))
                .subscribe(res => {
                    if (res) {
                        this.loading = true;
                        if (selectedUser) {
                            this.loginService.getUserDetails(selectedUser.UserId)
                            .pipe(finalize(() => this.loading = false))
                                .subscribe(res => {
                                    this.userList.map(u => {
                                        if (u.UserId == selectedUser.UserId) {
                                            u.FullName = res.FullName,
                                            u.RegistrationId = res.RegistrationId,
                                            u.RegisteredPHC = res.RegisteredPHC,
                                            u.Mobile = res.Mobile
                                        };
                                        this.userAddForm.reset();
                                        this.showAddEditBox = false;
                                    });
                                });
                        }
                        else {
                            this.loading = false;
                        }
                    }
                });

        }
    }

    public editUser(user: any): void {
        this.showAddEditBox = !this.showAddEditBox;
        this.isEdit = true;
        this.userAddForm = this.formBuilder.group({
            "FullName": [user.FullName, Validators.required],
            "RegistrationId": [user.RegistrationId, Validators.required],
            "RegisteredPHC": [user.RegisteredPHC, Validators.required],
            "Mobile": [user.Mobile, Validators.required]
        });
    }

    public addNew(): void {
        this.showAddEditBox = !this.showAddEditBox;
        this.isEdit = false;
        this.userAddForm.reset();
    }
}