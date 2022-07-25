import React from "react";
import { connect } from "react-redux";
import Link from "./Link";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  renderProfileButton() {
    if (this.props.isSignedIn) {
      return (
        <Link href="/profile" className="item">
          <i className="user icon" />
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="ui inverted menu">
        <Link href="/" className="item">
          <i className="home icon" />
        </Link>
        <Link href="/youtube" className="item">
          <i className="youtube icon" />
          <span>YouTube</span>
        </Link>
        <Link href="/instagram" className="item">
          <i className="instagram icon" />
          <span>Instagram</span>
        </Link>
        <Link href="/twitter" className="item">
          <i className="twitter icon" />
          <span>Twitter</span>
        </Link>
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
  };
};

export default connect(mapStateToProps)(Header);
