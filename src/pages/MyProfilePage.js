// import React from 'react';
// import { useSelector } from 'react-redux';

// const MyProfilePage = () => {
//   const allRockets = useSelector((state) => state.rocket);
//   const rocketProfile = allRockets.filter((rocket) => rocket.reserved);

//   return (
//     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-2 gap-y-2 mx-auto w-[75%]">
//       <div className="">
//         <h2 className="text-xl">Missions</h2>
//         <ul className=" mt-3">
//           <li className="border">Mars</li>
//         </ul>
//       </div>
//       <div className="">
//         <h2 className="text-xl">Rockets</h2>
//         {rocketProfile.length > 0 ? (
//           <ul className="mt-3 border divide-y-[1px]">
//             {rocketProfile.map((rocket) => (
//               <li key={rocket.id} className="py-3 pl-2">
//                 {rocket.title}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           ''
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfilePage;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllmissions, unjoinMission } from '../redux/missions/MissionsSlice';

function MyProfilePage() {
  const dispatch = useDispatch();
  const reservation = useSelector(selectAllmissions);
  const missiondata = reservation.filter((item) => item.missionjoin === true);

  const cancelmissionHandler = (event) => {
    const missioncancel = event.target.id;
    dispatch(unjoinMission(missioncancel));
  };

  return (
    <section className="table-container">
      <div className="missions">
        <span className="text-2xl">My Missions</span>
        {!missiondata.length ? (<span>There are no missions joined.</span>) : null }
        <div className="items-list">
          {missiondata && missiondata.map((elem) => (
            <div className="list-box" key={elem.missionid}>
              <span className="list-name">
                {elem.missionName}
              </span>
              <button className="remBtn" type="button" id={elem.missionid} onClick={cancelmissionHandler}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProfilePage;
