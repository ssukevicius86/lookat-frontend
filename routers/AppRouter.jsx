import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Clasicas, Populares, Proximas, Home } from "../src/pages";
import AuthLayout from "../src/layouts/AuthLayout/AuthLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/proximas" element={<Proximas />} />
          <Route path="/clasicas" element={<Clasicas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
