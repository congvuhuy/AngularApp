import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiTinhHuyenXaService {

  private baseUrl = 'http://test.nghiencuukhoahoc.com.vn/api';
  constructor(private http: HttpClient) { }


  // Tỉnh
  getListTinh():Observable<any>{
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`,
      'Content-type': 'application/json'
    })
    const body={
      'filter':null,
      'isActive':null,
      'skipCount':0,
      'maxResultCount':10
    }
    return this.http.post<any>(`${this.baseUrl}/master-data/tinh/get-list`,JSON.stringify(body) ,{headers})
  }
  updateTinh(data:any):Observable<any>{
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    return this.http.post<any>(`${this.baseUrl}/master-data/tinh/create-or-update`,data,{headers})
  }
}
