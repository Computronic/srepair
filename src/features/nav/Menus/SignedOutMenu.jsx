import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Menu position="right">
      <Menu.Item>
        <Button.Group basic inverted>
          <Button onClick={signIn} content="Login" />
          <Button content="Register" />
        </Button.Group>
      </Menu.Item>
    </Menu.Menu>
  );
};

export default SignedOutMenu;
