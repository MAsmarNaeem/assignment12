import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice';
import hlotodo from './TodoSlice'

const store = configureStore({
    reducer: {
     counterSlice,
     hlotodo,
    }
});


export default store;
