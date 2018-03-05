import React, {Component} from 'react';

class Authors extends Component {
  render(){
    return(
      <p>{this.props.id}: {this.props.text}</p>
    )
  }
}

export default Authors
