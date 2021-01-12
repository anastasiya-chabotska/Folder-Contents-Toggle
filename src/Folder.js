import React, { Component } from "react";

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  //change the status of toggle every time it gets clicked
  toggle() {
    this.setState({ toggleOn: !this.state.toggleOn });
  }

  render() {
    return (
      <div className="files">
        <h3>Home</h3>
        {/* return the list only if the swicth is off */}
        {this.state.toggleOn === false && (
          <ul>
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        )}
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default Folder;
