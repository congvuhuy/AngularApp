import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ApiService {
  private baseUrl = 'http://test.nghiencuukhoahoc.com.vn/api';
  constructor(private http: HttpClient) { }

  getAccountBootstrap(): Observable<any> {
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    return this.http.get<any>(`${this.baseUrl}/app/account/get-account-bootstrap`,{headers});
  }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new URLSearchParams();
    body.set('userName',username);
    body.set('password',password);
    return this.http.post<any>(`${this.baseUrl}/app/account/login`, body.toString(), {headers});
  }
  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/app/account/logout`, {});
  }
  updateAccountInfo(data: any, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.baseUrl}/app/account/update-account-info`, data, { headers });
  }



  getHuyen(maTinh: string): Observable<any> {
    const data = { type: 2, cascader: maTinh };
    return this.http.post<any>(`${this.baseUrl}/master-data/select-data-source/get-combo-data-source`, data);
  }

  getXa(maHuyen: string): Observable<any> {
    const data = { type: 3, cascader: maHuyen };
    return this.http.post<any>(`${this.baseUrl}/master-data/select-data-source/get-combo-data-source`, data);
  }

  getImg():Observable<any>{
    const token=localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.baseUrl}/import-export/document/get-file/3a168984-9d1f-26da-531d-1c1358e7b3e5`,{headers})
  }

  uploadImg(file: File): Observable<any> {
    const token=localStorage.getItem('access_token');
    const formData: FormData = new FormData();
    const headers=new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    })
    formData.append('files', file);
    return this.http.post<any>(`${this.baseUrl}/import-export/document/upload-to-cache`, formData,{headers});
  }

}
