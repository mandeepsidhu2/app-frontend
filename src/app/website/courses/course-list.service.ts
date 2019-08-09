import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor(private http: HttpClient,private cookieService: CookieService) { }
  endpoint = 'http://localhost:3000/api/v1/courses';
  getCourses(): Observable<any> {
   
    let headers=new HttpHeaders().set('token',atob(this.cookieService.get('token')));

    return this.http.get<any>(this.endpoint,{headers});
}
}
