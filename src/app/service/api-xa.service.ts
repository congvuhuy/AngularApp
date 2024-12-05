import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class ApiXaService {
  private base_Url='http://test.nghiencuukhoahoc.com.vn/api/master-data/xa'
  private token=localStorage.getItem('access_token')
  constructor(private http: HttpClient) { }
//getList
  getListByFilter(filter:string,skipCount:number,maxResultCount:number): Observable<any> {
    const body={
      filter,
      'isActive':null,
      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body) )
  }
  getListByMaTinh(maTinh:string):Observable<any>{
    const body={
      'skipCount':0,
      'maxResultCount':1000,
      'maTinh':maTinh,
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body),)
  }
  //
  getListByMaHuyenMaTinh(maTinh:string, maHuyen:string):Observable<any>{
    const body={
      'skipCount':0,
      'maxResultCount':1000,
      'maTinh':maTinh,
      'maHuyen':maHuyen
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body),)
  }
  getList(skipCount:number,maxResultCount:number):Observable<any>{
    const body={

      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body),)
  }
  //delete
  delete(id:number):Observable<any>{

    return this.http.post<any>(`${this.base_Url}/delete-common-result/${id}`,null,)
  }
  //create or Update
  createOrUpdate(data:{}):Observable<any>{
    return this.http.post<any>(`${this.base_Url}/create-or-update`,JSON.stringify(data))
  }
}
