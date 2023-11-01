export interface Order {
  _id: string;
  number: string;
  user_id: string;
  username: string;
  usernote: string;
  seller_id: string;
  seller_name: string;
  delivery_id: string;
  delivery_name: string;
  pcBuild: boolean;
  pcBuildName: string;
  date: string;
  status: string;
  paid: boolean;
  billing: { country: string; city: string; street: string; zip: string; phone: string; email: string; };
  shipping: { country: string; city: string; street: string; zip: string; };
  items: { product_id: string; image: string, name: string, price: number, quantity: number, weight: number }[];
  weight: number;
  subtotal: number;
  shippingCost: number;
  grandTotal: number;
}

