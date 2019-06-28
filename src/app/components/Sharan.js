import React, { Component } from 'react';

class Sharan extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    // this.fn = this.fn.bind(this);
  }
  fn (event) {
    console.log(event.target.value)
    this.props.bodyFunction(event.target.value)
  }

  render() {
    console.log(this.props);
    return (
      <button type="button" value="hello" onClick={(event) => this.fn(event)}>{this.props.value}</button>
    );
  }
}

export default Sharan;