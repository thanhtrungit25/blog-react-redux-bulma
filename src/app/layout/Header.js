import React from 'react';

class Header extends React.Component {
  state = {
    isActive: false,
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: 'solid 1px #dddddd',
        }}
      >
        <div className="navbar-brand">
          <a className="navbar-item">
            <span>AaronKlaser.com</span>
          </a>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={
            this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-start">
            <a className="navbar-item">
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code" />
              </span>
              Code Blog
            </a>
            <a className="navbar-item" style={{ marginRight: 5 }}>
              <span className="icon">
                <i className="fab fa-lg fa-medium" />
              </span>
              Medium
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Projects</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Overview</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">This Site</a>
                <a className="navbar-item">Angular The React Way</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/aaronklaser">
              <span className="icon">
                <i className="fab fa-lg fa-github" />
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/awklaser">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter" />
              </span>
            </a>
            <a className="navbar-item" href="http://resume.aaronklaser.com">
              Resume
              <span
                className="icon"
                style={{ color: '#0077B5', marginLeft: 5 }}
              >
                <i className="fab fa-lg fa-linkedin" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
