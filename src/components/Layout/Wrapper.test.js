import React from 'react';
import { render, screen } from '@testing-library/react';
import Wrapper from './Wrapper';

test('should render children', () => {
  const children = <span data-testid='test-children' />;

  render(<Wrapper>{children}</Wrapper>);

  expect(screen.getByTestId('test-children')).toBeInTheDocument();
});
