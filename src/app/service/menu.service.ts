import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
export type MenuName = "account"|"product"|"dashboard";
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  $menuName = new Subject<MenuName>();
  constructor() { }
}
