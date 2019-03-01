import React, { Component } from "react";
import { Container, Menu, Button } from "semantic-ui-react";

export class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="assets/support-tools.png" alt="logo" />
            S-Repair
          </Menu.Item>
          <Menu.Item name="Orders" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Order" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button basic inverted content="Sign Out" style={{ marginLeft: "0.5em" }} />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
