/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { unjoinMission, joinMission } from '../redux/missions/MissionsSlice';

const Missioncard = ({ missionname, description, id, missionjoin }) => {
  const dispatch = useDispatch();
  const missionSwitchHandler = (event) => {
    dispatch(joinMission(event.target.id));
  };

  const unjoinswitchhandler = (event) => {
    dispatch(unjoinMission(event.target.id));
  };
  return (
    <li className="mr-8 ml-6 grid border-l border-r border-b border-zinc-300 divide-x-[1px] divide-zinc-300 grid-cols-7">
      <div className="col-span-1 p-2 font-bold">{missionname}</div>
      <div className="col-span-4 p-2 text-sm font-light">{description}</div>
      <div className="col-span-1 p-2 flex justify-center items-center">
        {missionjoin === false ? (
          <span className="text-white bg-gray-500 px-2 rounded text-sm">
            NOT A MEMBER
          </span>
        ) : (
          <span className="text-white bg-cyan-500 px-2 text-sm rounded">
            Active Member
          </span>
        )}
      </div>
      <div className="col-span-1 p-2 flex justify-center items-center">
        {missionjoin === false ? (
          <button
            className="border px-3 py-1 font-light text-slate-800 rounded border-gray-500"
            type="submit"
            id={id}
            onClick={missionSwitchHandler}
          >
            Join Mission
          </button>
        ) : (
          <button
            className="border px-3 py-1 font-light text-red-500 rounded border-red-500"
            type="submit"
            id={id}
            onClick={unjoinswitchhandler}
          >
            Leave Mission
          </button>
        )}
      </div>
    </li>
  );
};

export default Missioncard;
