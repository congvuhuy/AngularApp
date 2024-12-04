import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiTinhService} from "../../service/api-tinh.service";

@Component({
  selector: 'app-form-tinh',
  templateUrl: './form-tinh.component.html',
  styleUrl: './form-tinh.component.scss'
})
export class FormTinhComponent {
  @Input() tinhData: any;
  @Input() showForm: any;
  @Output() closeForm = new EventEmitter<void>();
  // @Output() closeForm = new EventEmitter<void>();
  createOrEditForm: FormGroup;

  constructor(private fb: FormBuilder, private tinhService: ApiTinhService) {
    this.createOrEditForm = this.fb.group({
      maTinh: ['', Validators.required],
      tenTinh: ['', Validators.required],
      cap: ['', Validators.required],
      isActive: [true],
      id: [0],
      vungMien:[0],
      vungDiaLy:[0],
      vungSinhThai:[0]
    });
  }
  ngOnInit(): void {
    if (this.tinhData) {
      this.createOrEditForm.patchValue(this.tinhData);
      console.log(this.tinhData)
    }
  }
  createOrUpdate() {
    let tinhDto={
      'maTinh':'',
      'tenTinh':'',
      'cap':'',
      'isActive':[],
      'id':[],
      'vungMien':[],
      'vungDialy': [],
      'vungSinhThai':[],
    }
    if (this.createOrEditForm.valid) {

      tinhDto = this.createOrEditForm.value;
      console.log(this.createOrEditForm.value)
      this.tinhService.createOrUpdateTinh(tinhDto).subscribe(
        res => {
            this.closeForm.emit();
      });
    }
  }


}





