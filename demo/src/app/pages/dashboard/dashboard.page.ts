/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '././../../services/ionic-auth.service';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
export interface USERS {
  users: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardPage implements OnInit {
  userDetail: string;
  public Users: USERS;
  public col: any;
  public rows: any;
  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private httpClient: HttpClient
  ) {this.col = [
    { name: 'Name' },
    { name: 'Username' },
    { name: 'email' }
  ];   this.httpClient.get<USERS>('http://192.168.0.144:3000/users')
  .subscribe((response) => {

    this.rows = response;
     console.log(this.col,this.rows)
  });}

  ngOnInit() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    });
  }

  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      });
  }
}
