import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'counter',
  initialState: {count:0},
  reducers: {
   // increment:(state:any, action:any) => {
     
    //     let newstate=
    //     {
    //       ...state,
    //       count:state.count-1,
    //       data:action.payload.data
          

    //     }
    //     return newstate
    
    // },
    
  
    doDecrement:(state:any,action:any)=> {
        let newstate=
        {
            ...state,
            count:state.count-1,
            data:action.payload.data,
        }
        return newstate



     },
     doIncrement:(state:any, action:any) => {
     
        let newstate=
        {
          ...state,
          count:state.count+1,
          data:action.payload.data
          

        }
        return newstate
    
    },
 
 },

}    )

export const {  doIncrement, doDecrement  } = slice.actions
export default slice.reducer