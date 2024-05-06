import { Component, OnInit, inject} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [],
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
