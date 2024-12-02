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
  editForm: FormGroup;

  constructor(private fb: FormBuilder, private tinhService: ApiTinhService) {
    this.editForm = this.fb.group({
      maTinh: ['', Validators.required],
      tenTinh: ['', Validators.required],
      cap: ['', Validators.required],
      isActive: [true],
      id: [0]
    });
  }
  ngOnInit(): void {
    if (this.tinhData) {
      this.editForm.patchValue(this.tinhData);
    }
  }
  update() {
    if (this.editForm.valid) {
      const { maTinh, tenTinh, cap, isActive, id } = this.editForm.value;
      this.tinhService.createOrUpdateTinh(maTinh, tenTinh, cap, isActive, id).subscribe(
        res => {
            this.closeForm.emit();
      });
    }
  }


}





