import React from "react";
import { Outlet } from "react-router-dom";

import { CoverImage } from "./DefaultHeaderLayout.styles";

import coverImg from "../assets/cover.svg";

const DefaultHeaderLayout = () => {
  return (
    <div>
      <CoverImage src={coverImg} alt="cover" />
      <Outlet />
    </div>
  );
};

export default DefaultHeaderLayout;
