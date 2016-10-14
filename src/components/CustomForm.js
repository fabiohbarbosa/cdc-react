import React, { Component } from 'react';

export default class CustomButtonSubmit extends Component {
  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.props.onSubmit} method="post">
          {this.props.children}
        </form>
      </div>
    )
  }
}
