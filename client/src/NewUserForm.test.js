import React from 'react';
import { render } from '@testing-library/react';
import FormikForm from './Components/NewUserForm';
import '@testing-library/jest-dom/extend-expect';

describe('<FormikForm />', () => {
  it('renders a button with submit button', () => {
    const userForm = render(<FormikForm />);
    userForm.getByText(/^Submit$/i);
    userForm.getByRole(/button/i);
  })
})