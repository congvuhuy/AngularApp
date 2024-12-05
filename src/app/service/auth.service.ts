import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AuthService {
  IsLogin:boolean=false;
  Permissions :[]=[]
  private baseUrl = 'http://test.nghiencuukhoahoc.com.vn/api';
  constructor(private http: HttpClient) { }

  setPermission(perrmission :any){
    this.Permissions=perrmission;
    console.log(this.Permissions)
  }
  //getAccount
  getAccountBootstrap(): Observable<any> {

    return this.http.get<any>(`${this.baseUrl}/app/account/get-account-bootstrap`,);
  }
  //updateAccount
  updateAccountInfo(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/app/account/update-account-info`, data );
  }
  //login
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('userName',username);
    body.set('password',password);
    return this.http.post<any>(`${this.baseUrl}/app/account/login`, body.toString(), {headers});
  }
  //logout
  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/app/account/logout`, {});
  }
  //
  checkLogin(){
    if(localStorage.getItem('access_token'))
      this.IsLogin=true;
    return this.IsLogin
  }


  getImg():Observable<any>{

    return this.http.get<any>(`${this.baseUrl}/import-export/document/get-file/3a168984-9d1f-26da-531d-1c1358e7b3e5`,)
  }

  uploadImg(file: File): Observable<any> {

    const formData: FormData = new FormData();

    formData.append('files', file);
    return this.http.post<any>(`${this.baseUrl}/import-export/document/upload-to-cache`, formData);
  }

}
