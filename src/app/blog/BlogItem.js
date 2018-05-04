import React from 'react';
import BlogContent from './shared/BlogContent';
import BlogNav from './shared/BlogNav';

const BlogItem = props => (
  <div className="box">
    <BlogContent limit={150} {...props}>
      <BlogNav
        isBack={false}
        status={props.status}
        date={props.date}
        to={{
          pathname: `/blog/${props.path}`,
          state: { props },
        }}
      />
    </BlogContent>
  </div>
);

export default BlogItem;
