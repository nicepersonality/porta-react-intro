import React, { Component } from 'react';

class ListAllCreatures extends Component {
  render() {
    const listItemCreatures = this.props.creatureList.map((creature) =>
      (<li key={creature.name}>
        The {creature.name} is from {creature.origin}.
      </li>)
    );
    return (
      <ul>
        {listItemCreatures}
      </ul>
    );
  }
}

export default ListAllCreatures;
