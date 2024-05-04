declare var $: any;
import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

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
