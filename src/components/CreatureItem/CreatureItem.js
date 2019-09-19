import React, { Component } from 'react';

class CreatureItem extends Component {
  render() {
    return (
      <>The {this.props.creature.name} is from {this.props.creature.origin}.</>
    );
  }
}

export default CreatureItem;
