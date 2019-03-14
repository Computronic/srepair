import React, { Component } from "react";
import { Segment, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class OrderListItem extends Component {
  render() {
    const { order, deleteOrder } = this.props;
    return (
      <Segment>
        <Grid celled verticalAlign="middle">
          <Grid.Row columns={3}>
            <Grid.Column>
              <div className="parent">
                <div className="common label child">Order Id:</div>
                <div className="child">{order.id}</div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="parent">
                <div className="common label child">Type:</div>
                <div className="child">{order.type}</div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="parent">
                <div className="common label child">Priority:</div>
                <div className="child">{order.priority}</div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="parent">
                <div className="common label child">Date:</div>
                <div className="child">{order.date}</div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="parent">
                <div className="common label child">Status:</div>
                {order.states && order.states.length > 0 ? (
                  <div className="child">{order.states[order.states.length - 1].state}</div>
                ) : (
                  <div />
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="parent">
                <div className="common label child">Client Name:</div>
                <div className="child">{order.clientName + " " + order.clientLastname}</div>
              </div>
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
                as={Link}
                to={`/order/${order.id}`}
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
