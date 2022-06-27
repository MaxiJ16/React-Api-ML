import React from "react";

import css from "./index.css";

type inputProps = {
  type: string,
  name: string
}

export function MainTextField(props: inputProps) {
  const { type, name } = props;
  return ( <input type={type} name={name} className={css.root} placeholder="Estoy buscando..."></input>);
}
