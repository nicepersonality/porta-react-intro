import React, { Component } from 'react';

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
    }
  }

  changeName = ( (event) => {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value
      }
    })
    // console.log('changeName');
    // console.log('this.state.user', this.state.user);    
  });

  changeZip = ( (event) => {
    this.setState({
      user: {
        ...this.state.user,
        zipCode: event.target.value
      }
    })
  });

  changeCity = ( (event) => {
    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value
      }
    })
    // console.log('changeCity');
    // console.log('this.state.user', this.state.user);
  });

  handleClick = ( (event) => {
    console.log('handleClick');
    console.log('this.state.user', this.state.user);
    this.setState({
      displayUser: {...this.state.user}
    })
    event.preventDefault();
  });

  render() {
    return (
      <div>
        <form>
          <label>Name:
        <input onChange={this.changeName} type="text" /></label><br />
        <label>City:
        <input onChange={this.changeCity} type="text" /></label><br />
        <label>Zip Code:
        <input onChange={this.changeZip} input-type="numeric" type="text" /></label><br />
          <button onClick={this.handleClick}>Clickity Submitty</button><br />
        </form>
        <p>{this.state.displayUser.name} is from {this.state.displayUser.city}.</p>
      </div>
    );
  }
}

export default Form;
