import * as products from "./data/products.json";
import * as searchResults from "./data/search.json";
import { Product } from "@epam/uui-docs";

export interface ProductList {
  items: Product[];
}

export interface SearchResult {
  name: string;
  url: string;
  text: string;
}

export const svc = {
  getProductItems: () => Promise.resolve(products.items as Product[]),
  searchResults: searchResults.items,
  // getSearchResults: () => Promise.resolve(searchResults),
} as any;
