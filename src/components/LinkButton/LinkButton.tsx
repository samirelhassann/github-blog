import React, { ReactNode } from "react";

import { Button } from "./LinkButton.styles";

interface Props {
  children: ReactNode;
}

const LinkButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

export default LinkButton;
