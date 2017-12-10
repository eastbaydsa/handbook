import React, { Component } from "react";
import Section from "../Section";
import Container from "../Container";
import Index from "../Index";
import NavAnchor from "../NavAnchor";
import { H2 } from "../typography";

class TOC extends Component {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Contents</H2>
            <Index links={this.props.links} />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default TOC;
