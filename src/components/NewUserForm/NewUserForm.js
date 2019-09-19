import React, { Component } from 'react';

class NewUserForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Name:
        <input onChange={(event) => this.props.handleChangeFor(event, 'name')} type="text" /></label><br />
          <label>City:
        <input onChange={(event) => this.props.handleChangeFor(event, 'city')} type="text" /></label><br />
          <label>Zip Code:
        <input onChange={(event) => this.props.handleChangeFor(event, 'zipCode')} input-type="numeric" type="text" /></label><br />
          <button onClick={this.props.handleClick}>Clickity Submitty</button><br />
        </form>
      </div>
    );
  }
}

export default NewUserForm;
