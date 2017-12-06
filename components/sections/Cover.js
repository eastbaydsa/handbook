import React, { PureComponent } from "react";
import styled from "styled-components";
import Section from "../Section";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

class Cover extends PureComponent {
  render() {
    return (
      <Section>
        <Wrapper>
          <h1>EBDSA New Member Handbook</h1>
        </Wrapper>
      </Section>
    );
  }
}

export default Cover;
