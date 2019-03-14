import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";

const NavBarDesktop = ({ authenticated, signOut, signIn }) => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header>
          <img src="/assets/support-tools.png" alt="logo" />
          S-Repair
        </Menu.Item>
        <Menu.Item as={NavLink} to="/orders" name="Orders" />
        {authenticated && <Menu.Item as={NavLink} to="/people" name="People" />}
        {authenticated && (
          <Menu.Item>
            <Button as={Link} to="/createOrder" positive inverted content="Create Order" />
          </Menu.Item>
        )}

        {authenticated ? (
          <Menu.Menu position="right">
            <SignedInMenu signOut={signOut} />
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <SignedOutMenu signIn={signIn} />
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  );
};

export default NavBarDesktop;
