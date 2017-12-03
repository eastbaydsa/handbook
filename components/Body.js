import React, { PureComponent } from "react";
import "./Body.scss";

class Body extends PureComponent {
  render() {
    return <div className="Body">{this.props.children}</div>;
  }
}
