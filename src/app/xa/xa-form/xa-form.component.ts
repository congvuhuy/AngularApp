import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import {ApiTinhService} from "../../service/api-tinh.service";
import {ApiHuyenService} from "../../service/api-huyen.service";
import {ApiXaService} from "../../service/api-xa.service";

@Component({
  selector: 'app-xa-form',
  templateUrl: './xa-form.component.html',
  styleUrl: './xa-form.component.scss'
})
export class XaFormComponent implements OnInit{
  @Input xaData:any;
  @Input showForm:any;
  @Output closeForm=new EventEmitter<void>();

  createOrUpdateForm: FormGroup;

  constructor(private fb:FormBuilder, private apiTinh:ApiTinhService, private apiHuyen:ApiHuyenService, private apiXa:ApiXaService) {
    this.createOrUpdateForm=this.fb.group({

    })
  }
  ngOnInit(): void {

  }

}
