import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik, } from "formik";
import * as Yup from 'yup';

const NewUserForm = ({ errors, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(status) {
      setUsers([...users, status]);
    }
  }, [status])

  return ([
    <div className="user-form">
      <h1>New User Form</h1>
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        {errors.email && <p className="error">{errors.email}</p>}

        <Field type="password" name="password" placeholder="Password" />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit!</button>
      </Form>
    </div>
  ]);
}

const FormikForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required.').email(),
    password: Yup.string().required('Password is required.').min(8)
  }),

  handleSubmit({ email, password }, { setStatus }) {
    axios.post('https://reqres.in/api/users/', { email, password })
      .then(res => {
        setStatus(res.data);
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      })
  },
})(NewUserForm);

export default FormikForm;