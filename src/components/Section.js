import styled from "styled-components";
import { red } from "./colors";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  border-bottom: 40px solid ${red};
`;

export default Section;
