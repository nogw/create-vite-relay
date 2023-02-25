import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';

import Root from '../Root';

it('should render root', async () => {
  const { debug, getByText } = render(<Root />);

  //eslint-disable-next-line
  debug();

  //eslint-disable-next-line
  expect(getByText('create-vite-relay')).toBeInTheDocument();
});
