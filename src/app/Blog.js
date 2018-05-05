import React from 'react';
import { connect } from 'react-redux';
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
          Your standard <strong>JavaScript</strong> programming blog, albeit,
          probably not very good, but I will at least try to keep it
          entertaining. This blog is a chronological mix of random posts on
          Angular, React, Functional Programming, and my{' '}
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        {this.props.blog.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog,
  };
}

export default connect(mapStateToProps)(Blog);
