declare var $: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-accomplishments',
  standalone: true,
  imports: [],
  templateUrl: './accomplishments.component.html',
  styleUrl: './accomplishments.component.scss'
})
export class AccomplishmentsComponent {

  openModalpopup(){
    $('#exampleModalCenter').modal('show')
  }
  
  closePopup(){
    $('#exampleModalCenter').modal('hide')
  }

}
