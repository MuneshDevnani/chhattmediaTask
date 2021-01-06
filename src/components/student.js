import React, { Component } from 'react';
import '../App.css';

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userinput: '',
      list: [],
      studentname: ''
    }
    this.changeuserinput = this.changeuserinput.bind(this);
    this.onChangeStudentname = this.onChangeStudentname.bind(this);

  }
  changeuserinput(input) {
    this.setState({
      userinput: input
    });
  }
  addToList(input) {
    if (this.state.userinput !== "") {
      let listArray = this.state.list;

      listArray.push(input)
      this.setState({
        list: listArray,
        userinput: ''
      })
    }
    else {
      console.log("please add student");
    }
  }
  removeFromList(index) {
    console.log("hello");
    let listArray = this.state.list;

    listArray.pop(index)
    //   this.setState({
    //     list: listArray,
    //     userinput: ''
    //   })
  }
  onChangeStudentname(e) {
    this.setState({
      studentname: e.target.value
    });
  }
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h3>Add Student</h3>
          </div>
          <input
            onChange={(e) => this.changeuserinput(e.target.value)}
            value={this.state.userinput}
            type="text"
            className="fadeIn second"
            name="name"
            placeholder="Add Student" />
          <div ref="userInput" className="fadeIn third"
            required
            className="select form-control"
            value={this.state.studentname}
            onChange={this.onChangeStudentname}
          >
            {
              this.state.list.map(function (std, index) {
                return <li onClick={() => this.removeFromList(std)}
                  key={index}
                  value={std}>{std}

                  <button className="btn btn-danger" onClick={() => this.removeFromList(index)}><i className="fa fa-remove" /></button>
                </li>
              })
            }
          </div>
          <button className="btn btn-primary fadeIn fourth" onClick={() => this.addToList(this.state.userinput)}>Add task</button>
        </div>
      </div>
    )
  }
}

export default Student;
