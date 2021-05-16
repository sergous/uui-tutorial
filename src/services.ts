import * as products from "./data/products.json";
import { Product } from "@epam/uui-docs";

export interface ProductList {
  items: Product[];
}

export const svc = {
  getProductItems: () => Promise.resolve(products.items as Product[]),
} as any;
