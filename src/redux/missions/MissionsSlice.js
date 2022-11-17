import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://api.spacexdata.com/v3/missions';

// Async Action Creators
export const fetchMissionsApi = createAsyncThunk(
  'missions/fetchMissionsApi',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Slice Reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: {
      reducer: (state, action) => state.map((item) => (
        item.missionid !== action.payload ? item
          : { ...item, missionjoin: true }
      )),
    },
    unjoinMission: {
      reducer: (state, action) => state.map((item) => (
        item.missionid !== action.payload ? item
          : { ...item, missionjoin: false }
      )),
    },
  },
  extraReducers: {
    [fetchMissionsApi.fulfilled]: (state, action) => {
      const missions = action.payload.map((elem) => ({
        missionid: elem.mission_id,
        missionName: elem.mission_name,
        missionDesc: elem.description,
        missionjoin: false,
      }));
      return missions;
    },
  },
});

export const selectAllmissions = (state) => state.missions;
export const { joinMission, unjoinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
