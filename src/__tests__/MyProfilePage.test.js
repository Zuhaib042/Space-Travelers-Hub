import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import MyProfilePage from '../pages/MyProfilePage';

describe('testing rockets page', () => {
  it('should render the rockets page correctly', () => {
    const rocketPage = render(
      <Provider store={store}>
        <MyProfilePage />
      </Provider>,
    );
    expect(rocketPage).toMatchSnapshot();
  });
});
