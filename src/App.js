import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Authors from './Authors.js';


class Post extends Component {
  render() {
    const {title, authors, body, comments} = this.props
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
        <p>{body}</p>
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
