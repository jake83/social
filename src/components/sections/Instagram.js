import React from "react";
import { connect } from "react-redux";
import { fetchProfiles, fetchProfileByUsername } from "../../actions";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

class Instagram extends React.Component {
  componentDidMount() {
    this.props.fetchProfileByUsername(this.props.match.params.username);
  }

  render() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.profile.instagram);
      return (
        <InstagramFeed token={this.props.profile.instagram} counter="12" />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profiles[ownProps.match.params.username],
  };
};

export default connect(mapStateToProps, {
  fetchProfileByUsername,
})(Instagram);
