import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  // grid-template-columns: 100%;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 1fr;
  grid-gap: 40px;
`;

class Directory extends PureComponent {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}

export default Directory;
