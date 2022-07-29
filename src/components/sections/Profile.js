import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import ProfileForm from "../ProfileForm";
import {
  createProfile,
  fetchProfiles,
  fetchProfile,
  editProfile,
} from "../../actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileExists: false,
    };
  }

  fetchProfile() {
    this.state.profileExists = true;
    if (!this.props.profile && this.props.currentUserId) {
      this.props.fetchProfile(this.props.currentUserId);
    }
  }

  componentDidMount() {
    this.props.fetchProfiles();
    if (this.props.currentUserId in this.props.profiles) {
      this.fetchProfile();
    }
  }

  componentDidUpdate() {
    if (this.state.profileExists) {
      this.fetchProfile();
    }
  }

  createProfile(formValues) {
    this.props
      .createProfile(this.props.currentUserId, formValues)
      .then(this.showSuccessMessage());
  }

  editProfile(formValues) {
    this.props
      .editProfile(this.props.currentUserId, formValues)
      .then(this.showSuccessMessage());
  }

  onSubmit = (formValues) => {
    if (this.state.profileExists) {
      this.editProfile(formValues);
    } else {
      this.createProfile(formValues);
    }
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

  showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.renderSuccess()}
        <h3>Profile</h3>
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
    profiles: state.profiles,
    profile: state.profiles[state.auth.userId],
  };
};

export default connect(mapStateToProps, {
  createProfile,
  fetchProfiles,
  fetchProfile,
  editProfile,
})(Profile);
