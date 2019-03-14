import React from "react";
import { connect } from "react-redux";
import { Grid, Segment, Header } from "semantic-ui-react";

import OrderDetailedHeader from "./OrderDetailedHeader";
import OrderDetailedInfo from "./OrderDetailedInfo";
import OrderDetailedSidebar from "./OrderDetailedSidebar";
import OrderDetailedReport from "./OrderDetailedReport";

const mapState = (state, ownProps) => {
  const orderId = ownProps.match.params.id;

  let order = {};

  if (orderId && state.orders.length > 0) {
    order = state.orders.filter(order => order.id === orderId)[0];
  }

  return { order };
};

const OrderDetailedPage = ({ order }) => {
  return (
    <Grid stackable>
      <Grid.Column width={12}>
        <OrderDetailedHeader order={order} />
        <OrderDetailedInfo order={order} />
        <OrderDetailedReport order={order} />
        <Segment compact floated="right" style={{ margin: 0 }}>
          <Header
            content={
              "TOTAL $" +
              (order.priceParts + order.priceRepairs + order.taxParts + order.taxRepairs).toString()
            }
          />
        </Segment>
      </Grid.Column>
      <Grid.Column width={4}>
        <OrderDetailedSidebar order={order} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(OrderDetailedPage);
