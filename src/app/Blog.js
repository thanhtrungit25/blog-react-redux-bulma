import React from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader';

class Blog extends React.Component {
  state = {
    posts: [],
  };

  client = contentful.createClient({
    space: 'spcwng43cfp1',
    accessToken:
      '3c4a374b63c19c010b795fd05903cd282fac1f68c5383d04e6563dca17c4ed7d',
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    console.log(response);
    this.setState({
      posts: response.items,
    });
  };

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
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}

export default Blog;
