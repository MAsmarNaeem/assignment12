import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Style } from '../styles/Style.module.css';
import Styles from '../styles/style.module.css';
import Button from '@/components/Button';
import Todo from '../components/todo/Todo'
const inter = Inter({ subsets: ['latin'] })
import '../styles/style.module.css'
import { useState } from 'react';
import { text } from 'stream/consumers';

export default function Home() {
  const[color,setcolor]=useState("")
  return (
    <div  style={{background:color, height:"100vh" }} className="text-center">
      <h2>write color for background</h2>
      <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} placeholder='Write any color' />
 

    <div  className="text-center  ">
     <h2 className={Styles.back}>Lets make app with redux</h2>
     <Button />

     <h2    className={Styles.back}>Lets make Todo app</h2>
     <Todo/>
     </div>
   

     

   // </div>
    
  
  )
}
