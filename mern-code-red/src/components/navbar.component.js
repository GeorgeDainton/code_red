import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  render() {
    return ( //bootstrap style below, docs have all the options
      <navbar className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className="navbar-brand">Code Red</Link>
        <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
          <Link to='/' className="nav-link">To Do List</Link>
          </li>
          <li className='navbar-item'>
          <Link to='/create' className='nav-link'>New To Do</Link>
          </li>
          <li className='navbar-item'>
          <Link to='/user' className='nav-link'>New User</Link>  
          </li>
        </ul>
        </div>
      </navbar>
    )
  }
}

//Links work the same as anchor tags