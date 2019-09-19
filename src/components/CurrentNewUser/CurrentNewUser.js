import React, { Component } from 'react';

class CurrentNewUser extends Component {

  render() {
    return (
        <div id="CurrentNewUser">
        <p>{this.props.displayUser.name} is from {this.props.displayUser.city}, {this.props.displayUser.zipCode}.</p>
        </div>
    );
  }
}

export default CurrentNewUser;
