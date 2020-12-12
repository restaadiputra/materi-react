import React from 'react';
import { render } from '@testing-library/react';
import TodoScreen from './TodoScreen';

test('should render without error', () => {
  render(<TodoScreen />);
});
