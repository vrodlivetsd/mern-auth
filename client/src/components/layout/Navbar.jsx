import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  auth: state.auth
});

class Navbar extends Component {

  static propTypes = {
    auth: PropTypes.object
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            {
              auth.isAuthenticated ?
                <Link
                  to="/dashboard"
                  style={{ fontFamily: "monospace" }}
                  className="col s5 brand-logo center black-text"
                >
                  <i className="material-icons">code</i>
                  MERN
                </Link> :
                <Link
                  to="/"
                  style={{ fontFamily: "monospace" }}
                  className="col s5 brand-logo center black-text"
                >
                  <i className="material-icons">code</i>
                  MERN
                </Link>
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Navbar);
