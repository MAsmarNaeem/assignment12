// import React from 'react';
// import Styles from '../styles/style.module.css';

// import usecounter from './store/hooks'


// // type props=
// // {
// //      data:string
// // }
// const Button = () => {
    
//     const {increment,decrement,count}=usecounter()
//   return (
//     <div>
//     <button onClick={decrement} className={Styles.mod}>-</button>{count}  <button onClick={increment} className={Styles.mod} >+</button>{count}
      
//     </div>
//   );
// }

// export default Button;
import useCounter from "../components/store/hooks"

import Styles from '../styles/style.module.css';
function CounterApp() {
    const { count, increment, decrement } = useCounter()
    return (
        <div>
            <h1>Counter App</h1>

            <button className={Styles.mod} onClick={decrement}>-</button> {count} <button className={Styles.mod}  onClick={increment} >+</button>
        </div>
    )
}

export default CounterApp
