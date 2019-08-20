
import React from 'react';
import renderer from 'react-test-renderer';
import { render} from '@testing-library/react';

import Display from './Display';

describe('<Display /> initial state', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it('gate lock status defaults to Unlocked', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/unlocked/i)).toBeTruthy();
  })
  it('gate open status defaults to Open', () => {
    const { getByText } = render(<Display />);
    expect(getByText(/open/i)).toBeTruthy();
  })
})