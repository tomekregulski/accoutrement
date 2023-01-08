import React from 'react';
import { Button } from './Button';

import { render } from '@testing-library/react';

test('renders Button', () => {
  const { getAllByRole } = render(<Button label='button' onClick={() => {}} />);

  expect(getAllByRole('button')).toHaveLength(1);
});
