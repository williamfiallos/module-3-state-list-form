import React, { Component } from 'react';

// STATE CAN LIVE ONLY INSIDE CLASS COMPONENT
class Counter extends Component {
  // 1st way: using constructor and don't forget to use "this" in front of state
  constructor(){
    super();
    console.log('what is: ', this);
    this.state = {
      count: 0
    }
  }

  // 2nd way: state outside of constructor, but above is best practice
  // state = {
  //   count: 0
  // }

  anyNameCounterPlus(){
    console.log('counting');
    // this.state.count=+1; ===> NEVER!
    
    // use this.setState() method when updating the state
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return (
      <div>
        <p>{ this.state.count }</p>
        <button onClick={ () => this.anyNameCounterPlus() }> + count </button>
      </div>
    )
  }
}

export default Counter;