
export interface Products{
  productName: string,
  productCode: string,
  exprireDate: Date,
  unitSold: number,
  inStock: number,
  ProductCategoryId: number
}
export interface ProductCategories{
  name: string,
  id: number
}
export interface mien{
  maMien:number;
  tenMien:string;
}
export interface vungDiaLy{
  maVungDiaLy:number;
  tenVungDiaLy:string;
}
export interface vungsinhthai{
  maVungSinhThai:number;
  tenVungSinhThai:string;
}
