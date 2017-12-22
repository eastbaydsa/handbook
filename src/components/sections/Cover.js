import React, { PureComponent } from "react";
import styled from "styled-components";
import UnstyledLink from "../UnstyledLink";
import { red, purple } from "../colors";
import NavAnchor from "../NavAnchor";
import breakpoint from "../styles/breakpoint";

const Wrapper = styled(UnstyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-image: url(/images/cover.png);
  background-size: cover;
  background-position: right bottom;
  border-bottom: 40px solid ${purple};

  ${breakpoint.desktop`
    background-image: url(/images/cover@2x.png);
  `};
`;

const Title = styled.h1`
  color: ${red};
  font-weight: 700;
  font-size: 16vmin;
  text-transform: uppercase;
  text-align: center;
`;

class Cover extends PureComponent {
  render() {
    return (
      <NavAnchor anchor={this.props.anchor}>
        <Wrapper to="/toc">
          <Title>East Bay DSA New Member Handbook</Title>
        </Wrapper>
      </NavAnchor>
    );
  }
}

export default Cover;
