import React from 'react';
import { connect } from 'react-redux';
import { Loader } from './components/Loader';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import { fetchMedium } from '../store/Medium';
import MediumItem from './medium/MediumItem';

class Medium extends React.Component {
  componentDidMount() {
    this.props.onLoadMedium();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Medium is where I ramble and rant and tell stories. I orginally was
          going to use it as a coding blog, I don't like having to use Gist for
          all my code snippets. So I created this site.
          <br />
          <br />
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@aaron.klaser"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
              <i className="fab fa-lg fa-medium" />
            </span>
          </a>
        </PageHeader>
        <br />
        {this.props.medium.loading ? (
          <Loader className="has-text-primary">Loading</Loader>
        ) : (
          <PageContent>
            {this.props.medium.posts.map(post => (
              <MediumItem key={post.id} {...post} />
            ))}
          </PageContent>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    medium: state.medium,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLoadMedium: function() {
      dispatch(fetchMedium());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Medium);
