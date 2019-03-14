import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const OrderDetailedSidebar = ({ order }) => {
  return (
    <React.Fragment>
      <Menu vertical style={{ width: "100%" }}>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        <Menu.Item as={Link} to={`/manage/order/${order.id}`}>
          Manage
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings/about">
          About Me
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings/photos">
          My Photos
        </Menu.Item>
      </Menu>
      <Menu vertical>
        <Header icon="settings" attached inverted color="grey" content="Account" />
        <Menu.Item as={NavLink} to="/settings/account">
          My Account
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default OrderDetailedSidebar;
