import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeValue } from '../store/TodoSlice'

const Todo=()=>
{
    const dispatch=useDispatch()
    const[input,setinput]=useState<any>({
        value:""
    })

    const forset=(e:any)=>
    {
        setinput({
            ...input,
            value:e.target.value,

        })
    }
    const add=()=>
    {
        dispatch(changeValue(input))
        setinput:({value:""});
    }

    return(
      {
        input,
        add,
        forset,
      }

    )
}
export default Todo


