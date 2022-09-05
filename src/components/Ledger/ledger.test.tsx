import { renderWithProviders } from '@utils/test-utils';
import { Ledger } from './ledger';
import rawList from './../../mocks/data.json';
import { fetchDataByPage } from '@service/data.slice';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { baseURL } from '@service/data.slice';
import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/dom';


const handlers = [
  rest.get(baseURL.split('?')[0], (req, res, ctx) => {
    return res(ctx.json(rawList), ctx.delay(0));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());


describe('Ledger', () => {
  test('should only render the visible elements in the list', () => {
    //@ts-ignore
    const { container } = renderWithProviders(<Ledger data={rawList} />);

    expect(container.getElementsByClassName('ledger__content').length).toEqual(3);
  });

  test('should ignore change on the lenght of list', async () => {
    //@ts-ignore
    const { store, container } = renderWithProviders(<Ledger data={rawList} />);
    expect(container.getElementsByClassName('ledger__content').length).toEqual(3);
    //with this we test the loading thunk without testing the thunk directly
    //as suggested by redux
    act(() => {
      store.dispatch(fetchDataByPage(1));
      store.dispatch(fetchDataByPage(2));
    });
    await waitFor(() => {
      expect(Object.entries(store.getState().data.fetchByPage).length).toEqual(2);
      expect(container.getElementsByClassName('ledger__content').length).toEqual(3);
    });
  });
});