import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyOrder = {
  type: "",
  priority: "",
  date: "",
  clientId: "",
  clientName: "",
  clientPhone: "",
  clientCity: "",
  clientAddress: "",
  deviceId: "",
  deviceDescription: "",
  deviceCategory: "",
  problem: "",
  observations: "",
  accesories: "",
  parts: "",
  priceParts: "",
  taxParts: "",
  budget: "",
  report: "",
  repairedById: "",
  repairedByName: "",
  priceRepair: "",
  taxRepair: "",
  status: ""
};

export class OrderForm extends Component {
  state = {
    order: emptyOrder
  };

  componentDidMount() {
    if (this.props.selectedOrder !== null) {
      this.setState({ order: this.props.selectedOrder });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedOrder !== this.props.selectedOrder) {
      this.setState({ order: nextProps.selectedOrder || emptyOrder });
    }
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.order.id) {
      this.props.updateOrder(this.state.order);
    } else {
      this.props.createOrder(this.state.order);
    }
  };

  onInputChange = evt => {
    const newOrder = this.state.order;
    newOrder[evt.target.name] = evt.target.value;
    this.setState({ order: newOrder });
  };

  render() {
    const { handleCancel } = this.props;
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
            <label>Client Phone</label>
            <input
              name="clientPhone"
              onChange={this.onInputChange}
              value={order.clientPhone}
              placeholder="Client Phone"
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
            <label>Device Id</label>
            <input
              name="deviceId"
              onChange={this.onInputChange}
              value={order.deviceId}
              placeholder="Device Id"
            />
          </Form.Field>
          <Form.Field>
            <label>Device Description</label>
            <input
              name="deviceDescription"
              onChange={this.onInputChange}
              value={order.deviceDescription}
              placeholder="Device Description"
            />
          </Form.Field>
          <Form.Field>
            <label>Device Category</label>
            <input
              name="deviceCategory"
              onChange={this.onInputChange}
              value={order.deviceCategory}
              placeholder="Device Category"
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
            <label>Parts</label>
            <input
              name="parts"
              onChange={this.onInputChange}
              value={order.parts}
              placeholder="Parts"
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
            <label>Technical Report</label>
            <input
              name="report"
              onChange={this.onInputChange}
              value={order.report}
              placeholder="Technical Report"
            />
          </Form.Field>
          <Form.Field>
            <label>Repaired by Id</label>
            <input
              name="repairedById"
              onChange={this.onInputChange}
              value={order.repairedById}
              placeholder="Repaired by Id"
            />
          </Form.Field>
          <Form.Field>
            <label>Repaired by Name</label>
            <input
              name="repairedByName"
              onChange={this.onInputChange}
              value={order.repairedByName}
              placeholder="Repaired by Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Price Repair</label>
            <input
              name="priceRepair"
              onChange={this.onInputChange}
              value={order.priceRepair}
              placeholder="Price Repair"
            />
          </Form.Field>
          <Form.Field>
            <label>TAX Repair</label>
            <input
              name="taxRepair"
              onChange={this.onInputChange}
              value={order.taxRepair}
              placeholder="TAX Repair"
            />
          </Form.Field>
          <Form.Field>
            <label>Status</label>
            <input
              name="status"
              onChange={this.onInputChange}
              value={order.status}
              placeholder="Status"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default OrderForm;
