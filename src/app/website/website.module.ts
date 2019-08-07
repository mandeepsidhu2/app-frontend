import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1045603632446-d8ghfe60vur2pgj965mpeoufm35lnmgl.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [DashboardComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    AngularFontAwesomeModule,
    SocialLoginModule
  ],
  providers:[
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class WebsiteModule { }
