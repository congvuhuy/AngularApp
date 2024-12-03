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
  getFullList(): Observable<any> {
    const data = { type: 1, cascader: '' };
    return this.http.post<any>(`http://test.nghiencuukhoahoc.com.vn/api/master-data/select-data-source/get-combo-data-source`, data);
  }
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
  createOrUpdateTinh(maTinh: string, tenTinh: string, cap: string, isActive: boolean, id: number, vungMien : number, vungDialy : number,vungSinhThai:number):Observable<any>{
    const token=localStorage.getItem('access_token')
    const body = { maTinh, tenTinh, cap, isActive, id ,vungMien,vungDialy,vungSinhThai};
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
