// product-form.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ProductCategories, Products} from '../../model/Model';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Products | null = null;
  @Input() mode: 'add' | 'edit' = 'add';
  @Output() closeForm = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<Products>();

  productName: string = '';
  productCode: string = '';
  exprireDate: Date = new Date();
  ProductCategoryId: number = 0;
  inStock: number = 0;
  unitSold: number = 0;
  productCategories: ProductCategories[] = [];

  constructor(private proService: ProductService) {
  }
  ngOnInit() {
    this.productCategories = this.proService.getProductCategory();
    if (this.product) {
      this.productName = this.product.productName;
      this.productCode = this.product.productCode;
      this.exprireDate = this.product.exprireDate;
      this.inStock = this.product.inStock;
      this.unitSold = this.product.unitSold;
      this.ProductCategoryId = this.product.ProductCategoryId;
    }
  }

  onSubmit() {
    const product: Products = {
      productName: this.productName,
      productCode: this.productCode,
      exprireDate: this.exprireDate,
      inStock: this.inStock,
      unitSold: this.unitSold,
      ProductCategoryId:Number(this.ProductCategoryId)
    };
    this.formSubmit.emit(product);
  }

}
