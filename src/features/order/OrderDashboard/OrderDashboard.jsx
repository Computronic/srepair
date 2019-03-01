import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

import OrderList from "../OrderList/OrderList";
import OrderForm from "../OrderForm/OrderForm";

const orders = [
  {
    id: "1",
    type: "Local",
    priority: "Normal",
    date: "2018-03-27T11:00:00+00:00",
    clientId: "1",
    clientName: "Pablo Barrientos",
    clientPhone: "3814400616",
    clientCity: "San Miguel de Tucumán",
    clientAddress: "Matienzo812",
    deviceId: "1",
    deviceDescription: "Notebook Bangho",
    deviceCategory: "Notebook",
    observations: "",
    accesories: "",
    parts: "",
    priceParts: "",
    taxParts: "",
    budget: "",
    report: "",
    repairedById: "1",
    repairedByName: "Pablo Barrientos",
    priceRepair: "",
    taxRepair: "",
    status: "Completed"
  },
  {
    id: "2",
    type: "Local",
    priority: "Normal",
    date: "2018-03-28T11:00:00+00:00",
    clientId: "2",
    clientName: "Laura Barrientos",
    clientPhone: "3814111222",
    clientCity: "San Miguel de Tucumán",
    clientAddress: "Matienzo812",
    deviceId: "2",
    deviceDescription: "PC Noblex",
    deviceCategory: "PC",
    observations: "",
    accesories: "",
    parts: "",
    priceParts: "",
    taxParts: "",
    budget: "",
    report: "",
    repairedById: "2",
    repairedByName: "Aldo Timo",
    priceRepair: "",
    taxRepair: "",
    status: "Completed"
  }
];

export class OrderDashboard extends Component {
  state = {
    orders: orders,
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <OrderList orders={this.state.orders} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content="Create Order" />
          {this.state.isOpen && <OrderForm cancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default OrderDashboard;
