declare var $: any;
import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ReactiveFormsModule,SidenavComponent,TopnavComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private ds: DataService, private route: Router) {}

  applyForm = new FormGroup({
    serviceTitle: new FormControl(null, Validators.required),
    serviceDesc: new FormControl(null, Validators.required),
  })

  Insert() {
    this.ds.sendRequestWitoutMedia('addservice', this.applyForm.value).subscribe(
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
