import { Component, OnInit } from '@angular/core';
import * as Headroom from "headroom.js";
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public enableAddChildButton: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public dataService: DataService
  ) { }

  public ngOnInit(): void {
    
    if(this.router.url == "/login" || this.router.url == "/register" || this.router.url == "/") {
      this.loginService.isUserLoggedIn = false;
    }
    else {
      this.loginService.isUserLoggedIn = true;
    }
    window.onscroll = function () { 
      if (header) {
        myFunction(); 
      }
    };

    var header = document.getElementById("globalHeader");
    var sticky = header ? header.offsetTop : null;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

  public navigateTo(navItem: any): void {
    this.dataService.navItems.map(n => {
      if(n.Title == navItem.Title) {
        n.isActive = true;
      }
      else {
        n.isActive = false;
      }
    });
    this.router.navigateByUrl(navItem.link);
  }

  public navigateToSubMenu(subMenu: any, navItem: any): void {
    this.dataService.navItems.map(n => {
      if (navItem.Title == n.Title) {
        if (n.SubMenu){
          n.SubMenu.map(s => {
              if (subMenu.Id == s.Id) {
                s.isActive = true;
              }
              else {
                s.isActive = false;
              }
          });
        }
      }
    });
    this.router.navigateByUrl(`child/${subMenu.Id}/false`);
  }

  public navigateToAddChild(): void {
      this.router.navigateByUrl("addchild");
  }

  public logout(): void {
    this.loginService.isUserLoggedIn = false;
    this.loginService.loggedInUserId = null;
    this.loginService.currentUser = null;
    this.dataService.infantDetails = [];
    this.dataService.loggedInUserName = "";
    this.dataService.isGridEditable = false;
    this.dataService.isCommentBoxEnabled = false;
    this.dataService.navItems = [
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
    this.router.navigateByUrl("login");
  }

}
