import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public username: string = "";
  public password: string = "";
  public loading: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private dataService: DataService 
  ) { }
  public ngOnInit(): void {

  }
  public ngOnDestroy(): void {
    
  }

  public login(): void {
    let payload = {

        "UserName": this.username,
        "password": this.password
    }
    this.loading = true;
    this.loginService.doLogin(payload);
  }
}
