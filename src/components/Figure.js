import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { red } from "./colors";
import breakpoint from "./styles/breakpoint";

const Fig = styled.figure`
  ${breakpoint.tablet`
    float: ${props => props.align};
    width: 30%;
  `};
`;

const Caption = styled.figcaption`
  border-right: 4px solid ${red};
  padding-right: 20px;
  text-align: right;
  color: ${red};
  font-weight: 600;
`;

class Figure extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <Fig align={this.props.align}>
        {this.props.graphic ? (
          <img src={`/images/${this.props.graphic}.svg`} alt={this.props.alt} />
        ) : null}
        <Caption>{this.props.children}</Caption>
      </Fig>
    );
  }
}

Figure.propTypes = {
  children: PropTypes.node,
  graphic: PropTypes.string,
  align: PropTypes.oneOf(["right", "left"]),
  alt: PropTypes.string
};

Figure.defaultProps = {
  align: "left"
};

export default Figure;
