import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import NavBarChildren from "./NavBarChildren";

export class NavBar extends Component {
  state = {
    authenticated: false,
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  handleSignIn = () => {
    this.setState({ authenticated: true });
  };

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated, visible } = this.state;
    const { children } = this.props;
    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
            authenticated={authenticated}
            signIn={this.handleSignIn}
            signOut={this.handleSignOut}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop
            authenticated={authenticated}
            signIn={this.handleSignIn}
            signOut={this.handleSignOut}
          />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

export default withRouter(NavBar);
