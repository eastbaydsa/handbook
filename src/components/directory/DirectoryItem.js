import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../Link";
import { red, purple } from "../colors";

const Wrapper = styled.div`
  background-color: ${purple};
  color: white;
  padding: 20px;
  // margin: 0 10px 10px 0;
  flex: 1 1 calc(40% - 20px);

  &:nth-child(4n),
  &:nth-child(4n + 1) {
    background-color: ${red};
  }

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
`;

class DirectoryItem extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.text}</Title>
        {this.props.links.map(l => (
          <StyledLink key={l.href} to={l.href}>
            {l.label}
          </StyledLink>
        ))}
      </Wrapper>
    );
  }
}

export default DirectoryItem;
