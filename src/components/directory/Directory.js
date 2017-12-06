import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Directory extends PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Directory;
