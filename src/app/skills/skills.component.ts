declare var $: any;

import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ReactiveFormsModule,SidenavComponent,TopnavComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent implements OnInit{
  cookieService = inject(CookieService);
  formData: any;
  userDetails: any;
  applyForm: any;
  constructor(private ds: DataService, private route: Router) {}


  ngOnInit(): void {
    this.formData = new FormData();

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    this.applyForm = new FormGroup({
      skillTitle: new FormControl(null, Validators.required),
      skillDesc: new FormControl(null, Validators.required)
    });
  }

  // applyForm = new FormGroup ({
    // skillTitle: new FormControl(null, Validators.required),
    // skillDesc: new FormControl(null, Validators.required)
  // })

  Insert() {
    this.formData.append('skillTitle', this.applyForm.value.skillTitle);
    this.formData.append('skillDesc', this.applyForm.value.skillDesc);
    this.formData.append('studentID', this.userDetails.studentID);

    this.ds.sendRequestWitoutMedia('addskill', this.formData).subscribe(
      (response) => {
        // Handle successful response here if needed
        console.log('Application submitted successfully:', response);
        console.log(this.applyForm);
      },
      (error) => {
        // Handle error response here if needed
        console.error('Error submitting application:', error);
      }
    );
  }
  openModalpopup(){
    $('#exampleModalCenter').modal('show')
  }
  
  closePopup(){
    $('#exampleModalCenter').modal('hide')
  }
}
