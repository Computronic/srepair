import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button } from "semantic-ui-react";
import cuid from "cuid";

import { createOrder, updateOrder } from "../orderActions";

const mapState = (state, ownProps) => {
  const orderId = ownProps.match.params.id;

  let order = {
    type: "",
    priority: "",
    date: "",
    createdById: "",
    createdByName: "",
    states: [],
    clientId: "",
    clientName: "",
    clientLastname: "",
    clientPhone: "",
    clientEmail: "",
    clientCity: "",
    clientAddress: "",
    units: [],
    problem: "",
    observations: "",
    accesories: "",
    parts: [],
    priceParts: 0,
    taxParts: 0,
    budget: "",
    priceBudget: 0,
    taxBudget: 0,
    report: "",
    repairedBy: [],
    priceRepairs: 0,
    taxRepairs: 0
  };

  if (orderId && state.orders.length > 0) {
    order = state.orders.filter(order => order.id === orderId)[0];
  }

  return {
    order
  };
};

const actions = {
  createOrder,
  updateOrder
};

// const types = [
//   { key: "Local", text: "Local", value: "Local" },
//   { key: "Domicile", text: "Domicile", value: "Domicile" }
// ];

// const priorities = [
//   { key: "Normal", text: "Normal", value: "Normal" },
//   { key: "Urgent", text: "Urgent", value: "Urgent" },
//   { key: "Delayed", text: "Delayed", value: "Delayed" }
// ];

export class OrderForm extends Component {
  state = {
    order: Object.assign({}, this.props.order)
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.order.id) {
      this.props.updateOrder(this.state.order);
      this.props.history.goBack();
    } else {
      const newOrder = {
        ...this.state.order,
        id: cuid()
      };
      this.props.createOrder(newOrder);
      this.props.history.push("/orders");
    }
  };

  onInputChange = evt => {
    const newOrder = this.state.order;
    newOrder[evt.target.name] = evt.target.value;
    this.setState({ order: newOrder });
  };

  render() {
    const { order } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Type</label>
            <input
              name="type"
              onChange={this.onInputChange}
              value={order.type}
              placeholder="Type"
            />
          </Form.Field>
          <Form.Field>
            <label>Priority</label>
            <input
              name="priority"
              onChange={this.onInputChange}
              value={order.priority}
              placeholder="Priority"
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={order.date}
              type="date"
              placeholder="Date"
            />
          </Form.Field>
          <Form.Field>
            <label>Created By Id</label>
            <input
              name="createdById"
              onChange={this.onInputChange}
              value={order.createdById}
              placeholder="Crated By Id"
            />
          </Form.Field>
          <Form.Field>
            <label>Created By Name</label>
            <input
              name="createdByName"
              onChange={this.onInputChange}
              value={order.createdByName}
              placeholder="Crated By Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Client Id</label>
            <input
              name="clientId"
              onChange={this.onInputChange}
              value={order.clientId}
              placeholder="Client Id"
            />
          </Form.Field>
          <Form.Field>
            <label>Client Name</label>
            <input
              name="clientName"
              onChange={this.onInputChange}
              value={order.clientName}
              placeholder="Client Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Client Lastname</label>
            <input
              name="clientLastname"
              onChange={this.onInputChange}
              value={order.clientLastname}
              placeholder="Client Lastname"
            />
          </Form.Field>
          <Form.Field>
            <label>Client Phone</label>
            <input
              name="clientPhone"
              onChange={this.onInputChange}
              value={order.clientPhone}
              placeholder="Client Phone"
            />
          </Form.Field>
          <Form.Field>
            <label>Client Email</label>
            <input
              name="clientEmail"
              onChange={this.onInputChange}
              value={order.clientEmail}
              placeholder="Client Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Client City</label>
            <input
              name="clientCity"
              onChange={this.onInputChange}
              value={order.clientCity}
              placeholder="Client City"
            />
          </Form.Field>
          <Form.Field>
            <label>Client Address</label>
            <input
              name="clientAddress"
              onChange={this.onInputChange}
              value={order.clientAddress}
              placeholder="Client Address"
            />
          </Form.Field>
          <Form.Field>
            <label>Problem</label>
            <input
              name="problem"
              onChange={this.onInputChange}
              value={order.problem}
              placeholder="Problem"
            />
          </Form.Field>
          <Form.Field>
            <label>Observations</label>
            <input
              name="observations"
              onChange={this.onInputChange}
              value={order.observations}
              placeholder="Observations"
            />
          </Form.Field>
          <Form.Field>
            <label>Accesories</label>
            <input
              name="accesories"
              onChange={this.onInputChange}
              value={order.accesories}
              placeholder="Accesories"
            />
          </Form.Field>
          <Form.Field>
            <label>Price Parts</label>
            <input
              name="priceParts"
              onChange={this.onInputChange}
              value={order.priceParts}
              placeholder="Price Parts"
            />
          </Form.Field>
          <Form.Field>
            <label>TAX Parts</label>
            <input
              name="taxParts"
              onChange={this.onInputChange}
              value={order.taxParts}
              placeholder="TAX Parts"
            />
          </Form.Field>
          <Form.Field>
            <label>Budget</label>
            <input
              name="budget"
              onChange={this.onInputChange}
              value={order.budget}
              placeholder="Budget"
            />
          </Form.Field>
          <Form.Field>
            <label>Price Budget</label>
            <input
              name="priceBudget"
              onChange={this.onInputChange}
              value={order.priceBudget}
              placeholder="Price Budget"
            />
          </Form.Field>
          <Form.Field>
            <label>TAX Budget</label>
            <input
              name="taxBudget"
              onChange={this.onInputChange}
              value={order.taxBudget}
              placeholder="TAX Budget"
            />
          </Form.Field>
          <Form.Field>
            <label>Technical Report</label>
            <input
              name="report"
              onChange={this.onInputChange}
              value={order.report}
              placeholder="Technical Report"
            />
          </Form.Field>
          <Form.Field>
            <label>Price Repairs</label>
            <input
              name="priceRepairs"
              onChange={this.onInputChange}
              value={order.priceRepairs}
              placeholder="Price Repairs"
            />
          </Form.Field>
          <Form.Field>
            <label>TAX Repairs</label>
            <input
              name="taxRepairs"
              onChange={this.onInputChange}
              value={order.taxRepairs}
              placeholder="TAX Repairs"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(OrderForm);
