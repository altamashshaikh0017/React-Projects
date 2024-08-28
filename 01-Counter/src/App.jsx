import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue = ()=>{
    if(count==5){
      alert("Counter Cannot Exceed Above this Limit");
      setCount(count=5);
    }else{
      setCount(count+1);
    }
  }

  const decreaseValue = ()=>{
    if(count<=0){
      alert("Counter Limit Reached");
      setCount(count=0);
    }else{
      setCount(count-1);
    }
  }
  return (
    <>
      <h1>Welcome To React</h1>
      <h2>Counter :{count} </h2>
      <button onClick={addValue}> Increase</button>
      <br />
      <button onClick={decreaseValue}> Increase</button>
    </>
  )
}

export default App
