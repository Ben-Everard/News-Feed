import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
          {this.state.users.map((user, index) =>
            <div key={index} className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{user.source.name}</h6>
                  <p className="card-text">{user.description}</p>
                  <Link to='/article'>Read More</Link>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;