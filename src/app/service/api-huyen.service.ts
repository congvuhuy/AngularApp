import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable, skip} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class ApiHuyenService {
  private base_Url='http://test.nghiencuukhoahoc.com.vn/api/master-data/huyen'
  private token=localStorage.getItem('access_token')
  constructor(private http: HttpClient) {
  }
  //
  getListByMaTinh(maTinh: string,skipCount:number,maxResultCount:number): Observable<any> {
    const body = {
      "maTinh": maTinh,
      skipCount,
      maxResultCount
    };
    return this.http.post<any>(`${this.base_Url}/get-list`,body,);
  }
  //
  getList(maTinh:string,filter:string,skipCount:number,maxResultCount:number):Observable<any>{
    const body={
      maTinh,
      filter,
      "isActive": null,
      skipCount,
      maxResultCount
    }
    return this.http.post<any>(`${this.base_Url}/get-list`,JSON.stringify(body),)
  }
  createOrUpdateHuyen(huyenDto:{}):Observable<any>{

    return this.http.post<any>(`${this.base_Url}/create-or-update`,huyenDto,)
  }
  delete(id:number):Observable<any>{

    return this.http.post<any>(`${this.base_Url}/delete-common-result/${id}`,null,)
  }

}
