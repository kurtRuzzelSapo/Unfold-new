import { Component, OnInit, inject } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [TopnavComponent, CommonModule,  ReactiveFormsModule, RouterLink],
  providers: [CookieService],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.css'
})
export class ViewportComponent {
  formData:any  
  userDetails: any;
 
  cookieService = inject(CookieService);
  studentList: any = [CommonModule];
  studentPortfolio: any ={};

  baseAPI:string = 'http://localhost/unfold-api'
  constructor(private ds: DataService){}

  ngOnInit(): void {
    this.formData = new FormData();
      this.userDetails = JSON.parse(this.cookieService.get('user_details'));

      this.ds.getRequest("get-all-students").subscribe(
        (response: any) => {
          this.studentList = response;  
          console.log('User details:', response);
        },
        (error) => {
          console.error('Error submitting application:', error);
        }
      )

      // this.ds.getRequest("view-allportfolio").subscribe(
      //   (response: any) => {
      //     this.studentPortfolio = response
      //     console.log("this is about me ",this.studentPortfolio.aboutme)
      //     console.log('View ALL Portfolio details:', response);
      //   },
      //   (error) => {
      //     console.error('Error submitting application:', error);
      //   }
      // )

      
      this.ds.getRequestWithParams("view-portfolio",{id: this.userDetails.studentID}).subscribe(
        (response: any) => {
          this.studentPortfolio = response
          console.log('View Portfolio details:', response);
        },
        (error) => {
          console.error('Error submitting application:', error);
        }
      )
  }
}
