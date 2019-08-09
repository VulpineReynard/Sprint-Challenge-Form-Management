import React from 'react';
import { render } from '@testing-library/react';
import NewUserGrid from './Components/NewUserGrid';
import '@testing-library/jest-dom/extend-expect';

describe('<NewUserGrid /> ', () => {
  it('renders without crashing with correct props and function', () => {
    render(<NewUserGrid setUsers={(temp) => {temp}} users={[]}/>);
  });
})