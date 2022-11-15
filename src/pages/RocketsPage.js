import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketItem from '../components/RocketItem';
import { fetchRockets } from '../redux/rockets/rockets';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rocketElements = allRockets.map((rocket) => (
    <RocketItem
      key={rocket.id}
      title={rocket.title}
      id={rocket.id}
      image={rocket.image}
      description={rocket.description}
    />
  ));

  return (
    <div>
      <ul>{rocketElements}</ul>
    </div>
  );
};

export default RocketsPage;
