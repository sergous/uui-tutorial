import * as React from "react";
import logo from "./icons/logo.svg";
import { MainMenu, MainMenuButton } from "@epam/loveship";
import { menuItems } from "./pages";

export const AppHeader = () => {
  return (
    <MainMenu appLogoUrl={logo}>
      {menuItems.map(({ path, name }) => (
        <MainMenuButton
          key={name}
          caption={name}
          link={{ pathname: path }}
          priority={1}
          estimatedWidth={72}
        />
      ))}
    </MainMenu>
  );
};
