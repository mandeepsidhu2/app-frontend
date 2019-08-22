import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  constructor(private http: HttpClient,private cookieService: CookieService) { }
  endpoint = 'http://localhost:3000/api/v1/problems';
  getProblems(coureseElementId:string): Observable<any> {
   
    let headers=new HttpHeaders().set('token',atob(this.cookieService.get('token')));
    return this.http.get<any>(this.endpoint+'/'+coureseElementId,{headers});
}
}
