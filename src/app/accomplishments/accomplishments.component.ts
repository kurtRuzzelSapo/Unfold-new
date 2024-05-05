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
@Component({
  selector: 'app-accomplishments',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './accomplishments.component.html',
  styleUrl: './accomplishments.component.scss'
})
export class AccomplishmentsComponent {
  constructor(private ds: DataService, private route: Router) {}

  applyForm = new FormGroup ({
    accomTitle: new FormControl(null, Validators.required),
    accomDesc: new FormControl(null, Validators.required),
    accomImg: new FormControl(null, Validators.required)
  })
  
  openModalpopup(){
    $('#exampleModalCenter').modal('show')
  }
  
  closePopup(){
    $('#exampleModalCenter').modal('hide')
  }

  Insert() {
    this.ds.sendRequest('addaccomplishments', this.applyForm.value).subscribe(
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


}
