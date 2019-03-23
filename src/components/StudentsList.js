import React, { Component } from 'react';


class StudentsList extends Component {
  constructor(){
    super();
    this.state = {
      students: ["Camilo", "Chris", "Will", "Miller"]
    }
  }

  addStudent(){
    const newStudent = prompt("What is the student's name?");
    // 🚨🚨🚨🚨 big no no 🚨🚨🚨🚨🚨 => don't mutate the state 
    // this.state.students.unshift(newStudent);

    const { students } = this.state;

    // 1st step: make a copy of the array
    const studentsCopy = [...students];
    
    // 2nd step: modify the copy of the array
    studentsCopy.unshift(newStudent);

    // 3rd step: set the state of the original array to the new array
    this.setState({
      students: studentsCopy
    })
  }

  deleteStudent(whichOne) {
    console.log('which: ', whichOne);
    const { students } = this.state;

    // 1st step: make a copy of the array
    const studentsCopy = [...students];

    // 2nd step: remove element from the array
    // whichOne is the index and "1" stands for number of elements to be removed
    studentsCopy.splice(whichOne, 1); 

    // 3rd step: update the state with the new array
    this.setState({
      students: studentsCopy
    })
  } 

  render(){
    const { students } = this.state; // <= remember destructuring from module 2, it's the same as:
    // const students = this.state.students;

    return(
      <div>
        <button onClick={ () => this.addStudent() }>Add new student</button>
        <ul>
          { students.map((oneStudent, index) => {
            return(
              // key prop needs to be unique: in this case we use "index",
              // in some other that's going to be _id from the DB, or something similar
              <li key={ index }> 
                { oneStudent } 
                <button onClick={ () => this.deleteStudent(index) }>Delete</button>
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}

export default StudentsList;