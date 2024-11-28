import { Injectable } from '@angular/core';
import {Products} from "../model/Model";
import {ProductCategories} from "../model/Model";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProductsCategory : ProductCategories[]=[{
      id:1,
      name:"loai 1"
  },{
    id:2,
    name:"loai 2"
  }
  ];
  listProduct: Products[]=[{
    productName:"SanPham 1",
    productCode:"sp001",
    exprireDate: new Date(),
    ProductCategoryId:1,
    inStock:200,
    unitSold: 4000
  },
    {
      productName:"SanPham 2",
      productCode:"sp002",
      exprireDate: new Date(),
      ProductCategoryId:2,
      inStock:200,
      unitSold: 4000
    },
    {
      productName:"SanPham 3",
      productCode:"sp003",
      exprireDate: new Date(),
      ProductCategoryId:1,
      inStock:200,
      unitSold: 4000
    },
    {
      productName:"SanPhham 4",
      productCode:"sp004",
      exprireDate: new Date(),
      ProductCategoryId:2,
      inStock:200,
      unitSold: 4000
    }


  ];

  constructor() { }
  // Create
  addProductCategory(productCategoryItem: ProductCategories): ProductCategories[] {
    this.listProductsCategory.push(productCategoryItem);
    return this.listProductsCategory;
  }
  // Read
  getProductCategory(): ProductCategories[] {
    return this.listProductsCategory;
  }
  // Update
  updateProductCategory(productCategoryItem: ProductCategories): ProductCategories[] {
    const index = this.listProductsCategory.findIndex(p => p.id === productCategoryItem.id);
    if (index !== -1) {
      this.listProductsCategory[index] = productCategoryItem;
    }
    return this.listProductsCategory;
  }
  // Delete
  deleteProductCategory(id: number): ProductCategories[] {
    this.listProductsCategory = this.listProductsCategory.filter(p => p.id !== id);
    return this.listProductsCategory;
  }
  //product
  // Create
  addProduct(product: Products): Products[] {
    this.listProduct.push(product);
    return this.listProduct;
  }
  // Read
  getProducts(): Products[] {
    return this.listProduct;
  }
  // Update
  updateProduct(product: Products): Products[] {
    const index = this.listProduct.findIndex(p => p.productCode === product.productCode);
    if (index !== -1) {
      this.listProduct[index] = product;
    }
    return this.listProduct;
  }
  // Delete
    deleteProdcutByCateId(cateId :number):Products[]{
    this.listProduct=this.listProduct.filter(p=>p.ProductCategoryId!==cateId)
    return this.listProduct;
  }
  deleteProduct(productCode: string): Products[] {
    this.listProduct = this.listProduct.filter(p => p.productCode !== productCode);
    return this.listProduct;
  }
  getCategoryNameById(categoryId: number): string {
    const category = this.listProductsCategory.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }
}
