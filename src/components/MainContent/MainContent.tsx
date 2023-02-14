import React, { ReactNode } from "react";

import { Container } from "./MainContent.styles";

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return <Container>{children}</Container>;
};

export default MainContent;
