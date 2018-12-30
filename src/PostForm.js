import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
  handleSubmit = (e) => {
  e.preventDefault();
  const title = this.getTitle.value;
  const message = this.getMessage.value;
  const data = {
    id: new Date(),
    title,
    message,
    editing: false
  }
  this.props.dispatch({
  type: 'ADD_POST',
  data
  })
  this.getTitle.value = '';
  this.getMessage.value = '';
  }

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Write a new post</h1>
          <form className="form" onSubmit={this.handleSubmit} >
            <label for="post-title">Enter a title for a post</label>
            <input id="post-title" required type="text" ref={(input) => this.getTitle = input}
            placeholder="" /><br /><br />
            <label for="post-textarea">Enter post text</label>
            <textarea id="post-textarea" required rows="3" ref={(input) => this.getMessage = input}
            cols="28" placeholder="" /><br /><br />
            <button className="post-btn">Post</button>
          </form>
      </div>
      );
  }
}

export default connect()(PostForm);