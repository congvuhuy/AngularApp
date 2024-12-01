import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'any'
})
export class ApiTinhService {

  private baseUrl = 'http://test.nghiencuukhoahoc.com.vn/api/master-data/tinh';
  constructor(private http: HttpClient) { }


  // Tỉnh
  getList(skipCount:number,maxResultCount:number):Observable<any>{
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`,
      'Content-type': 'application/json'
    })
    const body={
      'filter':null,
      'isActive':null,
      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.baseUrl}/get-list`,JSON.stringify(body) ,{headers})
  }
  createOrUpdateTinh(maTinh: string, tenTinh: string, cap: string, isActive: boolean, id: number):Observable<any>{
    const token=localStorage.getItem('access_token')
    const body = { maTinh, tenTinh, cap, isActive, id };
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    return this.http.post<any>(`${this.baseUrl}/create-or-update`,body,{headers})
  }
  delete(id:number):Observable<any>{
    const token=localStorage.getItem('access_token')
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${token}`,

    })
     return this.http.post<any>(`${this.baseUrl}/delete-common-result/${id}`,null,{headers});
  }
}
