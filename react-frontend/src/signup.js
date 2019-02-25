import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Signup;