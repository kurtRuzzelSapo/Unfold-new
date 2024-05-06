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
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ReactiveFormsModule, SidenavComponent, TopnavComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  selectedFile: any;
  cookieService = inject(CookieService);
  formData: any;
  applyForm: any;
  userDetails: any;

  constructor(private ds: DataService, private route: Router) {}

  ngOnInit(): void {
    this.formData = new FormData();

    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    this.applyForm = new FormGroup({
      proTitle: new FormControl(null, Validators.required),
      proDesc: new FormControl(null, Validators.required),
      proImg: new FormControl(null, Validators.required),
    });
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  Insert() {
    this.formData.append('projectTitle', this.applyForm.value.proTitle);
    this.formData.append('projectDesc', this.applyForm.value.proDesc);
    this.formData.append('studentID', this.userDetails.studentID);
    this.formData.append('projectImg', this.selectedFile);

    this.ds
      .sendRequestWithMedia('add-project', this.formData)
      .subscribe(
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

  openModalpopup() {
    $('#exampleModalCenter').modal('show');
  }

  closePopup() {
    $('#exampleModalCenter').modal('hide');
  }
}
