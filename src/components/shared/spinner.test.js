import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './spinner';

describe('<Spinner />', () => {
  it('Renders <Spinner /> component correctly', () => {
    const { container } = render(<Spinner show />);
    expect(container.getElementsByClassName('spinner').length).toBe(1);
  });
});
