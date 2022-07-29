import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCatagory = this.onChangeCatagory.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePatterned = this.onChangePatterned.bind(this);


    this.state = {
      username: '',
      description: '',
      catagory: '',
      priority: 0,
      date: new Date(),
      patterned: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: ['test user hardcoded'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeCatagory(e) {
    this.setState({
      catagory: e.target.value
    })
  }

  onChangePriority(e) {
    this.setState({
      priority: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangePatterned(e) {
    this.setState({
      patterned: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const todo = {
      username: this.state.username,
      description: this.state.description,
      catagory: this.state.catagory,
      priority: this.state.priority,
      date: this.state.date,
      patterned: this.state.patterned

    }

    console.log(todo)

    window.location = '/';
  }

  render() {
    return (
      <div>
      <h3>New To Do</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Catagory: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Priority: </label>
          <input 
              type="range" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Patterned?: </label>
          <input 
              type="radio" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <br/>

        <div className="form-group">
          <input type="submit" value="Create To Do" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}