import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';

// state data
const initialState = [];

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// Reducers

const rocketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_ROCKETS/fulfilled': {
      return action.payload;
    }
    case RESERVE_ROCKET: {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    }

    default:
      return state;
  }
};

// action creators

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await axios.get(baseUrl);
  const rockets = response.data;
  const res = rockets.map((rocket) => ({
    id: rocket.id,
    title: rocket.rocket_name,
    image: rocket.flickr_images[0],
    description: rocket.description,
  }));
  return res;
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export default rocketReducer;
