// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls /> initial state', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  })
  it('gate lock status defaults to Unlocked', () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/close gate/i)).toBeTruthy();
  })
  it('gate open status defaults to Open', () => {
    const { getByText } = render(<Controls />);
    expect(getByText(/lock gate/i)).toBeTruthy();
  })
})