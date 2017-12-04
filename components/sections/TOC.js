import React, { Component } from "react";
import Section from "../Section";
import Container from "../Container";
import Link from "../Link";

class TOC extends Component {
  render() {
    return (
      <Section>
        <Container>
          <nav>
            <Link />
          </nav>
        </Container>
      </Section>
    );
  }
}

export default TOC;
