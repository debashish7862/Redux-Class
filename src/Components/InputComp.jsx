import './input.css'
import { useState } from 'react'
import myStore from '../Redux/Store'
export default function InputComp() {
    const[state,setState]=useState('')
    const callDispatch = ()=>{
        myStore.dispatch({
            type:"name",
            userName:state,
        })
    }
  return (
    <div className='input'>
        <h2>Input Component</h2>
        <input type="text"onChange={(e)=>{setState(e.target.value)

        }} />
        <button onClick={callDispatch}>Submit</button>
    </div>
  )
}
