import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class ApiXaService {
  private base_Url='http://test.nghiencuukhoahoc.com.vn/api/master-data/xa'
  constructor(private http: HttpClient) { }
  getList(maTinh:string,maHuyen:string,skipCount:number,maxResultCount:number,filter:string):Observable<any>{
    const body={
      skipCount,
      maxResultCount,
      maTinh,
      maHuyen,
      filter
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
