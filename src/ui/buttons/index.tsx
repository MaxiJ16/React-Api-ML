import React from "react";

import css from "./index.css";

export function MainButton({ children }) {
  return <button className={css["search-btn"]}>{children}</button>;
}

export function ProductButton({ children }) {
  return (
    <button className={css["product-btn"]}>
      <a href={children} className={css["product-lnk"]}>
        Ver producto
      </a>
    </button>
  );
}
