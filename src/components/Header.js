import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchProfile } from "../actions";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  renderProfileButton = () => {
    if (this.props.isSignedIn !== false) {
      return (
        <NavLink to={"/profile"} className="item">
          <i className="user icon" />
        </NavLink>
      );
    }
  };

  getUserName = () => {
    if (window.location.pathname.match("/profile")) {
      if (this.props.profile) {
        return this.props.profile.username;
      }
    } else {
      const pathNameShards = window.location.pathname.split("/");
      if (1 in pathNameShards) {
        return pathNameShards[1];
      }
    }
    return "";
  };

  renderNavLinks() {
    const userName = this.getUserName();

    if (userName !== "") {
      return ["YouTube", "Twitter", "Instagram"].map((socialPlatform) => {
        return (
          <NavLink
            to={`/${userName}/${socialPlatform.toLowerCase()}`}
            className="item"
            key={socialPlatform.toLowerCase()}
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
        <NavLink to="/" className="item" key="home">
          Social Hub
        </NavLink>
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
  return {
    isSignedIn: state.auth.isSignedIn,
    profile: state.profiles[state.auth.userId],
  };
};

export default connect(mapStateToProps, { fetchProfile })(Header);
