import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import OrderDashboard from "../../features/order/OrderDashboard/OrderDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container className="main">
          <OrderDashboard />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
