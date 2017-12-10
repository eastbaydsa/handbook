import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: ${props => props.align};
  margin: 21px;
  overflow: hidden;
`;

const Img = styled.img`
  display: inline;
  height: auto;
  width: 100%;
  max-width: ${props => props.maxWidth};
`;

class Graphic extends Component {
  static defaultProps = {
    align: "left"
  };
  render() {
    return (
      <Wrapper align={this.props.align}>
        <Img
          maxWidth={this.props.maxWidth}
          align={this.props.align}
          src={`/images/${this.props.name}.svg`}
          alt={this.props.alt}
        />
      </Wrapper>
    );
  }
}

export default Graphic;
