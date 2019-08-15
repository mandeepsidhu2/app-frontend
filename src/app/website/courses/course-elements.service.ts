import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CourseElementsService {
  constructor(private http: HttpClient,private cookieService: CookieService) { }
  endpoint = 'http://localhost:3000/api/v1/course_elements';
  getCourseElements(courseId:string): Observable<any> {
   
    let headers=new HttpHeaders().set('token',atob(this.cookieService.get('token')));
    //let params=new HttpParams().set('id','4');
    return this.http.get<any>(this.endpoint+'/'+courseId,{headers});
}
}
