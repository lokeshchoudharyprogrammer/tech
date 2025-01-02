import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount,resetByZero } from './redux/features/counter/counterSlice'

function App() {
 
  const state=useSelector((state)=>{
    return state.counterReducer.value;
  })

  const dispatch = useDispatch()
  const HandleIncrement = () => {

    dispatch(increment())

  }

  const HandleDecrement = () => {
    dispatch(decrement())
  }

  const HandleReset = () => {
    dispatch(resetByZero())
  };
  const HandleIncrementByAmount = () => {
    dispatch(incrementByAmount(5))
  }
  console.log(state);

  return (
    <>
      <div>
        <button onClick={HandleIncrement}>Increment</button>

        <button onClick={HandleDecrement}>Decrement</button>

        <button onClick={HandleReset}>Reset</button>
        <button onClick={HandleIncrementByAmount}>  IncrementByAmount</button>

        <div>{state}</div>

      </div>

    </>
  )
}

export default App
