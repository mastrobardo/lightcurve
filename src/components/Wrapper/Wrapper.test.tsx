import { renderWithProviders } from '@utils/test-utils';
import { Wrapper } from './Wrapper';

describe('Wrapper', () => {
  test(' should have dimensions of the window',
    () => {
      const { container } = renderWithProviders(<Wrapper><span></span></Wrapper>);
      const wrapper = container.getElementsByClassName('wrapper')[0] as HTMLElement;
      // testing library doesn't have a window, so i expect the wrapper to be 0px is size
      expect(wrapper.style.height).toEqual('0px');
    });
});