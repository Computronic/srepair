import React, { Component } from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

export class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
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
              <Button
                as={Link}
                to="/createOrder"
                floated="right"
                positive
                inverted
                content="Create Order"
              />
            </Menu.Item>
          )}

          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
