import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchContainer from './searchContainer';

describe('<SearchContainer />', () => {
  it('Renders <SearchContainer /> component correctly', () => {
    const { getByText } = render(<SearchContainer />);
    const labelElement = getByText(/Venue search:/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('On change event to update input value in search container of searchbox', async () => {
    const wrapper = render(<SearchContainer />);
    const keywordValue = wrapper.queryByTestId('search-input');
    expect(keywordValue.value).toBe('');
    fireEvent.change(keywordValue, { target: { value: 'USA' } });
    expect(keywordValue.value).toBe('USA');
  });
});
