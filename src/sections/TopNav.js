import React, { Component } from "react";
import styled from "styled-components";

import Index from "../components/Index";
import TopNavBar from "./TopNavBar";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  background-color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -1px;
  z-index: 5;
`;

const Menu = styled.div`
  border-top: 1px solid black;
  padding-top: 10px;
`;

class TopNav extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    window.document.addEventListener("click", this.closeIfClickOutside);
  }

  componentWillUnmount() {
    window.document.removeEventListener("click", this.closeIfClickOutside);
  }

  storeElRef = componentElement => {
    this.setState({
      el: componentElement
    });
  };

  closeIfClickOutside = event => {
    if (!this.state.el) {
      return;
    }
    if (
      this.state.el === event.target ||
      this.state.el.contains(event.target)
    ) {
      return;
    }
    this.closeMenu();
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeMenu = () => {
    this.setState({
      isOpen: false
    });
  };

  renderMenu() {
    return (
      <Menu>
        <Index
          title="New Member Handbook"
          links={this.props.links}
          onAnyLinkClicked={this.closeMenu}
        />{" "}
      </Menu>
    );
  }

  render() {
    return (
      <Nav innerRef={this.storeElRef}>
        {" "}
        <TopNavBar
          isOpen={this.state.isOpen}
          toggleMenu={this.toggleMenu}
        />{" "}
        {this.state.isOpen ? this.renderMenu() : null}{" "}
      </Nav>
    );
  }
}

export default TopNav;
