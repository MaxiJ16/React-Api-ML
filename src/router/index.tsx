// React
import { Routes, Route } from "react-router-dom";

// Components
import { Layout } from "components/layout";

// Pages
import { Home } from "pages/home";
import { SearchResults } from "pages/results/SearchResults";
import { ItemPage } from "pages/item/Item";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/search/:query" element={<SearchResults />}></Route>
        <Route path="/item/:id" element={<ItemPage />}></Route>
      </Route>
    </Routes>
  );
}
