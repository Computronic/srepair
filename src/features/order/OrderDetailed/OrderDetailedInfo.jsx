import React from "react";
import { Segment, Grid, Header, Container } from "semantic-ui-react";

const OrderDetailedInfo = ({ order }) => {
  return (
    <Segment>
      {order.problem && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Problem Description" icon="bug" className="parent centered" />
            </Segment>
            <Segment attached>
              <Container textAlign="justified">
                <p>{order.problem}</p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
      {order.accesories && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Accesories" icon="coffee" className="parent centered" />
            </Segment>
            <Segment attached>
              <Container textAlign="justified">
                <p>{order.accesories}</p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
      {order.observations && (
        <Grid>
          <Grid.Column width={16}>
            <Segment attached="top" inverted color="teal" style={{ border: "none" }}>
              <Header content="Observations" icon="bullhorn" className="parent centered" />
            </Segment>
            <Segment attached>
              <Container textAlign="justified">
                <p>{order.observations}</p>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </Segment>
  );
};

export default OrderDetailedInfo;
