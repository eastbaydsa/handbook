import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class DirectoryItem extends PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        {this.props.links.map(l => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    );
  }
}

export default DirectoryItem;
