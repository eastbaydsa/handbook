import React, { PureComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 70vh;
`;

class Cover extends PureComponent {
  render() {
    return (
      <Wrapper>
        <h1>EBDSA New Member Handbook</h1>
      </Wrapper>
    );
  }
}

export default Cover;
