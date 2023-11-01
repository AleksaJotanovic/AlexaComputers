export interface User {
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  billingAddress: { country: string; city: string; street: string; zip: string; phone: string; email: string };
  shippingAddress: { country: string; city: string; street: string; zip: string; };
}