
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
export interface Account{
  accountId: number,
  fullName: string,
  phone: number,
  userName:string,
  password:string,
  roleId:number,
}
