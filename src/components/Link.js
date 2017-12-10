import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { red, white, black } from "./colors";

const Wrapper = styled.span`
  position: relative;
  display: inline-block;

  &:hover {
    background-color: ${props => props.highlight};
    z-index: 3;
  }
`;

const linkStyles = css`
  position: relative;
  padding: 0 2px;
  text-decoration: none;
  color: ${props => props.color};
  text-shadow: -1px -1px 0 ${props => props.background},
    1px -1px 0 ${props => props.background},
    -1px 1px 0 ${props => props.background},
    1px 1px 0 ${props => props.background};
  z-index: 2;

  &:hover {
    text-shadow: none;
    color: ${props => props.hoverColor};
  }
`;

const ReactRouterLink = styled(Link)`
  ${linkStyles};
`;

const DOMLink = styled.a`
  ${linkStyles};
`;

const Underline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid ${props => props.highlight};
  z-index: 1;
`;

class StyledLink extends Component {
  static defaultProps = {
    background: white,
    hoverColor: white,
    color: black,
    highlight: red,
    href: ""
  };
  render() {
    return (
      <Wrapper
        background={this.props.background}
        highlight={this.props.highlight}
      >
        {this.props.to ? (
          <ReactRouterLink
            color={this.props.color}
            background={this.props.background}
            hoverColor={this.props.hoverColor}
            to={this.props.to}
          >
            {this.props.children}
          </ReactRouterLink>
        ) : (
          <DOMLink
            color={this.props.color}
            background={this.props.background}
            hoverColor={this.props.hoverColor}
            href={this.props.href}
            target={this.props.href.match("http") ? "_black" : "_self"}
          >
            {this.props.children}
          </DOMLink>
        )}
        <Underline highlight={this.props.highlight} />
      </Wrapper>
    );
  }
}

export default StyledLink;
