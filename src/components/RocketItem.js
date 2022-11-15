import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ title, image, description }) => (
  <div>
    <li>
      <div>
        <img src={image} alt="" />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  </div>
);

RocketItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default RocketItem;
