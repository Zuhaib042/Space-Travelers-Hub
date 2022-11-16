import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../redux/missions/MissionsSlice';
import Missionscard from './Missionscard';
import '../index.css';

const Missionlist = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissionsApi());
  }, []);
  return (
    <div>
      <div className="heading">
        <div className="col1">Mission</div>
        <div className="col2">Description</div>
        <div className="col3">Status</div>
      </div>
      { mission.map((item) => (
        <Missionscard
          key={item.missionid}
          missionname={item.missionName}
          description={item.missionDesc}
          id={item.missionid}
          missionjoin={item.missionjoin}
        />
      )) }
    </div>
  );
};

export default Missionlist;
