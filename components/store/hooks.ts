// import { useSelector,useDispatch } from "react-redux";
// import {increment,dodecrement} from '../store/slice'
// import {useState} from 'react'

// import React from 'react';



// const hooks = () => {
//     const dispatch=useDispatch()
    
// const [des, setdes] = useState<any>('');

// const count=useSelector((store:any)=>store.slice.count)

 
//     const descrement=()=>
//     {
//         let data:any=
//         {
//            des
//         }
//         dispatch(dodecrement(data))
//     }
//     const incre=()=>
//     {
//         let data:any=
//         {
//            des
//         }
//         dispatch(increment(data))
//     }
//   return (
//    {
//     incre,
//     descrement,
//     count,
//     setdes,
//    }

    
//   );
// }

// export default hooks;

import {useSelector, useDispatch} from "react-redux"
import { useEffect, useState } from "react"
import { doDecrement,  doIncrement } from "../store/slice";
import store from "../store/store";


export default function useCounter() {
    const dispatch = useDispatch()
    const [description, setDescription] = useState<string>('')

 const count = useSelector((store:any)=> store.counterSlice.count)
 
     console.log("count",count);

     const increment = ()=>{
        console.log("increment");
        let data:any=
        {
         description
        }
        dispatch(doIncrement(data))
        
     }

     const decrement = ()=>{
        console.log("ffffffffff");
        let dataSendToStore:any = {
            description
        }
        dispatch(doDecrement(dataSendToStore))
        
     }
  return {
    count,
    increment,
    decrement,
    setDescription
  }
}


