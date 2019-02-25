import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "../shared/Header";
import Landing from "./LandingContainer";
import Prerequisites from "./Prerequisites";
import Receive from "./ReceiveContainer";
import ClaimReceived from "./ClaimReceivedContainer";
import Footer from "../shared/Footer";
import * as theme from "../shared/theme";
import { ContentLayout, BackButton } from "../shared/elements";
import { Container, Grid, Col } from "../shared/grid";
import Logo from "../../images/insurance-logo.png";

class Insurance extends React.Component {
  render() {
    return (<ContentLayout>
      <Header title="People Care Insurance LLC." logo={Logo} />
      <Container>
        <Switch>
          <Route path="/insurance" exact>
            <React.Fragment>
              <BackButton url="/" />
              <Landing />
            </React.Fragment>
          </Route>
          <Route path="/insurance/prerequisites" exact>
            <React.Fragment>
              <BackButton url="/insurance" />
              <Prerequisites />
            </React.Fragment>
          </Route>
          <Route path="/insurance/receive" exact component={Receive} />
          <Route path="/insurance/complete" exact>
            <React.Fragment>
              <BackButton url="/" label="Back to Home" />
              <ClaimReceived />
            </React.Fragment>
          </Route>
        </Switch>
      </Container>
      <Footer />
    </ContentLayout>)
  }
}

export default Insurance;