import React from "react";
import styled from "styled-components";
import { headerHeight } from "../components/styles/layout";

const Wrapper = styled.div`
  display: flex;
  padding-left: 20px;
  height: ${headerHeight};
`;

const Spacer = styled.div`
  flex: 1 1 0;
`;

const A = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: -20px;
  padding: 0 30px;
  &:hover {
    background-color: red;
    color: white;
  }
  ${props => props.xtra};
`;
// tabletPortraitBreakpoint({
//   fontSize: "24px"
// })

function NavBar(props) {
  return (
    <Wrapper>
      <A xtra="border-right: 1px solid black" onClick={props.toggleMenu}>
        {" "}
        MENU{" "}
      </A>{" "}
      <Spacer />
      <A
        xtra="border-left: 1px solid black"
        href="http://www.eastbaydsa.org/events"
        target="_blank"
      >
        JOIN US{" "}
      </A>{" "}
    </Wrapper>
  );
}

export default NavBar;
