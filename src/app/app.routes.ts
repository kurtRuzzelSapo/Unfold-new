import { Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { SkillsComponent } from './skills/skills.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    {title: "Unfold | Home", path:'' , component: HomeComponent},
    {title: "Unfold | Home", path:'home' , component: HomeComponent},
    {title: "Unfold | Portfolio", path:'portfolio' , component: PortfolioComponent},
    {title: "Unfold | About Me", path:'aboutme' , component: AboutmeComponent},
    {title: "Unfold | Accomplishments", path:'accomplishments' , component: AccomplishmentsComponent},
    {title: "Unfold | Skills", path:'skills' , component: SkillsComponent},
    {title: "Unfold | Services", path:'services' , component: ServicesComponent},
    {title: "Unfold | Contact", path:'contact' , component: ContactComponent},
];
