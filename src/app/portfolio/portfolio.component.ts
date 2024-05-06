declare var $: any;

import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TopnavComponent } from '../topnav/topnav.component';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ReactiveFormsModule,SidenavComponent,TopnavComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(private ds: DataService, private route: Router) {}

applyForm = new FormGroup({
  proTitle: new FormControl(null, Validators.required),
  proDesc: new FormControl(null, Validators.required),
  proImg: new FormControl(null, Validators.required),
})

Insert() {
  this.ds.sendRequest('addportfolio', this.applyForm.value).subscribe(
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
