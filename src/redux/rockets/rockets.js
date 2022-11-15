import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions
const FETCH_ROCKETS = 'FETCH_ROCKETS';

// state data
const initialState = [];

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

// async function fetch() {
//   try {
//     const response = await axios.get(baseUrl);
//     const rockets = response.data;
//     const res = Object.keys(rockets).map((id) => ({
//       id: rockets[id].id,
//       title: rockets[id].rocket_name,
//       image: rockets[id].flickr_images[0],
//       decription: rockets[id].description,
//     }));
//     console.log(res[1].id);
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetch();

// Reducers

const rocketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_ROCKETS/fulfilled': {
      return action.payload;
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
    image: rocket.flickr_images[1],
    description: rocket.description,
  }));
  return res;
});

export default rocketReducer;
