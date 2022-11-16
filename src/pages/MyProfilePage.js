import React from 'react';
import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const allRockets = useSelector((state) => state.rocket);
  const rocketProfile = allRockets.filter((rocket) => rocket.reserved);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-2 gap-y-2 mx-auto w-[75%]">
      <div className="">
        <h2 className="text-xl">Missions</h2>
        <ul className=" mt-3">
          <li className="border">Mars</li>
        </ul>
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
