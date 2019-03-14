import React from "react";
import { Segment, Grid, Header, Container, Table, Responsive } from "semantic-ui-react";

const OrderDetailedReport = ({ order }) => {
  return (
    <Segment>
      {order.budget && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Budget" icon="usd" className="parent centered" />
            </Segment>
            <Segment attached clearing>
              <Segment>
                <Container textAlign="justified">
                  <p>{order.budget}</p>
                </Container>
              </Segment>
              <Segment compact floated="right" style={{ margin: 0 }}>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Price</div>
                  <div className="child">$ {order.priceBudget}</div>
                </div>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Tax</div>
                  <div className="child">$ {order.taxBudget}</div>
                </div>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Total</div>
                  <div className="child">$ {order.priceBudget + order.taxBudget}</div>
                </div>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
      {order.report && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Technical Report" icon="first aid" className="parent centered" />
            </Segment>
            <Segment attached>
              <Container textAlign="justified">
                <p>{order.report}</p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
      {order.parts && order.parts.length > 0 && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Spare Parts" icon="list ol" className="parent centered" />
            </Segment>
            <Segment attached clearing>
              <Table celled unstackable>
                <Table.Header>
                  <Table.Row textAlign="center">
                    <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth}>
                      Code
                    </Responsive>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth}>
                      Rate
                    </Responsive>
                    <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth}>
                      Tax
                    </Responsive>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {order.parts.map((part, i) => (
                    <Table.Row key={i}>
                      <Responsive
                        as={Table.Cell}
                        collapsing
                        minWidth={Responsive.onlyTablet.minWidth}
                      >
                        {part.code}
                      </Responsive>
                      <Table.Cell collapsing textAlign="center">
                        {part.quantity}
                      </Table.Cell>
                      <Table.Cell>{part.item}</Table.Cell>
                      <Responsive
                        as={Table.Cell}
                        collapsing
                        minWidth={Responsive.onlyTablet.minWidth}
                      >
                        $ {part.rate}
                      </Responsive>
                      <Responsive
                        as={Table.Cell}
                        collapsing
                        minWidth={Responsive.onlyTablet.minWidth}
                      >
                        $ {part.tax}
                      </Responsive>
                      <Table.Cell collapsing>$ {part.amount}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Segment compact floated="right" style={{ margin: 0 }}>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Price Parts</div>
                  <div className="child">$ {order.priceParts}</div>
                </div>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Tax Parts</div>
                  <div className="child">$ {order.taxParts}</div>
                </div>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Total</div>
                  <div className="child">$ {order.priceParts + order.taxParts}</div>
                </div>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
      {order.repairedBy && order.repairedBy.length > 0 && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Repaired By" icon="users" className="parent centered" />
            </Segment>
            <Segment attached clearing>
              <Table celled unstackable>
                <Table.Header>
                  <Table.Row textAlign="center">
                    <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth}>
                      Id
                    </Responsive>
                    <Table.HeaderCell>Technician</Table.HeaderCell>
                    <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth}>
                      Price
                    </Responsive>
                    <Responsive as={Table.HeaderCell} minWidth={Responsive.onlyTablet.minWidth}>
                      Tax
                    </Responsive>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {order.repairedBy.map((tech, i) => (
                    <Table.Row key={i}>
                      <Responsive
                        as={Table.Cell}
                        collapsing
                        minWidth={Responsive.onlyTablet.minWidth}
                      >
                        {tech.technicianId}
                      </Responsive>
                      <Table.Cell>{tech.technician}</Table.Cell>
                      <Responsive
                        as={Table.Cell}
                        collapsing
                        minWidth={Responsive.onlyTablet.minWidth}
                      >
                        $ {tech.price}
                      </Responsive>
                      <Responsive
                        as={Table.Cell}
                        collapsing
                        minWidth={Responsive.onlyTablet.minWidth}
                      >
                        $ {tech.tax}
                      </Responsive>
                      <Table.Cell collapsing>$ {tech.amount}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Segment compact floated="right" style={{ margin: 0 }}>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Price Repairs</div>
                  <div className="child">$ {order.priceRepairs}</div>
                </div>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Tax Repairs</div>
                  <div className="child">$ {order.taxRepairs}</div>
                </div>
                <div className="parent" style={{ justifyContent: "flex-end" }}>
                  <div className="common label child">Total</div>
                  <div className="child">$ {order.priceRepairs + order.taxRepairs}</div>
                </div>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </Segment>
  );
};

export default OrderDetailedReport;
