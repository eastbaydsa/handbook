import React from "react";
import styled from "styled-components";
import IndexLink from "./IndexLink";

const Wrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  font-size: 24px;
  margin: 0 0 10px 0;
`;

function Index(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      {props.links.map((link, i) => {
        return (
          <IndexLink
            number={i + 1}
            onClick={props.onAnyLinkClicked}
            key={link.to}
            {...link}
          />
        );
      })}
    </Wrapper>
  );
}

export default Index;
