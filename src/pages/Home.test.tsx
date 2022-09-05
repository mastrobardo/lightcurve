import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderWithProviders } from '@utils/test-utils';
import { Home } from './Home';
import { fireEvent, waitFor } from '@testing-library/dom';
import { baseURL } from '@service/data.slice';
import rawList from './../mocks/data.json';

export const handlers = [
  rest.get(baseURL.split('?')[0], (req, res, ctx) => {
    return res(ctx.json(rawList), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({
  onUnhandledRequest: 'bypass',
}));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test('HomePage component should manage data fetch states', async () => {
  const { container } = renderWithProviders(<Home />);
  await waitFor(() => {
    expect(container.getElementsByClassName('wrapper')[0]).toBeInTheDocument();
  });
});

test('it shold call an interval when the button is clicked', async () => {
  const setIntervalMock = jest.spyOn(window, 'setInterval').mockImplementation();
  const { container } = renderWithProviders(<Home />,  {
    preloadedState: {
      data: {
        //@ts-ignore
        data:rawList,
        //@ts-ignore
        autoPlay: true
      },
    }});

  setTimeout(async () => {
    await waitFor(()=> expect(setIntervalMock).toHaveBeenCalledTimes(1))
  }, 15000)
})

