import { TablePage } from "./TablePage";
import { MainPage } from "./MainPage";
import { SearchPage } from "./SearchPage";
import { ProductsPage } from "./ProductsPage";

export const menuItems = [
  { name: "Home", path: "/", component: MainPage },
  // { name: "DataTable", path: "/table", component: TablePage },
  { name: "Search", path: "/search", component: SearchPage },
  { name: "Products", path: "/products", component: ProductsPage },
];

export { TablePage, MainPage, ProductsPage };
