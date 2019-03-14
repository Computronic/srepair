import React from "react";
import { Sidebar, Menu, Icon, Button } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

import SignedInMenu from "../Menus/SignedInMenu";
import SignedOutMenu from "../Menus/SignedOutMenu";
import NavBarChildren from "./NavBarChildren";

const NavBarMobile = ({
  authenticated,
  onPusherClick,
  onToggle,
  visible,
  signIn,
  signOut,
  children
}) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        onClick={onPusherClick}
      >
        <Menu.Item as={NavLink} to="/orders" name="Orders" />
        {authenticated && <Menu.Item as={NavLink} to="/people" name="People" />}
        {authenticated && (
          <Menu.Item>
            <Button as={Link} to="/createOrder" positive inverted content="Create Order" />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignedInMenu onPusherClick={onPusherClick} signOut={signOut} />
        ) : (
          <SignedOutMenu signIn={signIn} />
        )}
      </Sidebar>
      <Sidebar.Pusher onClick={onPusherClick} dimmed={visible} style={{ minHeight: "100vh" }}>
        <Menu inverted fixed="top">
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/support-tools.png" alt="logo" />
            S-Repair
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item onClick={onToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <NavBarChildren>{children}</NavBarChildren>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default NavBarMobile;
