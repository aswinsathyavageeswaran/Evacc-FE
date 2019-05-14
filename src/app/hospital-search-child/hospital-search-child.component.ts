import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";

@Component({
    selector: 'app-hospital-search',
    templateUrl: './hospital-search-child.component.html',
    styleUrls: ['./hospital-search-child.component.scss']
})
export class HospitalChildSearchComponent implements OnInit {

    public childSearchForm: FormGroup;
    public childDetails: Array<any> = [];
    public isChildDetailViewEnabled: boolean = false;
    public selectedInfant: any = {};
    public loading: boolean = false;
    public showErrorMsg: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private dataService: DataService,
        private router: Router
    ) { }
    public ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): void {
        this.childSearchForm = this.formBuilder.group({
            "DOB": [""],
            "MothersName": [""],
            "PlaceofBirth": [""],
            "BirthId": [""]
        });
    }

    public submitForm(formData: any): void {
        if ((formData.DOB && formData.DOB.length) || (formData.MothersName && formData.MothersName.length) || (formData.PlaceofBirth && formData.PlaceofBirth.length) || (formData.BirthId && formData.BirthId.length)) {
            this.showErrorMsg = false;
            this.loading = true;
            this.dataService.searchInfant(formData)
                .pipe(finalize(() => this.loading = false))
                .subscribe(res => {
                    this.childDetails = res;
                });
        }
        else {
            this.showErrorMsg = true;
        }
    }

    public viewDetails(childDetails: any): void {
        this.dataService.infantDetails = this.childDetails;
        this.router.navigateByUrl(`child/${childDetails.InfantId}/true`);
    }
}