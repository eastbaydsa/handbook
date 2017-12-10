import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { red } from "./colors";
import breakpoint from "./styles/breakpoint";

const Fig = styled.figure`
  ${breakpoint.tablet`
    float: left;
    width: 30%;
  `};
`;

const Caption = styled.figcaption`
  border-right: 4px solid ${red};
  padding-right: 20px;
  text-align: right;
  color: ${red};
  font-weight: 600;
`;

class Figure extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <Fig>
        <Caption>{this.props.children}</Caption>
      </Fig>
    );
  }
}

export default Figure;
