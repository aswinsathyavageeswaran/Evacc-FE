import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { DataService } from '../data.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;
    public isRegistrationPage: boolean = false;
    public loading: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService,
        private dataService: DataService
    ) { }
    public ngOnInit(): void {
        if (this.router.url == "/register") {
            this.isRegistrationPage = true;
        }
        this.buildForm();
    }

    private buildForm(): void {
        if (this.isRegistrationPage) {
            this.registerForm = this.formBuilder.group({
                "FullName": ["", [Validators.required]],
                "Address": ["", [Validators.required]],
                "PinCode": ["", [Validators.required]],
                "Mobile": ["", [Validators.required]],
                "Email": [""],
                "UserName": ["", [Validators.required]],
                "Password": ["", [Validators.required]],
                "ConfirmPassword": ["", [Validators.required]]
            }, {validator: this.checkPasswords });
        }
        else {
            if (this.loginService.currentUser && Object.keys(this.loginService.currentUser).length) {
                this.registerForm = this.formBuilder.group({
                    "FullName": [this.loginService.currentUser.FullName, [Validators.required]],
                    "Address": [this.loginService.currentUser.Address, [Validators.required]],
                    "PinCode": [this.loginService.currentUser.PinCode, [Validators.required]],
                    "Mobile": [this.loginService.currentUser.Mobile, [Validators.required]],
                    "Email": [this.loginService.currentUser.Email, [Validators.required]]
                });
            }
            else {
                this.registerForm = this.formBuilder.group({
                    "FullName": ["", [Validators.required]],
                    "Address": ["", [Validators.required]],
                    "PinCode": ["", [Validators.required]],
                    "Mobile": [null, [Validators.required]]
                });
            }
        }
    }

    public submitForm(formData: any): void {
        if (formData) {
            // Registration page
            if (this.isRegistrationPage) {
                this.loading = true;
                // For parent
                formData.UserType = 1;
                this.loginService.register(formData)
                .pipe(finalize(() => this.loading = false))
                .subscribe(res => {
                    if (res > 0) {
                        this.loginService.isUserLoggedIn = true;
                        this.loginService.loggedInUserId = res;
                        this.loginService.getUserDetailsAndNavigate();
                    }
                    else {
                        if (res == -1) {
                            this.dataService.launchErrorToast("User with same mobile number and email id already exist");
                        }
                        else {
                            this.dataService.launchErrorToast("Failed to register, Please try again");
                        }
                    }
                });
            }
            else {
                // Profile edit page 
                this.loading = true;
                let payload = {
                    UserId: this.loginService.loggedInUserId,
                    FullName: formData.FullName,
                    Address: formData.Address,
                    PinCode: formData.PinCode,
                    Mobile: formData.Mobile,
                    Email: formData.Email
                }
                this.dataService.editProfile(payload)
                .pipe(finalize(() => this.loading = false))
                .subscribe(res => {
                    if (res) {
                        this.loginService.currentUser.FullName = formData.FullName;
                        this.loginService.currentUser.Address = formData.Address;
                        this.loginService.currentUser.PinCode = formData.PinCode;
                        this.loginService.currentUser.Mobile = formData.Mobile;
                        this.loginService.currentUser.Email = formData.Email;
                        this.dataService.launchSuccessToast("Profile updated successfully");
                    }
                    else {
                        this.dataService.launchErrorToast("Failed to update the profile");
                    }
                });
            }
        }
            
    }

    private checkPasswords(group: FormGroup) {
        let pass = group.controls.Password.value;
        let confirmPass = group.controls.ConfirmPassword.value;

        return pass === confirmPass ? null : { notSame: true }
    }
}