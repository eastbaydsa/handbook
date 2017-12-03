import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SideBarSection extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  };

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default SideBarSection;
