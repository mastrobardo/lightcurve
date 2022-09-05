import { selectRecord } from '@service/data.slice';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { renderWithProviders } from '@utils/test-utils';
import { act } from 'react-dom/test-utils';
import rawList from './../../mocks/data.json';
import { InfoModal } from './infoModal';

describe('InfoModal', () => {

  test('It should not render if tehre is no selected record', async () => {
    const { container } = renderWithProviders(<InfoModal />, {
      preloadedState: {
        //@ts-ignore
        data: {
          data: [],
          selected: null,
        },
      },
    });
    expect(container).toBeEmptyDOMElement();
  });

  test('It shuuld open is a record is selected on the ledger', async () => {
    const { store } = renderWithProviders(<InfoModal />, {
      preloadedState: {
        data: {
          //@ts-ignore
          data: rawList,
          selected: null,
        },
      },
    });
    act(() => store.dispatch(selectRecord('577189bc256da15e42f2d65bd630d1ab20aeeeea91daabdbca4c6c084f0919ff')));
    await waitFor(() => {
      expect(screen.getByText(/moduleAssetId/i)).toBeInTheDocument();
    });
  });

  test('It shuold close when the close button is clicked', async () => {
    const { store, container } = renderWithProviders(<InfoModal />, {
      preloadedState: {
        data: {
          //@ts-ignore
          data: rawList,
          selected: null,
        },
      },
    });
    act(() => store.dispatch(selectRecord('577189bc256da15e42f2d65bd630d1ab20aeeeea91daabdbca4c6c084f0919ff')));
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', {
        name: /×/i,
      }));
      expect(container).toBeEmptyDOMElement();
    });
  });
});