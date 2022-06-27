import React from "react";
// Outlet es un componente que le indica a un componente padre de otras rutas donde tiene que mostrar el componente hijo
import { Outlet } from "react-router-dom";
// importamos SearchForm
import { SearchForm } from "components/search-form/SearchForm";

import css from "./index.css";

export function Layout() {
  return (
    <div >
      <header className={css.layout}>
        <SearchForm />
      </header>
      <Outlet />
    </div>
  );
}
