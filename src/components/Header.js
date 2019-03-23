import React from 'react';
import logo from '../logo.svg';
import './Header.css';
import Title from './Title';


// function header(){
//   return (
//     <header>
//       <img src={logo} alt="react-logo" className="App-logo"/>
//       <h1>My first create-react-app!</h1>
//     </header>
//   )
// }

// the below is the same function as above just using ES6 syntax:

// const header = () => {
//   return (
//     <header>
//       <img src={logo} alt="logo" className="App-logo"/>
//       <h1>My first create-react-app!</h1>
//     </header>
//   )
//   }
// }

// FUNCTIONAL COMPONENT IS ALWAYS "STATELESS" 🚨
const header = (props) => {
  return (
    <header>
      <img src={logo} alt="logo" className="App-logo"/>
      {/* <h1>My first create-react-app!</h1> */}
      <Title callThisWhateverMessage="My first create-react-app!" />
      {/* <Title message="My first create-react-app!" /> */}
    </header>
  )
}


export default header;