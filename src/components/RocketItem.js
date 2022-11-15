import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ title, image, description }) => (
  <li className="grid grid-cols-1 md:grid-cols-9 ml-6 mr-8 my-5 md:my-3">
    <div className="col-span-2">
      <img src={image} alt="rocket" />
    </div>
    <div className="col-span-7 mt-4 md:mt-0 ml-3">
      <h3 className="text-xl md:my-1">{title}</h3>
      <p className="text-[0.8rem]">{description}</p>
    </div>
  </li>
);

RocketItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default RocketItem;
