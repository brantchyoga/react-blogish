import React, { Component } from 'react';

class Comment extends Component {
  render(){
    return(
      <li id={this.props.id} className="nobullet">{this.props.text}!</li>
    )
  }
}

export default Comment
