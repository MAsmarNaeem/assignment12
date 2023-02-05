// import { createSlice } from "@reduxjs/toolkit";

// const slice1:any = createSlice({
//   name: "slice1",
//   initialState: [],
//   reducers: {
//     changeValue: (state:any, action:any):any => {
//       let newState = [
//         ...state,
//         {
//         ...action.payload,
//           id: 1,
//         },
//       ];
//       return newState;
//     },
//   },
// });

// export const { changeValue } = slice1.actions;
// export default slice1.reducer;
 import { createSlice } from "@reduxjs/toolkit";
 import { combineReducers } from "redux";

const slice1: any = createSlice({
  name: "slice1",
  initialState: [],
  reducers: {
    changeValue: (state: any, action: any): any => {
      let newState = [
        ...state,
        {
          ...action.payload,
          id: 1,
        },
      ];
      return newState;
    },
  },
});

export default combineReducers({
  slice1: slice1.reducer,
});

export const { changeValue } = slice1.actions;


// export const { changeValue } = slice1.actions;
// export default slice1.reducer;
