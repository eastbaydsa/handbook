import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as colors from "./colors";

const TitleWrapper = styled.span`
  margin: 0;
`;
const Title = styled.span`
  display: block;
  background-color: ${props => props.color};
  color: white;
  padding: 10px 15px 5px 15px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 15px;
`;
const Border = styled.div`
  border: 5px solid ${props => props.color};
  padding: 20px 20px 0 20px;
  margin-bottom: 30px;
`;

class SideBarSection extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    theme: PropTypes.oneOf(Object.keys(colors))
  };

  render() {
    return (
      <div>
        <TitleWrapper>
          <Title color={this.props.theme}>{this.props.title}</Title>
        </TitleWrapper>
        <Border color={this.props.theme}>{this.props.children}</Border>
      </div>
    );
  }
}

export default SideBarSection;
