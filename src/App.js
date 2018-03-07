import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Authors from './Authors.js';


class Post extends Component {

  constructor(props){
    super()
    this.state = {
      body: props.body,
      currentValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
    let currentValue = this.state.currentValue
    this.setState({
      body: currentValue
    })
  }

  handleChange(e){
    this.setState({
      currentValue: e.target.value
    })
    console.log(e.target.value);
    console.log(this.state.body);
  }

  handleClick(e){
    var updatedBody = prompt('change')
    this.setState({
      body: updatedBody
    })
  }
  render() {
    const {title, authors, comments} = this.props
    let allAuthors = authors.map(function(author, index){
      return <Authors key={index} text={author} id={index+1}/>
    })
    {/*let allComments = [
      <Comment text={comments[0]}/>,
      <Comment text={comments[1]}/>,
      <Comment text={comments[2]}/>
    ]*/}
    let allComments = comments.map(function(comment, index){
      return <Comment key={index} text={comment} id={"b"+index}/>
    })

    return (
      <div className="text-center">
        <h1 className="title-h1">{title}</h1>
        <h3>Written By: {allAuthors}</h3>
        <p>{this.state.body}</p>

        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Edit Post</button>
        <button onClick={this.handleClick}>Edit By Prompt</button>

        <br/>
        <p>Comments:</p>
        <ul>{comments.map(function(comment){
          return <li>{comment}</li>
        })}
        <Comment text={comments[0]}/>
        <Comment text={comments[1]}/>
        <Comment text={comments[2]}/>
        {allComments}
        </ul>
      </div>
    )
  }
}

export default Post;
