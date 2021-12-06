// import { ErrorMessage, Field, Formik, Form } from "formik";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import * as YUP from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { ErrorMessage, Field, Form, Formik } from "formik";

const Login = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const loginSchema = YUP.object().shape({
    name: YUP.string().min(5).required("please enter name"),
    email: YUP.string()
      .email()
      .required("please Enter email")

      .min(8),
    password: YUP.string().required("Please Enter password"),
  });

  //form validation
  //   const handlesubmit = ({ target: { name, email, password } }) => {
  //     console.log("values", name, email, password);
  //     // e.preventDefault();
  //     if (name === "name") {
  //       if (name.length <= 8) {
  //         console.log(name);
  //       }
  //       console.log(name);
  //     } else if (name === "email") {
  //       if (email >= 10) console.log(email);
  //       console.log(email);
  //     } else if (name === "password") console.log(password);
  //     window.alert("name should be filled");
  //   };

  return (
    <div className="loginContainer">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("Welcome to login");
          resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <div className="form-group">
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                />
                <div>
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  id="name"
                />
                <div>
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                />
                <div>
                  <ErrorMessage name="password" />
                </div>
              </div>

              <button type="submit">Login</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

{
  /* <div className="innerContainer">
        <input
          type="text"
          value={name}
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onSubmit={handlesubmit}>Login</button>
      </div> */
}
