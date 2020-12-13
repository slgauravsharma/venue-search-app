import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecentSearchKeyword from './index';

describe('<RecentSearchKeyword />', () => {
  it('Renders <RecentSearchKeyword /> component correctly', () => {
    const mockProps = {
      recentSearchVenues: [{ keyword: 'UK' }],
      onRecentKeywordClick: jest.fn(),
      shouldCallApi: false,
      keyword: '',
    };
    const { getByText } = render(<RecentSearchKeyword {...mockProps} />);
    const labelElement = getByText(/Recent searched keywords/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('RecentSearchKeyword component is not present when recentSearchVenues is empty', () => {
    const mockProps = {
      recentSearchVenues: [],
      onRecentKeywordClick: jest.fn(),
      shouldCallApi: false,
      keyword: '',
    };
    const { container } = render(<RecentSearchKeyword {...mockProps} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('highlight class will be present when shouldCallApi is false and both input value keyword, recentSearchVenues contain keyword are same', async () => {
    const mockProps = {
      recentSearchVenues: [{ keyword: 'UK' }, { keyword: 'INDIA' }],
      onRecentKeywordClick: jest.fn(),
      shouldCallApi: false,
      keyword: 'INDIA',
    };
    const wrapper = render(<RecentSearchKeyword {...mockProps} />);
    const selectedRow = await wrapper.findByTestId('recent-search-keyword-list-item1');
    expect(selectedRow).toHaveClass('highlight-row');
  });
});
