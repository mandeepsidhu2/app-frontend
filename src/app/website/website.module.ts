import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    AngularFontAwesomeModule
  ]
})
export class WebsiteModule { }
