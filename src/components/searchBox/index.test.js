import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from './index';

describe('<SearchBox />', () => {
  const mockProps = {
    onChange: jest.fn((value) => {}),
    value: '',
    placeholder: 'enter keyword',
    label: 'Venue search:',
  };

  it('Renders <SearchBox /> component correctly', () => {
    const { getByText } = render(<SearchBox {...mockProps} />);
    const labelElement = getByText(/Venue search:/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<SearchBox {...mockProps} />);
    const searchInput = queryByPlaceholderText(mockProps.placeholder);
    fireEvent.change(searchInput, { target: { value: 'USA' } });
    expect(mockProps.onChange).toBeCalled();
  });
});
