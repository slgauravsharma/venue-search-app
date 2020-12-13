import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResult from './index';

describe('<SearchResult />', () => {
  it('Renders <SearchResult /> component correctly & show no data in search list', () => {
    const mockProps = {
      venues: [],
      error: null,
    };
    const { getByText, container } = render(<SearchResult {...mockProps} />);
    const labelElement = getByText(/Geo Locations/i);
    expect(labelElement).toBeInTheDocument();
    expect(container.getElementsByClassName('search-result-no-data').length).toBe(1);
  });

  it('Renders search result list', () => {
    const mockProps = {
      venues: [{ id: '123', name: 'UK', location: { longitude: 10, latitude: 20 } }],
      error: null,
    };
    const { getByText } = render(<SearchResult {...mockProps} />);
    const labelElement = getByText(/UK/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('Present text-danger class name when error in search result', () => {
    const mockProps = {
      venues: [],
      error: 'Unable to fetch venues',
    };
    const { container } = render(<SearchResult {...mockProps} />);
    expect(container.getElementsByClassName('search-result-no-data text-danger').length).toBe(1);
  });
});
