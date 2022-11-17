import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../redux/missions/MissionsSlice';
import Missionscard from './Missionscard';
import '../index.css';

const Missionlist = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    if (mission.length === 0) {
      dispatch(fetchMissionsApi());
    }
  }, []);
  return (
    <div>
      <div className="mr-8 mt-6 ml-6 grid border border-zinc-300 divide-x-[1px] divide-zinc-300 grid-cols-7">
        <div className="col-span-1 font-bold py-2 pl-2">Mission</div>
        <div className="col-span-4 font-bold py-2 pl-2">Description</div>
        <div className="col-span-1 font-bold py-2 pl-2">Status</div>
        <div className="col-span-1" />
      </div>
      <ul className="mb-6 mission-ul">
        {mission.map((item) => (
          <Missionscard
            key={item.missionid}
            missionname={item.missionName}
            description={item.missionDesc}
            id={item.missionid}
            missionjoin={item.missionjoin}
          />
        ))}
      </ul>
    </div>
  );
};

export default Missionlist;
