import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  constructor(private http: HttpClient,private cookieService: CookieService) { }
  endpoint = 'http://localhost:3000/api/v1/lectures';
  getLectures(coureseElementId:string): Observable<any> {
   
    let headers=new HttpHeaders().set('token',atob(this.cookieService.get('token')));
    //let params=new HttpParams().set('id','4');
    return this.http.get<any>(this.endpoint+'/'+coureseElementId,{headers});
}
}
