import React from "react";
import { Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedInMenu = ({ signOut, onPusherClick }) => {
  const trigger = (
    <span>
      <Image avatar spaced="right" src="/assets/user.png" /> Username
    </span>
  );
  return (
    <Dropdown item trigger={trigger}>
      <Dropdown.Menu onClick={onPusherClick}>
        <Dropdown.Item text="Create Event" icon="plus" />
        <Dropdown.Item text="My Events" icon="calendar" />
        <Dropdown.Item text="My Network" icon="users" />
        <Dropdown.Item text="My Profile" icon="user" />
        <Dropdown.Item as={Link} to="/settings" text="Settings" icon="settings" />
        <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SignedInMenu;
