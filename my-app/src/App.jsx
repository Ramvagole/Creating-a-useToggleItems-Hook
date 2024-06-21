import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggleItems } from './component/useToggleItems'
function App() {
  let [array,value,inc]=useToggleItems(["A","B","C","D"],0)

  return (
    <>
      <button style={{backgroundColor:"orange"}} onClick={inc}>{array[value]}</button>
    </>
  )
}

export default App
