import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private socialAuthService: AuthService,private authenticationService:AuthenticationService,private cookieService: CookieService) { }
  loggedin:boolean 
  ngOnInit() {
     this.loggedin = this.cookieService.check('token');
    console.log(this.loggedin)
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.authenticationService.login(userData.idToken).subscribe(data=>{
          this.loggedin=true
        });
      }
    );
  }

  public logout(){
    this.authenticationService.logout();
    this.loggedin=false
  }
}
