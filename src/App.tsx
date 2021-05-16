import React from "react";
import { MainPage, TablePage, menuItems } from "./pages";
import { Route } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import css from "./App.module.scss";

export const App = () => {
  return (
    <div className={css.app}>
      <Route component={AppHeader} />
      <main>
        {menuItems.map(({ component, path, name }) => (
          <Route path={path} exact component={component} key={name} />
        ))}
      </main>
      <footer></footer>
    </div>
  );
};
