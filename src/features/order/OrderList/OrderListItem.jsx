import React, { Component } from "react";
import { Segment, Grid, Button } from "semantic-ui-react";

export class OrderListItem extends Component {
  render() {
    const { order } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Grid columns={3} celled="internally">
            <Grid.Row>
              <Grid.Column>Order Id: {order.id}</Grid.Column>
              <Grid.Column>Type: {order.type}</Grid.Column>
              <Grid.Column>Priority: {order.priority}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid columns={2} celled="internally">
            <Grid.Row>
              <Grid.Column>Client Name: {order.clientName}</Grid.Column>
              <Grid.Column>Device: {order.deviceDescription}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment secondary>Status: {order.status}</Segment>
        <Segment clearing>
          <span>Date: {order.date}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default OrderListItem;
