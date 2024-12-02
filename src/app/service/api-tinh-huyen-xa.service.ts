import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiTinhHuyenXaService {

  private baseUrl = 'http://test.nghiencuukhoahoc.com.vn/api';
  constructor(private http: HttpClient) { }

  getTinh():Observable<any>{
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    const body = new URLSearchParams();
    body.set('filter','');
    body.set('isActive','');
    body.set('skipCount',String(0));
    body.set('maxResultCount',String(10));
    return this.http.post<any>(`${this.baseUrl}/master-data/tinh/get-list`,body.toString(),{headers})
  }
  updateTinh(data:any):Observable<any>{
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    return this.http.post<any>(`${this.baseUrl}/master-data/tinh/create-or-update`,data,{headers})
  }
}
