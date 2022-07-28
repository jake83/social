import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchProfile, editProfile } from "../../actions";
import ProfileForm from "./ProfileForm";

class ProfileEdit extends React.Component {
  fetchProfile() {
    if (!this.props.profile && this.props.currentUserId) {
      this.props.fetchProfile(this.props.currentUserId);
    }
  }

  componentDidMount() {
    this.fetchProfile();
  }

  componentDidUpdate() {
    this.fetchProfile();
  }

  onSubmit = (formValues) => {
    this.props.editProfile(this.props.currentUserId, formValues).then(() => {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    });
  };

  renderSuccess() {
    return (
      <div
        id="successMessage"
        className="ui success message"
        style={{ display: "none" }}
      >
        <div className="header">Profile updated</div>
      </div>
    );
  }

  render() {
    if (!this.props.profile) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {this.renderSuccess()}
        <h3>Edit Profile</h3>
        <ProfileForm
          initialValues={_.pick(
            this.props.profile,
            "username",
            "youtube",
            "instagram",
            "twitter"
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    profile: state.profiles[state.auth.userId],
  };
};

export default connect(mapStateToProps, { fetchProfile, editProfile })(
  ProfileEdit
);
