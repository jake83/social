import React from "react";
import ProfileForm from "./ProfileForm";

class ProfileCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createProfile(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Profile</h3>
        <ProfileForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
