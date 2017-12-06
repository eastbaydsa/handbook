import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Waypoint from "react-waypoint";

const Anchor = styled.div`
  position: relative;
  top: -100px;
`;

class NavAnchor extends Component {
  updateBrowserHistory = () => {
    // console.log(Router.replace);
    // Router.replace(`#${this.props.anchor}`);
  };

  render() {
    if (typeof window === "undefined") {
      return null;
    }
    return (
      <Waypoint
        scrollableAncestor={window}
        topOffset="40%"
        bottomOffset="40%"
        onEnter={this.updateBrowserHistory}
        fireOnRapidScroll={false}
      >
        <Anchor id={this.props.anchor} />
      </Waypoint>
    );
  }
}

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};

NavAnchor.propTypes = {
  anchor: PropTypes.string
};

export default NavAnchor;
