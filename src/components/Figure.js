import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Figure extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return <figure>{this.props.children}</figure>;
  }
}

export default Figure;
