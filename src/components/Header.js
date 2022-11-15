import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <div className="flex justify-between items-center py-3 border-zinc-300 border-b">
    <div className="flex items-center ml-10">
      <img src={planet} alt="planetImage" width="50px" />
      <h3 className="text-3xl pl-2">Space Travelers&apos; Hub</h3>
    </div>
    <ul className="flex mr-14">
      <li className="px-4 text-[#017bfe]">
        <NavLink
          to="/"
          style={(isActive) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>
      </li>
      <li className="px-4 text-[#017bfe]">
        <NavLink
          to="/missionspage"
          style={(isActive) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
      </li>
      <li className="px-4 border-l border-slate-500  text-[#017bfe]">
        <NavLink
          to="/myprofilepage"
          style={(isActive) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
