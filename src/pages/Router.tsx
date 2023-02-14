import React from "react";
import { Route, Routes } from "react-router-dom";

import DefaultHeaderLayout from "../layouts/DefaultHeaderLayout";
import Home from "./Home/Home";
import PostDetails from "./PostDetails/PostDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultHeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
