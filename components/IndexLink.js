import React from "react";
import styled from "styled-components";
import Link from "./Link";

import { red } from "./colors";

const Number = styled.span`
  font-weight: 700;
  color: ${red};
  margin-right: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-ttems: center;
  min-height: 30px;
  margin-bottom: 5px;

  font-size: 24px;
  text-transform: uppercase;

  &:hover {
    color: ${red};
  }
`;

function IndexLink(props) {
  return (
    <Link href={props.href}>
      <Wrapper>
        <Number>{props.number}</Number>
        <span>{props.label}</span>
      </Wrapper>
    </Link>
  );
}

export default IndexLink;
