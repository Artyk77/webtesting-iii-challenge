// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('Dashboard /> functionality after closed', () => {

    it('registers as closed, lock gate is not disabled', () => {
  
      const { queryByText, container } = render(<Dashboard />);
  
      const unlockedIndicator = queryByText(/unlocked/i);
      expect(unlockedIndicator.classList.contains('green-led')).toBeTruthy();
  
      const openIndicator = queryByText(/open/i);
      expect(openIndicator.classList.contains('green-led')).toBeTruthy();
  
      expect(container.querySelector('led red-led')).toBeFalsy();
      expect(container.querySelectorAll('led green-led')).toBeTruthy();
  
      expect(queryByText(/open gate/i)).toBeFalsy();
      expect(queryByText(/close gate/i)).toBeTruthy();
      expect(queryByText(/closed/i)).toBeFalsy();
      expect(queryByText(/lock gate/i).hasAttribute('disabled')).toBeTruthy();
      expect(queryByText(/open/i)).toBeTruthy();
  
      fireEvent.click(queryByText(/close gate/i));
  
      const closedIndicator = queryByText(/closed/i)
      expect(closedIndicator.classList.contains('red-led')).toBeTruthy();
  
      expect(unlockedIndicator.classList.contains('green-led')).toBeTruthy();
  
      expect(queryByText(/open gate/i)).toBeTruthy();
      expect(queryByText(/close gate/i)).toBeFalsy();
      expect(queryByText(/closed/i)).toBeTruthy();
      expect(queryByText(/open`[ gate]/i)).toBeFalsy();
  
    })
  })
  
  describe('Dashboard /> functionality after locked', () => {
  it('cannot be opened or closed after locked', () => {
    const { queryByText } = render(<Dashboard />);

    expect(queryByText(/unlock gate/i)).toBeFalsy();
    expect(queryByText(/[^un]locked/i)).toBeFalsy();
    expect(queryByText(/lock gate/i).hasAttribute('disabled')).toBeTruthy();

    fireEvent.click(queryByText(/close gate/i));
    fireEvent.click(queryByText(/lock gate/i));

    const closedIndicator = queryByText(/closed/i)
    expect(closedIndicator.classList.contains('red-led')).toBeTruthy();

    const lockedIndicator = queryByText(/locked/i)
    expect(lockedIndicator.classList.contains('red-led')).toBeTruthy();

    expect(queryByText(/unlock gate/i)).toBeTruthy();
    expect(queryByText(/locked/i)).toBeTruthy();
    expect(queryByText(/open gate/i).hasAttribute('disabled')).toBeTruthy();
    expect(queryByText(/open gate/i).hasAttribute('disabled')).toBeTruthy();
  });
});