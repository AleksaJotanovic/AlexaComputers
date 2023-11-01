export interface Product {
  _id: string;
  category_id: string;
  categoryName: string;
  name: string;
  manufacturer: string;
  uom: string;
  sku: string;
  regularPrice: number;
  taxClass: string;
  salePrice: number;
  images: string[];
  specifications: { spec: string; value: string }[];
  inStock: number;
  weight: number;
  garantee: string;
  published: boolean;
}