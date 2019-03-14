import React from "react";
import { Container } from "semantic-ui-react";

const NavBarChildren = ({ children }) => {
  return <Container className="main">{children}</Container>;
};

export default NavBarChildren;
