import React from 'react';
import { ListComponent } from './listElement';
import { renderWithProviders } from '@utils/test-utils';
import list from './../../mocks/list.json';
import { DisplayDataObject } from '@service/data.slice';
import {screen} from '@testing-library/dom';

describe('ListComponent', () => {
  test('should recursevely display each nested chidlren', () => {
    renderWithProviders(<ListComponent collection={list as DisplayDataObject[]} />);
    // recipient is nested in assets 
    expect(screen.getByText(/recipient/i)).toBeInTheDocument();
    // this is a value of the children of recipient
    expect(screen.getByText(/lskcf8ucdubty62m4df9gsjhuzgnpv4dcw43b7pht/i)).toBeInTheDocument();
  });

  test('should not render if the collection is not an array', () => {
    //@ts-ignore
    const { container } = renderWithProviders(<ListComponent collection={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});