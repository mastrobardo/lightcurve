import { FormPage } from './FormPage';
import { fireEvent, waitFor } from '@testing-library/dom';
import { renderWithProviders } from '@utils/test-utils';
import userEvent from '@testing-library/user-event';

describe('FormPage', () => {
  test('it should only show name and gender fields at the first rendering', () => {
    const { container } = renderWithProviders(<FormPage />);
    expect(container.querySelector('#gender')).toBeInTheDocument();
    expect(container.querySelector('#name')).toBeInTheDocument();
  });

  test('it should show inputs depending on which gender was selected', () => {
    const { container } = renderWithProviders(<FormPage />);
    //@ts-ignore
    fireEvent.change(container.querySelector('#gender') as HTMLInputElement, { target: { value: 'male' } });
    expect(container.querySelector('#album')).toBeInTheDocument();
    fireEvent.change(container.querySelector('#gender') as HTMLInputElement, { target: { value: 'female' } });
    expect(container.querySelector('#book')).toBeInTheDocument();
    fireEvent.change(container.querySelector('#gender') as HTMLInputElement, { target: { value: 'nonbinary' } });
    expect(container.querySelector('#sport')).toBeInTheDocument();
  });
  test('it should showan alert for the required fields',async () => {
    const { container } = renderWithProviders(<FormPage />);
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    fireEvent.click(container.querySelector('.submit') as HTMLInputElement);
    expect(alertMock).toHaveBeenCalledTimes(1)
    fireEvent.change(container.querySelector('#gender') as HTMLInputElement, { target: { value: 'male' } });
    fireEvent.click(container.querySelector('.submit') as HTMLInputElement);
    expect(alertMock).toHaveBeenCalledTimes(2);
    fireEvent.change(container.querySelector('#name') as HTMLInputElement, { target: { value: 'Some Name' } });
    fireEvent.click(container.querySelector('.submit') as HTMLInputElement);
    expect(alertMock).toHaveBeenCalledTimes(3);
    fireEvent.change(container.querySelector('#album') as HTMLInputElement, { target: { value: 'An Album' } });
    fireEvent.click(container.querySelector('.submit') as HTMLInputElement);
    await waitFor(()=> expect(alertMock).toHaveBeenCalledTimes(3))
});
});