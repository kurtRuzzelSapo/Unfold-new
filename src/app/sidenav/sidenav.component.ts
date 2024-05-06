import { Component, OnInit, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  providers: [CookieService],
  templateUrl: 'sidenav.component.html',
  styleUrl: 'sidenav.component.scss'
})
export class SidenavComponent {
  cookieService = inject(CookieService);

  constructor(private router: Router) {}


  logoutUser(): void {
    this.cookieService.delete("user_details")

    this.router.navigateByUrl('');
  }

}
