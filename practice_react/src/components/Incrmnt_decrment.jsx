import React, { useState } from 'react'

import './Incrmnt_decrment.css';

function Incrmnt_decrment() {

    const [data, setData] = useState(1);

    const IncrNum = () =>{
        setData(data*3)
    }

    const decr = () =>{

        if(data>0){
            setData(data%2)
        }

       
    }

    const rest = () => {
        setData(0)
    }
    




  return (
    <div>
<div className='outpt'>{data}</div>

    <div>
    <button className='incrBtn' onClick={IncrNum}>Increment</button>
    <button className='decreBtn' onClick={decr}>Decrement</button>
    <button className='rst' onClick={rest}>Reset</button>
    </div>

    </div>
 


  )
}

export default Incrmnt_decrment