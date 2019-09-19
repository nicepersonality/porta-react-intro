import React, { Component } from 'react';
import CreatureItem from '../CreatureItem/CreatureItem';

class ListAllCreatures extends Component {
  render() {
    return (
      <ul>
        {this.props.creatureList.map(
          creature => <li key={creature.name}><CreatureItem creature={creature} /></li>
        )}
      </ul>
    );
  }
}

export default ListAllCreatures;
