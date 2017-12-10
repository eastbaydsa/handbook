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
    if (this.props.anchor === undefined) {
      return;
    }
    const currentPath = `/${this.props.anchor}`;
    this.context.router.history.replace(currentPath, { scroll: false });
  };

  render() {
    return (
      <Waypoint
        scrollableAncestor={window}
        topOffset="10%"
        bottomOffset="40%"
        onEnter={this.updateBrowserHistory}
        fireOnRapidScroll={false}
      >
        <div>
          <Anchor id={this.props.anchor} />
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};

NavAnchor.propTypes = {
  section: PropTypes.string,
  candidate: PropTypes.string
};

export default NavAnchor;
