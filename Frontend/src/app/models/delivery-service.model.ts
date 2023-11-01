export interface DeliveryService {
  _id: string;
  name: string;
  pricelist: { weight: string, price: number }[];
}