import store from '../redux/configureStore';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MissionsPage from '../pages/RocketsPage';

describe('testing rockets page', () => {
  it('should render the rockets page correctly', () => {
    const missionsPage = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    expect(missionsPage).toMatchSnapshot();
  });
});
