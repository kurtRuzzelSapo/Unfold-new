declare var $: any;
import { Component } from '@angular/core';
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

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ReactiveFormsModule,SidenavComponent,TopnavComponent],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  constructor(private ds: DataService, private route: Router) {}

formImg = new FormGroup ({
  aboutImg: new FormControl(null, Validators.required)
})
applyForm = new FormGroup ({
  aboutBio: new FormControl(null, Validators.required)
})

Insert() {
  this.ds.sendRequest('addaboutme', this.applyForm.value).subscribe(
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

InsertImg() {
  this.ds.sendRequest('addaboutme', this.applyForm.value).subscribe(
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

  openModalpopupbio(){
    $('#exampleModalCenterBio').modal('show')
  }
  
  closePopupbio(){
    $('#exampleModalCenterBio').modal('hide')
  }

}
