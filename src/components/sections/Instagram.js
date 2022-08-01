import React from "react";
import { connect } from "react-redux";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import { fetchProfile } from "../../actions";

class Instagram extends React.Component {
  render() {
    return <InstagramFeed token={this.props.profile.instagram} counter="12" />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profiles[state.auth.userId],
  };
};

export default connect(mapStateToProps, {
  fetchProfile,
})(Instagram);
