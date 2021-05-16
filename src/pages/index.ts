import { TablePage } from "./TablePage";
import { MainPage } from "./MainPage";
import { SearchPage } from "./SearchPage";

export const menuItems = [
  { name: "Home", path: "/", component: MainPage },
  // { name: "DataTable", path: "/table", component: TablePage },
  { name: "Search", path: "/search", component: SearchPage },
];

export { TablePage, MainPage };
