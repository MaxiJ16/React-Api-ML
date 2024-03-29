import React, { Suspense } from "react";

import { createRoot } from "react-dom/client";

// importamos las rutas del router
import { AppRoutes } from "./router";

import { BrowserRouter } from "react-router-dom";
// Importamos RecoilRoot
import { RecoilRoot } from "recoil";

import "./index.css";

// Lugar de mi HTML donde se imprime
const container = document.getElementById("app");
const root = createRoot(container);

// App es el componente que vamos a imprimir
root.render(
  <RecoilRoot>
    <Suspense fallback={null}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
