import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  userName = "jake83"; // Temp!

  socialPlatforms = ["YouTube", "Twitter", "Instagram"];

  renderProfileButton = () => {
    if (this.props.isSignedIn !== false) {
      return (
        <NavLink to={`/${this.userName}/profile`} className="item">
          <i className="user icon" />
        </NavLink>
      );
    }
  };

  renderNavLinks() {
    if (window.location.pathname.startsWith("/" + this.userName)) {
      return this.socialPlatforms.map((socialPlatform) => {
        return (
          <NavLink
            to={`/${this.userName}/${socialPlatform.toLowerCase()}`}
            className="item"
          >
            <i className={`${socialPlatform.toLowerCase()} icon`} />
            <span>{socialPlatform}</span>
          </NavLink>
        );
      });
    } else {
      return <Redirect to="/" />;
    }
  }

  render() {
    return (
      <div className="ui inverted menu">
        <span className="item logo">Social Hub</span>
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
