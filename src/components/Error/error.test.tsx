import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from './error';
import '@testing-library/jest-dom';
describe('Error Boundary', () => {
  test('Error Boundary', async () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
            //@ts-ignore
            <ErrorBoundary fallback={<ErrorComponent />}>
                <ThrowError />
            </ErrorBoundary>,
    );
    await expect(screen.getByRole('alert')).toBeVisible();
  });
});