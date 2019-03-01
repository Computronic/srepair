import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export class OrderForm extends Component {
  render() {
    const { cancel } = this.props;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Type</label>
            <input placeholder="Type" />
          </Form.Field>
          <Form.Field>
            <label>Priority</label>
            <input placeholder="Priority" />
          </Form.Field>
          <Form.Field>
            <label>Order Date</label>
            <input type="date" placeholder="Order Date" />
          </Form.Field>
          <Form.Field>
            <label>Client Id</label>
            <input placeholder="Client Id" />
          </Form.Field>
          <Form.Field>
            <label>Client Name</label>
            <input placeholder="Client Name" />
          </Form.Field>
          <Form.Field>
            <label>Client Phone</label>
            <input placeholder="Client Phone" />
          </Form.Field>
          <Form.Field>
            <label>Client City</label>
            <input placeholder="Client City" />
          </Form.Field>
          <Form.Field>
            <label>Client Address</label>
            <input placeholder="Client Address" />
          </Form.Field>
          <Form.Field>
            <label>Device Id</label>
            <input placeholder="Device Id" />
          </Form.Field>
          <Form.Field>
            <label>Device Description</label>
            <input placeholder="Device Description" />
          </Form.Field>
          <Form.Field>
            <label>Device Category</label>
            <input placeholder="Device Category" />
          </Form.Field>
          <Form.Field>
            <label>Observations</label>
            <input placeholder="Observations" />
          </Form.Field>
          <Form.Field>
            <label>Accesories</label>
            <input placeholder="Accesories" />
          </Form.Field>
          <Form.Field>
            <label>Parts</label>
            <input placeholder="Parts" />
          </Form.Field>
          <Form.Field>
            <label>Price Parts</label>
            <input placeholder="Price Parts" />
          </Form.Field>
          <Form.Field>
            <label>TAX Parts</label>
            <input placeholder="TAX Parts" />
          </Form.Field>
          <Form.Field>
            <label>Budget</label>
            <input placeholder="Budget" />
          </Form.Field>
          <Form.Field>
            <label>Technical Report</label>
            <input placeholder="Technical Report" />
          </Form.Field>
          <Form.Field>
            <label>Repaired by Id</label>
            <input placeholder="Repaired by Id" />
          </Form.Field>
          <Form.Field>
            <label>Repaired by Name</label>
            <input placeholder="Repaired by Name" />
          </Form.Field>
          <Form.Field>
            <label>Price Repair</label>
            <input placeholder="Price Repair" />
          </Form.Field>
          <Form.Field>
            <label>TAX Repair</label>
            <input placeholder="TAX Repair" />
          </Form.Field>
          <Form.Field>
            <label>Status</label>
            <input placeholder="Status" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default OrderForm;
