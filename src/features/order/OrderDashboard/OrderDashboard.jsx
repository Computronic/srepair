import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

import OrderList from "../OrderList/OrderList";
import OrderForm from "../OrderForm/OrderForm";

const orders = [
  {
    id: "1",
    type: "Local",
    priority: "Normal",
    date: "2018-03-27",
    clientId: "1",
    clientName: "Pablo Barrientos",
    clientPhone: "3814400616",
    clientCity: "San Miguel de Tucumán",
    clientAddress: "Matienzo812",
    deviceId: "1",
    deviceDescription: "Notebook Bangho",
    deviceCategory: "Notebook",
    problem: "Enciende y no arranca",
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
    date: "2018-03-28",
    clientId: "2",
    clientName: "Laura Barrientos",
    clientPhone: "3814111222",
    clientCity: "San Miguel de Tucumán",
    clientAddress: "Matienzo812",
    deviceId: "2",
    deviceDescription: "PC Noblex",
    deviceCategory: "PC",
    problem: "Pantalla Azul",
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
    isOpen: false,
    slectedOrder: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedOrder: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleUpdateOrder = updatedOrder => {
    this.setState({
      orders: this.state.orders.map(order => {
        if (order.id === updatedOrder.id) {
          return Object.assign({}, updatedOrder);
        } else {
          return order;
        }
      }),
      isOpen: false,
      selectedOrder: null
    });
  };

  handleOpenOrder = orderToOpen => () => {
    this.setState({
      selectedOrder: orderToOpen,
      isOpen: true
    });
  };

  handleCreateOrder = newOrder => {
    newOrder.id = this.state.orders.length + 1;
    const updatedOrders = [...this.state.orders, newOrder];
    this.setState({
      orders: updatedOrders,
      isOpen: false
    });
  };

  handleDeleteOrder = orderId => () => {
    const updatedOrders = this.state.orders.filter(o => o.id !== orderId);
    this.setState({
      orders: updatedOrders
    });
  };

  render() {
    const { selectedOrder } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <OrderList
            deleteOrder={this.handleDeleteOrder}
            onOrderOpen={this.handleOpenOrder}
            orders={this.state.orders}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content="Create Order" />
          {this.state.isOpen && (
            <OrderForm
              updateOrder={this.handleUpdateOrder}
              selectedOrder={selectedOrder}
              createOrder={this.handleCreateOrder}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default OrderDashboard;
