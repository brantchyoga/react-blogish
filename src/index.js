import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Dinosaurs are kinda lame...",
  authors: ["Emily's everywhere", "Dan's everywhere", "Steve's everywhere"],
  body: "We should be more concerned about other shit",
  comments: ['whatevs', 'whata reterd', 'smartest gender-neutral people!']
}

ReactDOM.render(
  <Post
    title={post.title}
    authors={post.authors}
    body={post.body}
    comments={post.comments}
  />, document.getElementById('root'));
registerServiceWorker();
