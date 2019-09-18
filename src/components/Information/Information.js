import React, { Component } from 'react';

class Information extends Component {
  constructor(props){
    super(props);

    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputValue: 'Something something something…',
      sampleArray: [
        'floor wax',
        'dessert topping',
        'Pizza Hut',
        'Taco Bell'
      ],
      anotherArray: [2, 4, 6, 8],
      number: 10
    }
  }

  handleChange = ( (event) => {
    // console.log('Hello world');    
    console.log(event.target.value);
    this.setState({ 
      inputValue: event.target.value
    });
  });

  handleClick = ( () => {
    const array = this.state.anotherArray;
    const numb = this.state.number;
    console.log('anotherArray', array);
    console.log('number', numb);
    let newArray = [...array, numb]; // spread operator for arrays
    console.log('newArray', newArray);
  });

  handleClickObject = ( () => {
    console.log('hullo from object');
    const coder = {
      name: 'Lilith',
      level: 'awesome'
    };
    const coderUpdates = {
      level: 'SUPER awesome',
      favoriteColor: 'pret-ty black'
    };
    const updatedCoder = {...coder, ...coderUpdates}; // spread operator for objects
    console.log(updatedCoder);
    
  });

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Array-O-Mat</button>
        <button onClick={this.handleClickObject}>Object-O-Mat</button><br />
        <input onChange={this.handleChange} type="text"/>
        <p>React is a {this.state.sampleArray[0]}.</p>
        <p>React is a {this.state.sampleArray[1]}.</p>
        <p>React is a combination {this.state.sampleArray[2]} and {this.state.sampleArray[3]}.</p>
        <p>React is the shining in the night without whom I cannot see.</p>
        <p>React is insurrection. React is spite. React is the force that made me be.</p>
        <p>{this.state.inputValue}</p>
        <p>In conclusion, React is a land of contrasts.</p>
      </>
    );
  }
}

export default Information;
