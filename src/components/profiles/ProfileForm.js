import React from "react";
import { Form, Field } from "react-final-form";

const ProfileForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {};

        if (!formValues.username) {
          errors.username = "You must enter a user name";
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field
            name="username"
            component={renderInput}
            label="Account user name"
          />
          <Field
            name="youtube"
            component={renderInput}
            label="YouTube channel"
          />
          <Field
            name="instagram"
            component={renderInput}
            label="Instagram user name"
          />
          <Field
            name="twitter"
            component={renderInput}
            label="Twitter user name"
          />
          <button className="ui button primary">Submit</button>
        </form>
      )}
    />
  );
};

export default ProfileForm;
