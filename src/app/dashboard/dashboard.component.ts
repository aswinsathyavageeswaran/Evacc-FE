import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public data: Array<any> = [];
    public openFilterSection: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        this.data = [
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "BCG",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "OPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B I",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "OPV II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "DPT I",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "OPV III",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "DPT II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B III",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "IPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "OPV IV",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "DPT III",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B IV",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "Measles I",
                "Status": "Over Due"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "Vitamin A I",
                "Status": "Over Due"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "JE I",
                "Status": "Over Due"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "Measles II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "Vitamin A II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "JE II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "OPV V",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "DPT Booster I",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "DPT Booster II",
                "Status": "Done"
            },
            {
                "ChildID": "1234/2018",
                "ChildName": "Meenakshi",
                "PHC": "Trivandrum",
                "Vaccination": "TT",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "BCG",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "OPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "HEP B I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "OPV II",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "DPT I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "HEP B II",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "OPV III",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "DPT II",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "HEP B III",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "IPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "OPV IV",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "DPT III",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "HEP B IV",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "Measles I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "Vitamin A I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "JE I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "Measles II",
                "Status": "Over Due"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "Vitamin A II",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "JE II",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "OPV V",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "DPT Booster I",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "DPT Booster II",
                "Status": "Done"
            },
            {
                "ChildID": "1235/2018",
                "ChildName": "Theresa M",
                "PHC": "Kottayam",
                "Vaccination": "TT",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "BCG",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "OPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "HEP B I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "OPV II",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "DPT I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "HEP B II",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "OPV III",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "DPT II",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "HEP B III",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "IPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "OPV IV",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "DPT III",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "HEP B IV",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "Measles I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "Vitamin A I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "JE I",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "Measles II",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "Vitamin A II",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "JE II",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "OPV V",
                "Status": "Done"
            },
            {
                "ChildID": "1236/2018",
                "ChildName": "Shahina Ali",
                "PHC": "Thrissur",
                "Vaccination": "DPT Booster I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "BCG",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "OPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "OPV II",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "DPT I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B II",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "OPV III",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "DPT II",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B III",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "IPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "OPV IV",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "DPT III",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "HEP B IV",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "Measles I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "Vitamin A I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "JE I",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "Measles II",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "Vitamin A II",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "JE II",
                "Status": "Over Due"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "OPV V",
                "Status": "Done"
            },
            {
                "ChildID": "1237/2018",
                "ChildName": "Nayanthara Joe",
                "PHC": "Trivandrum",
                "Vaccination": "DPT Booster I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "BCG",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "OPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "HEP B I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "OPV II",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "DPT I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "HEP B II",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "OPV III",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "DPT II",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "HEP B III",
                "Status": "Over Due"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "IPV I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "OPV IV",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "DPT III",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "HEP B IV",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "Measles I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "Vitamin A I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "JE I",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "Measles II",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "Vitamin A II",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "JE II",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "OPV V",
                "Status": "Done"
            },
            {
                "ChildID": "1238/2018",
                "ChildName": "Peter Joseph",
                "PHC": "Kottayam",
                "Vaccination": "DPT Booster I",
                "Status": "Done"
            }];
    }

}