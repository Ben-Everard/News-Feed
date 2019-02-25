import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import './Article.css';
import $ from 'jquery';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      comments: '',
      selected: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/url')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  componentWillMount() {
    let articleText = document.getElementById('article-text'); 
  }

  cancelComment() {
    $('#comment-popup').hide();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    let text = $('#comment').val();
    this.setState({ comments: text });
    $('#comment-popup').hide();
  }

  render() {
    console.log(this.state.comment)
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8" id="article-text">
              <p>{this.state.users.text}</p>
            </div>
            <div >
              
            </div>
            <form ref="form" onSubmit={(e)=>this.handleSubmit(e)} className="background col-md-6 offset-md-1" id="comment-popup">
              <textarea className="form-control" rows="3" placeholder="Leave comment" id="comment"></textarea>
              <div class="row">
                <input type="submit" className="btn btn-danger col-md-4 offset-md-1 my-3" value="Cancel Comment" onClick={this.cancelCourse}/>
                <input type="submit" className="btn btn-success col-md-4 offset-md-2 my-3" value="Submit Comment" onClick={this.cancelComment}/>
              </div>
            </form>
            <nav className="col-md-4 sidebar">
              <div className="sidebar-sticky">
                <h3>Facts</h3>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <p>Fact number #1</p>
                  </li>
                  <li className="nav-item">
                    <p>Fact number #2</p>
                  </li>
                  <li className="nav-item">
                    <p>Fact number #3</p>
                  </li>
                </ul>
                <h3>Comments</h3>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <p>{this.state.comment}</p>
                  </li>
                  <li className="nav-item">
                    <p>Comment #2</p>
                  </li>
                  <li className="nav-item">
                    <p>Comment #3</p>
                  </li>
                </ul>
                <h3>Events</h3>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <p><a href="http://boston.eventful.com/events/blue-man-group-/E0-001-069350440-2@2018012919">Blue Man Group</a></p>
                  </li>
                  <li className="nav-item">
                    <p><a href="http://eventful.com/keene/events/best-north-shore-comedy-/E0-001-094102091-1">Best of North Shore Comedy in Keene</a></p>
                  </li>
                  <li className="nav-item">
                    <p><a href="http://eventful.com/festivals/music-festivals/tortuga-2018/tickets">Tortuga Music Festival</a></p>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;