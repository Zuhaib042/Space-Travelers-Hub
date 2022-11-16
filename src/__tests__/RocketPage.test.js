import store from '../redux/configureStore';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketsPage from '../pages/RocketsPage';

describe('testing rockets page', () => {
  it('should render the rockets page correctly', () => {
    const rocketPage = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    expect(rocketPage).toMatchSnapshot();
  });
});
