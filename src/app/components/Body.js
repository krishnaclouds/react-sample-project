import React, { Component } from 'react';

import Button from '../components/Button';
import Sharan from '../components/Sharan';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };

    this.method = this.method.bind(this);
  }

  method(value) {
    console.log("Value in Body", value);
    if (value === "hai") {
      this.setState({
        color: 'blue'
      })
    } else if (value === 'hello') {
      this.setState({
        color: 'yello'
      })
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.color}</p>
        <Button value="Bala" bodyFunction={this.method} this={this} />
        <Sharan value="sharan" bodyFunction={this.method} />

      </div>
    );
  }
}

export default Body;