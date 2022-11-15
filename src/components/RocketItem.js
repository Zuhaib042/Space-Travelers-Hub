import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

const RocketItem = ({ id, title, description, image, reserved }) => {
  const dispatch = useDispatch();

  return (
    <li className="grid grid-cols-1 md:grid-cols-9 ml-6 mr-8 my-5 md:my-3">
      <div className="col-span-2">
        <img src={image} alt="rocket" />
      </div>
      <div className="col-span-7 mt-4 md:mt-0 ml-3">
        <h3 className="text-xl ">{title}</h3>
        <p className="text-[0.8rem] ">
          {reserved && (
            <span className="bg-cyan-500 text-white px-1 rounded mr-1">
              reserved
            </span>
          )}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            className="bg-[#017bfe] mt-2 text-white rounded py-2 px-4"
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve rocket
          </button>
        )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default RocketItem;
