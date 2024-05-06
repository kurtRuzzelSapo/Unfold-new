import { Component, OnInit, inject } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, TopnavComponent, CommonModule],
  providers: [CookieService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
userDetails: any
cookieService = inject(CookieService);
studentList: any = [];

constructor(private ds: DataService){}

  ngOnInit(): void {
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
  }

  deleteStudent(data: any): void {
    console.log("click");

    console.log(data)
    const payload = {
      id: data.studentID,
      is_admin: this.userDetails.is_admin
    }


    this.ds.deleteRequest("delete-student", payload).subscribe(
      (response: any) => {
        if (response.status_code === 200){
          alert("Student Deleted Successfully");
          window.location.reload();
        }
      },
      (error) => {
        console.error('Error submitting application:', error);
      }
    )

  }
}
