import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class ApiHuyenService {
  private base_Url='http://test.nghiencuukhoahoc.com.vn/api/master-data/huyen'
  private token=localStorage.getItem('access_token')
  constructor(private http: HttpClient) {
  }
  getListByMaTinh(maTinh: string): Observable<any> {
    const data = { type: 2, cascader: maTinh };
    return this.http.post<any>(`http://test.nghiencuukhoahoc.com.vn/api/master-data/select-data-source/get-combo-data-source`, data);
  }
  getList(skipCount:number,maxResultCount:number):Observable<any>{
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${this.token}`,
      'Content-type':'application/json'
    })
    const body={
      "filter": null,
      "isActive": null,
      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body),{headers},)
  }
  createOrUpdateHuyen(maTinh: string,maHuyen:string, tenHuyen: string, cap: string, isActive: boolean, id: number):Observable<any>{
    const body = { maTinh, maHuyen,tenHuyen, cap, isActive, id };
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
    return this.http.post<any>(`${this.base_Url}/create-or-update`,body,{headers})
  }
  delete(id:number):Observable<any>{
    const headers=new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })
    return this.http.post<any>(`${this.base_Url}/delete-common-result/${id}`,null,{headers})
  }

}
