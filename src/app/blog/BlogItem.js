import React from 'react';
import * as MarkDown from 'react-markdown';

const BlogItem = props => (
  <div className="box content">
    <h1>{props.title}</h1>
    <MarkDown source={props.content} />
  </div>
);

export default BlogItem;
