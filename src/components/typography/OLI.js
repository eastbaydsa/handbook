import styled from "styled-components";
import { red } from "../colors";

const OLI = styled.li`
  counter-increment: li;
  margin-bottom: 2rem;

  &::before {
    content: counter(li) ".";
    color: ${red};
    display: inline-block;
    font-weight: 600;
    display: inline-block;
    margin-right: 1rem;
  }
`;

export default OLI;
