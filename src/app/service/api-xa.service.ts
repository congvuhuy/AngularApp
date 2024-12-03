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
  getList(skipCount:number,maxResultCount:number):Observable<any>{
    let headers=new HttpHeaders({
      'Authorization':`bearer ${this.token}`,
      'Content-type':'application/json'
    })
    const body={
      'filter': null,
      'isActive':null,
      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body),{headers})
  }
  delete(id:number):Observable<any>{
    let headers=new HttpHeaders({
      'Authorization':`bearer ${this.token}`,
    })
    return this.http.post<any>(`${this.base_Url}/delete-common-result/${id}`,null,{headers})
  }
  createOrUpdate(maTinh:string, maHuyen:string, maXa:string,tenxa:string,cap:string,isXaNgheo:boolean,
                 isXaMienNui:boolean,isXaDanToc:boolean,isThanhThi:boolean,isActive:boolean,id:number):Observable<any>{
    let headers=new HttpHeaders({
      'Authorization':`bearer ${this.token}`,
      'Content-type':'application/json'
    })
    const body={
      'maTinh' : maTinh,
      'maHuyen':maHuyen,
      'maXa':maXa,
      'tenxa':tenxa,
      'cap':cap,
      'isXaNgheo':isXaNgheo,
      'isXaMienNui':isXaMienNui,
      'isXaDanToc':isXaDanToc,
      'isThanhThi':isThanhThi,
      'isActive':isActive,
      'id':id,
    }
    return this.http.post<any>(`${this.base_Url}/create-or-update`,JSON.stringify(body),{headers})
  }
}
