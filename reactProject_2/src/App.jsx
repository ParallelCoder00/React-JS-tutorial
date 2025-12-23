import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count,setCount] = useState(0)
  let myObj = {
    username: 'JatinCodes',
    code: 'blanck',
  }
  return (
    <>
     <Card username="JatinCodes"/>
    </>
  )
}
export default App
