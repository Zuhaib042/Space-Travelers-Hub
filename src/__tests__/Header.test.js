import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('should render header correctly', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const rocketsTag = screen.getByText(/rockets/i);

    expect(rocketsTag).toMatchSnapshot();
  });
  it('should render header correctly', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    const missionsTag = screen.getByRole('link', { name: 'Missions' });

    expect(missionsTag).toMatchSnapshot();
  });
});
