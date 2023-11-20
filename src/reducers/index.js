import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      const {data} = action.payload;

      return {
        ...state,
        list: data,
      };
    },
  },
});

export const {add} = counterSlice.actions;

export default counterSlice.reducer;
