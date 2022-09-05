import { baseURL } from '@service/data.slice';
import { fireEvent } from '@testing-library/dom';
import { renderWithProviders } from '@utils/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { Menu } from './menu';
import rawList from './../../mocks/data.json';

const handlers = [
  rest.get(baseURL.split('?')[0], (req, res, ctx) => {
    return res(ctx.json(rawList), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('Menu', () => {

  test('Load more button should increase the pageOffset in the state', () => {
    const { store, container } = renderWithProviders(<Menu />);
    //@ts-ignore
    fireEvent.click(container.querySelector('.loadmore'));
    expect(store.getState().data.pageOffset).toEqual(1);
  });

  test('Autoplay button should toggle autoplay variable in the state', () => {
    const { store, container } = renderWithProviders(<Menu />);
    //@ts-ignore
    fireEvent.click(container.querySelector('.autoplay'));
    expect(store.getState().data.autoPlay).toEqual(true);
    //@ts-ignore
    fireEvent.click(container.querySelector('.autoplay'));
    expect(store.getState().data.autoPlay).toEqual(false);
  });
});