import React, { Component } from "react";
import { Segment, Grid, Button } from "semantic-ui-react";

export class OrderListItem extends Component {
  render() {
    const { order, onOrderOpen, deleteOrder } = this.props;
    return (
      <Segment>
        <Grid celled>
          <Grid.Row columns={3}>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Order Id: </strong>
              {order.id}
            </Grid.Column>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Type: </strong>
              {order.type}
            </Grid.Column>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Priority: </strong>
              {order.priority}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Client Name: </strong>
              {order.clientName}
            </Grid.Column>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Device: </strong>
              {order.deviceDescription}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Date: </strong>
              {order.date}
            </Grid.Column>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Status: </strong>
              {order.status}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <strong style={{ fontSize: "1.1rem" }}>Problem: </strong>
              {order.problem}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="right">
              <Button
                onClick={deleteOrder(order.id)}
                as="a"
                color="red"
                floated="right"
                content="Delete"
              />
              <Button
                onClick={onOrderOpen(order)}
                as="a"
                color="teal"
                floated="right"
                content="View"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default OrderListItem;
