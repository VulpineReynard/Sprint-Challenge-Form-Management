import React, { useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik, } from "formik";
import * as Yup from 'yup';

const NewUserForm = ({ errors, status, users, setUsers }) => {
  useEffect(() => {
    if(status) {
      console.log(status);
    }
  }, [status])

  return ([
    <div className="user-form">
      <h1>New User Form</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {errors.username && <p className="error">{errors.username}</p>}

        <Field type="password" name="password" placeholder="Password" />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit!</button>
      </Form>
    </div>
  ]);
}

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required.'),
    password: Yup.string().required('Password is required.').min(8)
  }),

  handleSubmit({ username, password }, { setStatus }) {
    axios.post('http://localhost:5000/api/register', { username, password })
      .then(res => {
        setStatus(res.config.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  },
})(NewUserForm);

export default FormikForm;