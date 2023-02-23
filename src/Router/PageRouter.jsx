import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollHeader } from "../components/organisms/ScrollHeader";

import { About } from "../components/pages/About";
import { Home } from "../components/pages/Home";
import { MySite } from "../components/pages/MySite";
import { NoMatch } from "../components/pages/NoMatch";

export const PageRouter = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<ScrollHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mysite" element={<MySite />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
});
