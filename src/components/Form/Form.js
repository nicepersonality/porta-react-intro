import React, { Component } from 'react';
import NewUserForm from '../NewUserForm/NewUserForm';
import CurrentNewUser from '../CurrentNewUser/CurrentNewUser';
import ListAllCreatures from '../ListAllCreatures/ListAllCreatures';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    user: {
      name: '',
      city: '',
      zipCode: ''
    },
    displayUser: {
      name: 'display name',
      city: 'display city',
      zipCode: '55555'
    },
    creatureList: [
      { name: 'Unicorn', origin: 'Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Jackalope', origin: 'America' }
    ],
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value
      }
    })
  }

  handleClick = (event) => {
    console.log('handleClick');
    console.log('this.state.user', this.state.user);
    this.setState({
      displayUser: { ...this.state.user }
    })
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <NewUserForm
          handleChangeFor={this.handleChangeFor}
          handleClick={this.handleClick}
        />
        <CurrentNewUser displayUser={this.state.displayUser} />
        <ListAllCreatures creatureList={this.state.creatureList} />

        <p>Splatting to the DOM looks like this:</p>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

      </div>
    );
  }
}

export default Form;
