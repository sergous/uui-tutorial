import * as products from "./data/products.json";
import * as allResults from "./data/search.json";
import { Product } from "@epam/uui-docs";

export interface ProductList {
  items: Product[];
}

export interface SearchResult {
  id: number;
  name: string;
  url: string;
  text: string;
}

export const svc = {
  getProductItems: () => Promise.resolve(products.items as Product[]),
  getFirstResults: () => allResults.items,
  getSearchResults: (searchQuery: string) => {
    const searchResults: SearchResult[] = searchQuery.length
      ? allResults.items.filter(
          (r: SearchResult) =>
            compareText(r.name, searchQuery) || compareText(r.text, searchQuery)
        )
      : allResults.items;

    return Promise.resolve(searchResults);
  },
} as any;

function compareText(source: string, query: string) {
  return source.toLowerCase().includes(query.toLowerCase().trim());
}
