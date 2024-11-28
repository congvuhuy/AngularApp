import {Component, OnInit,input,output} from '@angular/core';
import {ProductCategories, Products} from "../../model/Model";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  productSource: Products[] = [];
  productCategorySource: ProductCategories[] = [];
  getProductCategoryName(categoryId: number): string { return this.prService.getCategoryNameById(categoryId); }

  constructor(private prService: ProductService) {
    this.productSource = this.prService.listProduct
    this.productCategorySource=this.prService.listProductsCategory
  }

  ngOnInit() {
    this.loadProducts();
    this.loadProductCategory();
  }
  loadProducts() {
    this.productSource = this.prService.getProducts();
  };
  loadProductCategory() {
    this.productCategorySource = this.prService.getProductCategory();
  }

  //show product
  // showForm = false;
  // selectedProduct: Products | null = null;
  // formMode: 'add' | 'edit' = 'add';

  // openForm(mode: 'add' | 'edit', product: Products | null = null) {
  //   this.showForm = true;
  //   this.formMode = mode;
  //   this.selectedProduct = product;
  // }
  //
  // closeForm() { this.showForm = false; this.selectedProduct = null; }
  //
  // handleFormSubmit(product: Products) {
  //   if (this.formMode === 'add') {
  //     this.prService.addProduct(product);
  //   } else if (this.formMode === 'edit') {
  //     this.prService.updateProduct(product);
  //   }
  //   this.productSource = this.prService.getProducts();
  //   this.closeForm();
  // }
  deleteProductCategory(productCategoryId: number) {
    this.prService.deleteProductCategory(productCategoryId);
    this.prService.deleteProdcutByCateId(productCategoryId);
    this.loadProducts();
    this.loadProductCategory();
  }
  //product
  //show product
  showForm = false;
  selectedProduct: Products | null = null;
  formMode: 'add' | 'edit' = 'add';

  openForm(mode: 'add' | 'edit', product: Products | null = null) {
    this.showForm = true;
    this.formMode = mode;
    this.selectedProduct = product;
  }

  closeForm() { this.showForm = false; this.selectedProduct = null; }

  handleFormSubmit(product: Products) {
    if (this.formMode === 'add') {

      this.prService.addProduct(product);
    } else if (this.formMode === 'edit') {

      this.prService.updateProduct(product);
    }
    this.productSource = this.prService.getProducts();
    this.closeForm();
  }
  deleteProduct(productCode: string) {
    this.prService.deleteProduct(productCode.toString())
    this.loadProducts()
    // let element = document.getElementById(`pro${productCode}`)
    // if (element) {
    //   element.remove();
    // }else {
    //   alert("Lỗi")
    // }

  }

// Lấy tên danh mục sản phẩm

}
