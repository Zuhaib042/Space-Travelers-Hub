import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllmissions } from '../redux/missions/MissionsSlice';

const MyProfilePage = () => {
  // rockets reservation
  const allRockets = useSelector((state) => state.rocket);
  const rocketProfile = allRockets.filter((rocket) => rocket.reserved);

  // missions reservation
  const reservation = useSelector(selectAllmissions);
  const missiondata = reservation.filter((item) => item.missionjoin);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-6 mx-auto ml-8 mr-12">
      <div className="">
        <h2 className="text-xl">Missions</h2>
        {missiondata.length > 0 ? (
          <ul className="mt-3 border divide-y-[1px]">
            {missiondata.map((mission) => (
              <li key={mission.missionid} className="py-3 pl-2">
                {mission.missionName}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
      <div className="">
        <h2 className="text-xl">Rockets</h2>
        {rocketProfile.length > 0 ? (
          <ul className="mt-3 border divide-y-[1px]">
            {rocketProfile.map((rocket) => (
              <li key={rocket.id} className="py-3 pl-2">
                {rocket.title}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MyProfilePage;
