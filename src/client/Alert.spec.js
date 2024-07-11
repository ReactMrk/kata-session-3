import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './Alert';
import useAlert from './useAlert';

jest.mock('./useAlert', () => jest.fn());

const renderComponent = () => render(<Alert />);

describe('Alert', () => {
  
  it('should render text "New client has been added" when displayAlert is true', () => {

  });

  it('should not render alert component when displayAlert is false', () => {

  });
});
