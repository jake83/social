import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";

// TODO: Currently hardcoded to a test account (jake83). Make this dynamic
class Header extends React.Component {
  renderProfileButton = () => {
    if (this.props.isSignedIn !== false) {
      return (
        <NavLink to="/jake83/profile" className="item">
          <i className="user icon" />
        </NavLink>
      );
    }
  };

  renderNavLinks() {
    if (window.location.pathname !== "/") {
      return (
        <>
          <NavLink to="/jake83/youtube" className="item">
            <i className="youtube icon" />
            <span>YouTube</span>
          </NavLink>
          <NavLink to="/jake83/instagram" className="item">
            <i className="instagram icon" />
            <span>Instagram</span>
          </NavLink>
          <NavLink to="/jake83/twitter" className="item">
            <i className="twitter icon" />
            <span>Twitter</span>
          </NavLink>
        </>
      );
    }
  }

  render() {
    return (
      <div className="ui inverted menu">
        <span className="item">Social Hub</span>
        {this.renderNavLinks()}
        <div className="right menu">
          {this.renderProfileButton()}
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
