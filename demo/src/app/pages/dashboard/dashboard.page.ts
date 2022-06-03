/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/prefer-for-of */
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
  public Users: any[] ;
  public col: any;
  public rows: any[];

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private httpClient: HttpClient
  ) {this.col = [
    { name: 'company' },
    { name: 'Site' },
    { name: 'Emp_Last_Name' }
  ];this.rows = [];
     this.httpClient.get<any[]>('http://localhost:3001/calendar/api/search?Calendardate=2022-05-15&site=steele&days=7&position=ALL')
  .subscribe((response) => {
 for(let i=0;i<response.length;i++){
 //  console.log(typeof this.rows);
 response[i] = {
  "Site": response[i].Site,
  "ScheduleName2": response[i].ScheduleName2,
  "Emp_First_Name": response[i].Emp_First_Name,
  "Emp_Last_Name": response[i].Emp_Last_Name,
  "LSShift_Start_Local_DateTime": response[i].LSShift_Start_Local_DateTime,
  "LSShift_End_Local_DateTime": response[i].LSShift_End_Local_DateTime,
  "LaborSched_Week_Ending_Business_Date": response[i].LaborSched_Week_Ending_Business_Date,
  "ScheduleMonth": response[i].ScheduleMonth,
  "WeekStart": response[i].WeekStart,
  "WeekEnd": response[i].WeekEnd,
  "Emp_Key": response[i].Emp_Key,
  "LSShift_LSWorkType_Key": response[i].LSShift_LSWorkType_Key,
  "LSShift_Key": response[i].LSShift_Key,
  "ScheduleName": response[i].ScheduleName,
  "EmpComm_Alt_Phone": response[i].EmpComm_Alt_Phone,
  "EmpComm_Email": response[i].EmpComm_Email,
  "EmpPos_End_Date": response[i].EmpPos_End_Date
}
   console.log(response[i]);
   this.rows.push(response[i]);
  }



//console.log(response);
  //  this.rows =     [{ Site: 'Steele', gender: 'Male', company: 'Swimlane' }]
   // console.log(typeof this.rows);
  //   console.log(this.col,this.rows)
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
