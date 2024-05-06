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
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,SidenavComponent,TopnavComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private ds: DataService, private route: Router) {}


  applyForm = new FormGroup ({
    contName: new FormControl(null, Validators.required),
    contNumber: new FormControl(null, Validators.required),
    contEmail: new FormControl(null, Validators.required),
    contHome: new FormControl(null, Validators.required)
  })

  Insert() {
    this.ds.sendRequest('addcontact', this.applyForm.value).subscribe(
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
