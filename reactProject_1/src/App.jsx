import { useState } from "react";
import "./App.css";

function App() {
   let [counter,setCounter] = useState(10)
   const [message, setMessage] = useState("");
  const addValue = () => {
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter)
    } else {
      setMessage('You cant go above 20')
    }
  };
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    } else{
      setMessage('You cant go below 0')
    }
    
  }
  return (  
    <>
      <h1>Jatin aur React</h1>
      <h2>Counter value: {counter} </h2>
      <p>{message}</p>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
