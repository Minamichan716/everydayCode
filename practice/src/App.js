import React, {useState} from 'react'
import './App.css';
import Button from './Button';


const name = 'みなみ'

function App() {
  const [count,setcount] = useState(0)

  return (
    <div className='App'>
    <p>カウント:{count}</p>
    <Button btn_click={() => {setcount(count + 1)}} btn_txt="+"/>
    <Button btn_click={() => {setcount(count - 1)}} btn_txt="-"/>
    <Button btn_click={() => {setcount(0)}} btn_txt="リセット"/>
   <h1>{name}</h1>
    </div>
  )
}




export default App;
