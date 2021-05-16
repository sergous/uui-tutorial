import { TablePage } from "./TablePage";
import { MainPage } from "./MainPage";

export const menuItems = [
  { name: "Home", path: "/", component: MainPage },
  { name: "DataTable", path: "/table", component: TablePage },
];

export { TablePage, MainPage };
