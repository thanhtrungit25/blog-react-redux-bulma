import React from 'react';
import * as contentful from 'contentful';

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
        <p>This is the Blog Page</p>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
        ))}
      </div>
    );
  }
}

export default Blog;
