import React, { Component } from "react";
import Section from "../Section";
import Container from "../Container";
import Index from "../Index";

class TOC extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Index links={this.props.links} />
        </Container>
      </Section>
    );
  }
}

export default TOC;
