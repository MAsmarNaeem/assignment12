import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Styles from '../../styles/style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import mytodo from './hooktodo'
import { useSelector } from 'react-redux';

const todo=()=>
{
  const data=useSelector((store:any)=>store.hlotodo.slice1)
  console.error(data)
  const {input,add,forset}=mytodo()
  return(
    <div className="row justify-content-center mt-3">
    <div className={Styles.len}>
    <InputGroup  className="mt-3">
      <InputGroup.Text id="basic-addon1">ToDo</InputGroup.Text>
      <Form.Control
        placeholder="Enter Text"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={forset}
        value={input.value}
      />
       <Button onClick={add} variant="info">Add</Button>{' '}
    </InputGroup>
    
 </div>
 <h2 className="mt-5" style={{ textAlign: "center" }}>
            {data.length == 0 ? "Add Some values ..." : "TODOs"}
          </h2>
    
    <div>
 
  {
    data.map((doc:any)=>
    {
      return(
            <h2>{doc.value}</h2>
      )
    }


    )
  }
  
    </div>
      
     
    </div>
    
 

  )
}
export default todo