import React, { Component } from "react";
import styled from "styled-components";
import Section from "../components/Section";
import Container from "../components/Container";
import Index from "../components/Index";
import NavAnchor from "../components/NavAnchor";
import { H2 } from "../components/typography";

const Spacer = styled.div`
  flex: 1 1 auto;
`;

const Graphic = styled.img``;

class TOC extends Component {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Section>
          <Container>
            <H2>Contents</H2>
            <Index links={this.props.links} />
            <Spacer />
            <Graphic src="/images/people-marching.svg" />
          </Container>
        </Section>
      </NavAnchor>
    );
  }
}

export default TOC;
