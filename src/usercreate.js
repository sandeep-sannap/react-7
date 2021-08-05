import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Usercreate() {
  return (
    <div className="mt-5" style={{ marginLeft: "40%" }}>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password Required";
          } else if (
            values.password.length < 8 ||
            values.password.length > 12
          ) {
            errors.password =
              "Password length should be between 8 to 12 characters long.";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="Container">
              <div className="form-group">
                <label for="email">
                  <b>Email:</b>
                </label>
                <br />
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid"
                />
              </div>
              <div className="form-group">
                <label for="pass">
                  <b>password:</b>
                </label>
                <br />
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
