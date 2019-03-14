import React from "react";
import { Segment, Header, Grid, Table } from "semantic-ui-react";

const OrderDetailedHeader = ({ order }) => {
  return (
    <Segment.Group>
      <Segment textAlign="center">
        <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
          <Header content="Order Work" icon="wrench" className="parent centered" />
        </Segment>
        <Grid textAlign="center" columns={3} celled style={{ marginTop: 0, marginBottom: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <Header
                sub
                content="Order Id"
                subheader={order.id}
                className="textwrap parent centered"
                style={{ height: "100%", flexDirection: "column" }}
              />
            </Grid.Column>
            <Grid.Column>
              <Header sub content="Date" subheader={order.date} className="textwrap" />
              <Header sub content="Priority" subheader={order.priority} className="textwrap" />
            </Grid.Column>
            <Grid.Column>
              <Header sub content="Type" subheader={order.type} className="textwrap" />
              <Header
                sub
                content="Created By"
                subheader={order.createdByName}
                className="textwrap"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
          <Header content="Client Info" icon="vcard" className="parent centered" />
        </Segment>
        <Grid textAlign="center" columns={3} celled style={{ marginTop: 0, marginBottom: 0 }}>
          <Grid.Row>
            <Grid.Column>
              <Header sub content="Client Id" subheader={order.clientId} className="textwrap" />
              <Header
                sub
                content="Name"
                subheader={order.clientName + " " + order.clientLastname}
                className="textwrap"
              />
            </Grid.Column>
            <Grid.Column>
              <Header sub content="Phone" subheader={order.clientPhone} className="textwrap" />
              <Header sub content="Email" subheader={order.clientEmail} className="textwrap" />
            </Grid.Column>
            <Grid.Column>
              <Header sub content="City" subheader={order.clientCity} className="textwrap" />
              <Header sub content="Address" subheader={order.clientAddress} className="textwrap" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {order.units && order.units.length > 0 && (
          <React.Fragment>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Units Info" icon="bullseye" className="parent centered" />
            </Segment>
            <Grid textAlign="center" columns={3} celled style={{ marginTop: 0, marginBottom: 0 }}>
              {order.units.map(unit => (
                <Grid.Row key={unit.unitId}>
                  <Grid.Column>
                    <Header sub content="Unit Id" subheader={unit.unitId} className="textwrap" />
                    <Header
                      sub
                      content="Unit Description"
                      subheader={unit.unitDescription}
                      className="textwrap"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Header sub content="Brand" subheader={unit.unitBrand} className="textwrap" />
                    <Header sub content="Model" subheader={unit.unitModel} className="textwrap" />
                  </Grid.Column>
                  <Grid.Column>
                    <Header
                      sub
                      content="Serial N°"
                      subheader={unit.unitSerialNumber}
                      className="textwrap"
                    />
                    <Header
                      sub
                      content="Category"
                      subheader={unit.unitCategory}
                      className="textwrap"
                    />
                  </Grid.Column>
                </Grid.Row>
              ))}
            </Grid>
          </React.Fragment>
        )}
        {order.units && order.units.length > 0 && (
          <React.Fragment>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="States" icon="exclamation circle" className="parent centered" />
            </Segment>
            <Segment attached>
              <Table textAlign="center" celled compact unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell className="common label">Date</Table.HeaderCell>
                    <Table.HeaderCell className="common label">State</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {order.states.map((state, i) => (
                    <Table.Row key={i}>
                      <Table.Cell>{state.date}</Table.Cell>
                      <Table.Cell>{state.state}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </React.Fragment>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default OrderDetailedHeader;
