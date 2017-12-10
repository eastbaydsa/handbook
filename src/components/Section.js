import styled from "styled-components";
import { red } from "./colors";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  min-height: 60vh;
  border-bottom: 40px solid ${red};
`;

export default Section;
