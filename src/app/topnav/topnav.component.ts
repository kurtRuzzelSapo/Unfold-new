import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  providers: [CookieService],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss'
})
export class TopnavComponent implements OnInit {
  cookieService = inject(CookieService);

  userDetails: any
  
  ngOnInit(): void {
    this.userDetails = JSON.parse(this.cookieService.get('user_details'));

    
  }

  
}
