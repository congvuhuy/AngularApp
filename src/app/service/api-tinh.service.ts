import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'any'
})
export class ApiTinhService {

  private baseUrl = 'http://test.nghiencuukhoahoc.com.vn/api/master-data/tinh';
  constructor(private http: HttpClient) { }

  getListByFilter(filter:string,skipCount:number,maxResultCount:number): Observable<any> {
    const body={
      filter,
      'isActive':null,
      skipCount:0,
      maxResultCount:10
    }
    return this.http.post<any>(`${this.baseUrl}/get-list`,JSON.stringify(body) )
  }

  getFullList(): Observable<any> {
    const token=localStorage.getItem('access_token')

    const body={
      'filter':null,
      'isActive':null,
      skipCount:0,
      maxResultCount:1000
    }
    return this.http.post<any>(`${this.baseUrl}/get-list`,JSON.stringify(body))
  }
  getList(skipCount:number,maxResultCount:number):Observable<any>{
    const token=localStorage.getItem('access_token')
    // const headers=new HttpHeaders({
    //   'Authorization':`Bearer ${token}`,
    //   'Content-type': 'application/json'
    // })
    const body={
      'filter':null,
      'isActive':null,
      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.baseUrl}/get-list`,JSON.stringify(body) )
  }
  createOrUpdateTinh(data:{}):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/create-or-update`,data,)
  }
  delete(id:number):Observable<any>{
    const token=localStorage.getItem('access_token')

     return this.http.post<any>(`${this.baseUrl}/delete-common-result/${id}`,null,);
  }
}
